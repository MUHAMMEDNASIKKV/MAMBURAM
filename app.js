// ============================================
// PG QUOTA REGISTRATION PORTAL
// Frontend JavaScript (app.js) - Department Based
// ============================================

// Configuration
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6am8LEttl7cg3WXNGEe1FooeNvKDv-ED9MqbB-U-ctX7uuymy8Gfs7ptZOYPwEKFo/exec";
const CSV_STUDENTS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRn9theJ-8Yp_ZMaao7Mq9AM69QId1_R2M7YXKEuabzMKRm_3l7buLPUHsHbiMSPS4vDFEX84AbQ5mo/pub?gid=0&single=true&output=csv";

// Department list with slot limit
const DEPARTMENTS = [
    "Quran and Related Sciences",
    "Hadith and Related Sciences",
    "Fiqh and Usul al-Fiqh",
    "Islamic Economics and Finance",
    "Aqeeda and Philosophy",
    "Study of Religion",
    "Civilizational Studies",
    "Societal Development",
    "Arabic Language and Literature",
    "Translation and Comparitive Literature",
    "Governance and Public Leadership",
    "Community Leadership and Social Change",
    "Law, Justice and Governance",
    "Holistic Education",
    "Media and Communication"
];

const SLOTS_PER_DEPARTMENT = 6;

// ============================================
// GLOBAL STATE
// ============================================
let studentsDataFromCSV = new Map();   // enrol -> { name }
let registrationsData = [];            // registration data from sheet
let departmentSlots = {};              // department -> count

let currentStudent = null;
let selectedDepartment = null;
let dataReady = false;
let pendingEnrol = null;

// DOM Elements
const enrolInput = document.getElementById('enrolNo');
const studentNameField = document.getElementById('studentName');
const departmentContainer = document.getElementById('departmentContainer');
const departmentSlotInfo = document.getElementById('departmentSlotInfo');
const submitBtn = document.getElementById('submitBtn');
const alertPopup = document.getElementById('alertPopup');
const enrolError = document.getElementById('enrolError');
const statusContainer = document.getElementById('statusContainer');
const statusDisplay = document.getElementById('statusDisplay');

// ============================================
// 🚀 INIT – PARALLEL LOAD, INPUT ENABLED IMMEDIATELY
// ============================================
setupEventListeners();

(async function init() {
    enrolInput.disabled = false;
    enrolInput.placeholder = "Enter your enrolment number";

    const csvPromise = loadCSVDataFast();
    const regPromise = loadRegistrationsData();

    await Promise.all([csvPromise, regPromise]);

    dataReady = true;
    computeDepartmentSlots();

    if (pendingEnrol) {
        lookupStudentFast(pendingEnrol);
        pendingEnrol = null;
    } else {
        resetStudentUI();
    }

    // Background refresh to keep slot counts updated
    setInterval(async () => {
        await loadRegistrationsData();
        computeDepartmentSlots();

        if (currentStudent && currentStudent.enrol) {
            const existingRegistration = registrationsData.find(r =>
                String(r.enrol).trim().toLowerCase() === String(currentStudent.enrol).trim().toLowerCase()
            );

            currentStudent.status = existingRegistration?.department || "";

            if (currentStudent.status && currentStudent.status !== "") {
                statusContainer.classList.remove("hidden");
                statusDisplay.innerHTML = `<span class="status-badge status-submitted"><i class="fas fa-check-circle mr-1"></i> Registered for ${currentStudent.status}</span>`;
                submitBtn.disabled = true;
                submitBtn.style.opacity = "0.6";
                submitBtn.style.cursor = "not-allowed";
            }

            renderDepartmentCards();
        }
    }, 30000);

    console.log('✅ Portal ready - CSV and registrations loaded');
})();

// ============================================
// 🎧 EVENT LISTENERS
// ============================================
function setupEventListeners() {
    let debounceTimeout;

    enrolInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        clearTimeout(debounceTimeout);

        debounceTimeout = setTimeout(() => {
            if (val.length > 0) {
                lookupStudentFast(val);
            } else {
                resetStudentUI();
            }
        }, 60);
    });

    submitBtn.addEventListener('click', submitRegistration);
}

// ============================================
// 📥 FAST CSV LOADING
// ============================================
async function loadCSVDataFast() {
    try {
        const response = await fetch(CSV_STUDENTS_URL);
        const csvText = await response.text();

        const lines = csvText.split(/\r?\n/);
        if (lines.length < 2) return;

        const headers = lines[0].split(',').map(h => h.replace(/["']/g, '').trim().toLowerCase());
        const enrolIdx = headers.findIndex(h => h.includes('enrol') || h === 'enrl no');
        const nameIdx = headers.findIndex(h => h === 'name');

        studentsDataFromCSV.clear();

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const values = fastCSVParse(line);

            const enrolNo = values[enrolIdx]?.trim() || '';
            const name = values[nameIdx]?.trim() || '';

            if (enrolNo && name) {
                studentsDataFromCSV.set(String(enrolNo).trim(), {
                    name: name
                });
            }
        }

        console.log(`⚡ Fast-loaded ${studentsDataFromCSV.size} students from CSV`);
    } catch (err) {
        console.error("CSV fetch error:", err);
        showAlert("Failed to load student data. Please refresh.", true);
    }
}

// Optimized CSV row parsing
function fastCSVParse(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }

    result.push(current.trim());
    return result;
}

// ============================================
// 📥 LOAD REGISTRATIONS
// ============================================
async function loadRegistrationsData() {
    try {
        const response = await fetch(`${APPS_SCRIPT_URL}?action=getAllRegistrations&t=${Date.now()}`);
        const data = await response.json();

        if (data.error) {
            console.error("Error loading registrations:", data.error);
            registrationsData = [];
            return;
        }

        if (Array.isArray(data)) {
            registrationsData = data;
        } else if (data.data && Array.isArray(data.data)) {
            registrationsData = data.data;
        } else {
            registrationsData = [];
        }

        console.log(`📋 Loaded ${registrationsData.length} registrations`);
    } catch (err) {
        console.warn("Registrations fetch failed, using last known data");
    }
}

// ============================================
// 📊 DEPARTMENT SLOT COMPUTATION
// ============================================
function computeDepartmentSlots() {
    // Initialize all departments with 0
    departmentSlots = {};
    DEPARTMENTS.forEach(dept => {
        departmentSlots[dept] = 0;
    });

    // Count registrations per department
    for (const registration of registrationsData) {
        const dept = registration.department;
        if (dept && departmentSlots[dept] !== undefined) {
            departmentSlots[dept]++;
        }
    }
}

// ============================================
// 🔍 FAST STUDENT LOOKUP
// ============================================
function lookupStudentFast(enrol) {
    const cleanEnrol = String(enrol).trim();

    if (!cleanEnrol) {
        resetStudentUI();
        return false;
    }

    if (!dataReady) {
        pendingEnrol = cleanEnrol;
        enrolInput.placeholder = "Loading data...";
        return false;
    }

    const csvStudent = studentsDataFromCSV.get(cleanEnrol);

    if (!csvStudent) {
        enrolError.textContent = "❌ Enrolment number not found in registry";
        enrolError.classList.remove("hidden");
        resetStudentUI();
        return false;
    }

    enrolError.classList.add("hidden");

    const existingRegistration = registrationsData.find(r =>
        String(r.enrol).trim().toLowerCase() === cleanEnrol.toLowerCase()
    );

    currentStudent = {
        enrol: cleanEnrol,
        name: csvStudent.name,
        status: existingRegistration?.department || ""
    };

    studentNameField.value = currentStudent.name;

    if (currentStudent.status && currentStudent.status !== "") {
        statusContainer.classList.remove("hidden");
        statusDisplay.innerHTML = `<span class="status-badge status-submitted"><i class="fas fa-check-circle mr-1"></i> Registered for ${currentStudent.status}</span>`;
        selectedDepartment = null;
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.6";
        submitBtn.style.cursor = "not-allowed";
        showAlert(`ℹ️ You have already registered for ${currentStudent.status}. Registration cannot be changed.`, false);
    } else {
        statusContainer.classList.add("hidden");
        statusDisplay.innerHTML = "";
        selectedDepartment = null;
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
    }

    renderDepartmentCards();
    return true;
}

function resetStudentUI() {
    studentNameField.value = '';
    currentStudent = null;
    selectedDepartment = null;
    statusContainer.classList.add("hidden");
    statusDisplay.innerHTML = "";
    renderDepartmentCards();
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
    submitBtn.style.cursor = "pointer";
}

// ============================================
// 🎨 RENDER DEPARTMENT CARDS
// ============================================
function isSlotAvailable(department) {
    const current = departmentSlots[department] || 0;
    return current < SLOTS_PER_DEPARTMENT;
}

function getRemainingSlots(department) {
    const current = departmentSlots[department] || 0;
    return Math.max(0, SLOTS_PER_DEPARTMENT - current);
}

function renderDepartmentCards() {
    if (!currentStudent) {
        departmentContainer.innerHTML = `
            <div class="col-span-full text-center text-gray-400 py-8">
                <i class="fas fa-search text-3xl mb-2"></i>
                <p>Enter your enrolment number to see available departments</p>
            </div>
        `;
        departmentSlotInfo.innerHTML = '';
        return;
    }

    let cardsHtml = '';

    DEPARTMENTS.forEach(dept => {
        const current = departmentSlots[dept] || 0;
        const available = current < SLOTS_PER_DEPARTMENT;
        const remaining = SLOTS_PER_DEPARTMENT - current;
        const isSelected = (selectedDepartment === dept);
        const isAlreadyRegistered = currentStudent?.status && currentStudent.status !== "";

        let disabledClass = '';
        let clickAttr = '';

        if (!available || isAlreadyRegistered) {
            disabledClass = 'department-card disabled';
        } else {
            disabledClass = 'department-card cursor-pointer hover:shadow-md transition-all';
            clickAttr = `onclick="selectDepartment('${dept.replace(/'/g, "\\'")}')"`;
        }

        const selectedClass = isSelected ? 'selected' : '';

        cardsHtml += `
            <div class="${disabledClass} ${selectedClass}" ${clickAttr} data-department="${dept}">
                <h3 class="font-semibold text-gray-800 text-sm mb-2">${dept}</h3>
                <div class="slot-badge ${!available ? 'slot-full' : 'bg-emerald-100 text-emerald-700'}">
                    ${available ? `${remaining} slots left` : 'Full'}
                </div>
            </div>
        `;
    });

    departmentContainer.innerHTML = cardsHtml;
    departmentSlotInfo.innerHTML = '';
}

// Global function for department selection
window.selectDepartment = function(department) {
    if (!currentStudent) {
        showAlert("Please enter a valid enrolment number first");
        return;
    }

    if (currentStudent.status && currentStudent.status !== "") {
        showAlert(`You have already registered for ${currentStudent.status}. Registration cannot be changed.`);
        return;
    }

    if (!isSlotAvailable(department)) {
        showAlert(`No available slots for ${department}. This department is full.`);
        renderDepartmentCards();
        return;
    }

    selectedDepartment = department;
    renderDepartmentCards();
    showAlert(`Selected: ${department}`, false);
};

// ============================================
// 📤 SUBMIT REGISTRATION TO GOOGLE SHEET
// ============================================
async function submitRegistration() {
    if (!currentStudent) {
        showAlert("❌ Please enter a valid enrolment number first.");
        return;
    }

    if (currentStudent.status && currentStudent.status !== "") {
        showAlert(`⚠️ You have already registered for ${currentStudent.status}. Registration cannot be changed.`);
        return;
    }

    if (!selectedDepartment) {
        showAlert("⚠️ Please select a department before submitting.");
        return;
    }

    if (!isSlotAvailable(selectedDepartment)) {
        showAlert(`❌ No available slots for ${selectedDepartment}. Slots are full.`);
        renderDepartmentCards();
        return;
    }

    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div class="loading-spinner"></div> Submitting...';

    try {
        const response = await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                action: "updateStatus",
                enrolNo: currentStudent.enrol,
                department: selectedDepartment,
                name: currentStudent.name
            })
        });

        const result = await response.json();

        if (result.success) {
            currentStudent.status = selectedDepartment;

            registrationsData.push({
                enrol: currentStudent.enrol,
                name: currentStudent.name,
                department: selectedDepartment,
                submission_date: new Date().toISOString()
            });

            computeDepartmentSlots();

            showAlert(`✅ Success! You have registered for ${selectedDepartment}.`, false);

            statusContainer.classList.remove("hidden");
            statusDisplay.innerHTML = `<span class="status-badge status-submitted"><i class="fas fa-check-circle mr-1"></i> Registered for ${selectedDepartment}</span>`;
            renderDepartmentCards();
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.6";
            submitBtn.style.cursor = "not-allowed";
        } else {
            showAlert(`❌ Registration failed: ${result.error || "Unknown error"}`);
            await loadRegistrationsData();
            computeDepartmentSlots();
            renderDepartmentCards();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
            submitBtn.style.opacity = "1";
            submitBtn.style.cursor = "pointer";
        }
    } catch (error) {
        console.error("Submit error:", error);
        showAlert("Network error: Could not register. Please try again later.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
    }
}

// ============================================
// 🔔 UI HELPERS
// ============================================
function showAlert(message, isError = true) {
    alertPopup.textContent = message;
    alertPopup.style.background = isError ? "#dc2626" : "#059669";
    alertPopup.classList.add('show');
    setTimeout(() => {
        alertPopup.classList.remove('show');
    }, 3000);
}

// ============================================
// 🔒 SECURITY (Optional)
// ============================================

// Disable right-click
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Disable inspect shortcuts
document.addEventListener("keydown", function(e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && (e.key === "u" || e.key === "U"))
    ) {
        e.preventDefault();
    }
});

console.log('%c⚡ PG Quota Registration Portal - Department Based ⚡', 'color: #059669; font-size: 16px; font-weight: bold;');
