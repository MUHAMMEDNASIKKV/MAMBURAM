// ============================================
// PG QUOTA REGISTRATION PORTAL
// Frontend JavaScript (app.js)
// ============================================

// Configuration
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw6am8LEttl7cg3WXNGEe1FooeNvKDv-ED9MqbB-U-ctX7uuymy8Gfs7ptZOYPwEKFo/exec";

const SLOTS_PER_DEPARTMENT = 6;

// Complete student database with departments
const STUDENT_DATABASE = {
    "16074": { name: "Abdul Hadhi E", department: "Quran and Related Sciences" },
    "16075": { name: "Fasil Zaman Pk", department: "Quran and Related Sciences" },
    "16077": { name: "Muhammed Shamil M", department: "Quran and Related Sciences" },
    "16078": { name: "Muhammad Raoof", department: "Quran and Related Sciences" },
    "16110": { name: "Muhammad Jalal M.A", department: "Quran and Related Sciences" },
    "16122": { name: "Muhammed Nihal Nk", department: "Quran and Related Sciences" },
    "16128": { name: "Muhammed Siyad Pk", department: "Quran and Related Sciences" },
    "16150": { name: "Muhammed Basim Pp", department: "Quran and Related Sciences" },
    "16620": { name: "Ajmal Nassar N.T", department: "Quran and Related Sciences" },
    "16622": { name: "Muhammed Jasim M", department: "Quran and Related Sciences" },
    "16628": { name: "Anfas C", department: "Quran and Related Sciences" },
    "16635": { name: "Abdullah Shakir", department: "Quran and Related Sciences" },
    "16648": { name: "Munshid P", department: "Quran and Related Sciences" },
    "16649": { name: "Adnan Saqaf C P", department: "Quran and Related Sciences" },
    "16651": { name: "Shamseer Muhammed", department: "Quran and Related Sciences" },
    "16156": { name: "Aboobacker Sidheeque", department: "Quran and Related Sciences" },
    "16158": { name: "Muhammed Nabeel Ak", department: "Quran and Related Sciences" },
    "16160": { name: "Muhammed Swalih T", department: "Quran and Related Sciences" },
    "16172": { name: "Muhammed Aslam P", department: "Quran and Related Sciences" },
    "16178": { name: "Muhammed Yoonus V", department: "Quran and Related Sciences" },
    "16179": { name: "Muhammed Savad Pp", department: "Quran and Related Sciences" },
    "16185": { name: "Muhammed Ma", department: "Quran and Related Sciences" },
    "16194": { name: "Aboo Noorul Arshad U", department: "Quran and Related Sciences" },
    "16663": { name: "Muhammed Sawad", department: "Quran and Related Sciences" },
    "16666": { name: "Muhammed Minhaj P", department: "Quran and Related Sciences" },
    "16668": { name: "Irfan Yasir P", department: "Quran and Related Sciences" },
    "16678": { name: "Mohammad Nawaz", department: "Quran and Related Sciences" },
    "16683": { name: "Mohamed Shibil P P", department: "Quran and Related Sciences" },
    "16691": { name: "Muhammed Ansar", department: "Quran and Related Sciences" },
    "16696": { name: "Muhammed Suhail", department: "Quran and Related Sciences" },
    "16195": { name: "Md Zaid", department: "Quran and Related Sciences" },
    "16196": { name: "Asraful Alom", department: "Quran and Related Sciences" },
    "16215": { name: "Muhammad Ahmmed", department: "Quran and Related Sciences" },
    "16222": { name: "Althaf Ashraf", department: "Quran and Related Sciences" },
    "16229": { name: "Gulam Muhiyuddin", department: "Quran and Related Sciences" },
    "16232": { name: "Muhammed Muhsin K", department: "Quran and Related Sciences" },
    "16234": { name: "Ahammed Fais Pa", department: "Quran and Related Sciences" },
    "16245": { name: "Mohammad Jaseem", department: "Quran and Related Sciences" },
    "16701": { name: "Muhammed Jazeel V", department: "Quran and Related Sciences" },
    "16709": { name: "Sahl Nm", department: "Quran and Related Sciences" },
    "16715": { name: "Muhammed Shafnas", department: "Quran and Related Sciences" },
    "16716": { name: "Md Sajid Raza", department: "Quran and Related Sciences" },
    "16739": { name: "Muhammed Sahal Ap", department: "Quran and Related Sciences" },
    "16751": { name: "Muhammed Iqbal Ma", department: "Quran and Related Sciences" },
    "16770": { name: "Zulfikarali", department: "Quran and Related Sciences" },
    "16262": { name: "Shah Safar T", department: "Quran and Related Sciences" },
    "16271": { name: "Muhammed Bisher E", department: "Quran and Related Sciences" },
    "16279": { name: "Shaheer Ali", department: "Quran and Related Sciences" },
    "16297": { name: "Subhan V", department: "Quran and Related Sciences" },
    "16300": { name: "Umarul Farook K K", department: "Quran and Related Sciences" },
    "16308": { name: "Khaleelul Rahman Ck", department: "Quran and Related Sciences" },
    "16334": { name: "Muhammad Shahood", department: "Quran and Related Sciences" },
    "16349": { name: "Md Sofiyan", department: "Quran and Related Sciences" },
    "16784": { name: "Javad Ahmed Bilal P", department: "Quran and Related Sciences" },
    "16798": { name: "Swabeeh P M", department: "Quran and Related Sciences" },
    "16807": { name: "Muhammed Anas T K", department: "Quran and Related Sciences" },
    "16810": { name: "Azam Rabbani", department: "Quran and Related Sciences" },
    "16821": { name: "Zakkariya Pk", department: "Quran and Related Sciences" },
    "16823": { name: "Mahammad Shabeer", department: "Quran and Related Sciences" },
    "16382": { name: "Muhammed Swalih Kt", department: "Quran and Related Sciences" },
    "16383": { name: "Ajsal Manakkadavan", department: "Quran and Related Sciences" },
    "16552": { name: "Muhammed Nasik Kv", department: "Quran and Related Sciences" },
    "16612": { name: "Athaullah", department: "Quran and Related Sciences" },
    "16835": { name: "Abid Ba", department: "Quran and Related Sciences" },
    "16846": { name: "Muhammed Uwaiz K A", department: "Quran and Related Sciences" },
    "16855": { name: "Muhammad Murshid", department: "Quran and Related Sciences" },
    "16875": { name: "Muhammed Anshad P", department: "Quran and Related Sciences" },
    "16889": { name: "Muzammil N", department: "Quran and Related Sciences" },
    "16960": { name: "Muhammed Alfas Am", department: "Quran and Related Sciences" },
    "17028": { name: "Moosa Fayiz P K", department: "Quran and Related Sciences" },
    "17047": { name: "Mohd Muzammil P M", department: "Quran and Related Sciences" },
    "17106": { name: "Muhammad Sabith", department: "Quran and Related Sciences" },
    "17195": { name: "Muhammed Hinan KN", department: "Quran and Related Sciences" },
    "16007": { name: "Ubaidah Abul Hasanat", department: "Hadith and Related Sciences" },
    "16061": { name: "Shanif", department: "Hadith and Related Sciences" },
    "16086": { name: "Althaf C N", department: "Hadith and Related Sciences" },
    "16093": { name: "Ibrahim Tp", department: "Hadith and Related Sciences" },
    "16170": { name: "Ibrahim Khaleel", department: "Hadith and Related Sciences" },
    "16282": { name: "Ahammad Jaseel S", department: "Hadith and Related Sciences" },
    "16299": { name: "Mohammed Marzook", department: "Hadith and Related Sciences" },
    "16305": { name: "Abdul Razak Pk", department: "Hadith and Related Sciences" },
    "16661": { name: "Muhammed Shaneed", department: "Hadith and Related Sciences" },
    "16670": { name: "Hasim Shan P K", department: "Hadith and Related Sciences" },
    "16677": { name: "Shibili M K", department: "Hadith and Related Sciences" },
    "16717": { name: "Muhammed Safvan Vp", department: "Hadith and Related Sciences" },
    "16725": { name: "Munawar Mattathor", department: "Hadith and Related Sciences" },
    "16745": { name: "Muhammed Sinan", department: "Hadith and Related Sciences" },
    "16749": { name: "Mohammed Basil M", department: "Hadith and Related Sciences" },
    "16313": { name: "P Muhammed Shabnas", department: "Hadith and Related Sciences" },
    "16314": { name: "Muhammed Ajmal T", department: "Hadith and Related Sciences" },
    "16345": { name: "Sobibur Rahaman", department: "Hadith and Related Sciences" },
    "16347": { name: "Muhammad Raafiu K", department: "Hadith and Related Sciences" },
    "16348": { name: "Salmanul Faris Kp", department: "Hadith and Related Sciences" },
    "16350": { name: "Muhammed Mirshad Pt", department: "Hadith and Related Sciences" },
    "16358": { name: "Muhammed Salman C", department: "Hadith and Related Sciences" },
    "16375": { name: "Hasain T", department: "Hadith and Related Sciences" },
    "16752": { name: "Mohammed Nishad P T", department: "Hadith and Related Sciences" },
    "16761": { name: "Sharif Alam", department: "Hadith and Related Sciences" },
    "16773": { name: "Muhammed Shahid", department: "Hadith and Related Sciences" },
    "16783": { name: "Muhammed Swabeeh O T", department: "Hadith and Related Sciences" },
    "16795": { name: "Muhammed Thahir P", department: "Hadith and Related Sciences" },
    "16883": { name: "Muhammed Naseerudheen A", department: "Hadith and Related Sciences" },
    "16888": { name: "Husainar A", department: "Hadith and Related Sciences" },
    "16388": { name: "Ibnu Mashood P P", department: "Hadith and Related Sciences" },
    "16393": { name: "Mishal", department: "Hadith and Related Sciences" },
    "16399": { name: "Abdul Basith C", department: "Hadith and Related Sciences" },
    "16435": { name: "Jadheer Ahmed K", department: "Hadith and Related Sciences" },
    "16455": { name: "Zainul Abid C", department: "Hadith and Related Sciences" },
    "16465": { name: "Mohammed Mubashir P", department: "Hadith and Related Sciences" },
    "16471": { name: "Nehel Chand", department: "Hadith and Related Sciences" },
    "16490": { name: "Muhammad Musthafa K", department: "Hadith and Related Sciences" },
    "16931": { name: "Ashiq Muhammed P", department: "Hadith and Related Sciences" },
    "16932": { name: "Adil Muhammed P", department: "Hadith and Related Sciences" },
    "16949": { name: "Mohammed Rabeeh P", department: "Hadith and Related Sciences" },
    "16955": { name: "Muhammed Adil", department: "Hadith and Related Sciences" },
    "16956": { name: "Mohammed Salim Pk", department: "Hadith and Related Sciences" },
    "16971": { name: "Muhammed Midlaj", department: "Hadith and Related Sciences" },
    "16975": { name: "Al Ameen S", department: "Hadith and Related Sciences" },
    "16492": { name: "Farhan Ali N A", department: "Hadith and Related Sciences" },
    "16547": { name: "Arshad K K", department: "Hadith and Related Sciences" },
    "16568": { name: "Ashik K I", department: "Hadith and Related Sciences" },
    "16575": { name: "Abdul Farhad Mk", department: "Hadith and Related Sciences" },
    "16580": { name: "Zisan Reza", department: "Hadith and Related Sciences" },
    "16591": { name: "Aman Sk", department: "Hadith and Related Sciences" },
    "16601": { name: "Muhammed Finan Pk", department: "Hadith and Related Sciences" },
    "16613": { name: "Muhammad Ashiq N", department: "Hadith and Related Sciences" },
    "17008": { name: "Muhammed Unais K A", department: "Hadith and Related Sciences" },
    "17011": { name: "Mohammed Nizafar", department: "Hadith and Related Sciences" },
    "17017": { name: "Mohammed Husni", department: "Hadith and Related Sciences" },
    "17049": { name: "Mohammed Nafih", department: "Hadith and Related Sciences" },
    "17054": { name: "Obidur Rahaman", department: "Hadith and Related Sciences" },
    "17083": { name: "Kaunain Raza", department: "Hadith and Related Sciences" },
    "17089": { name: "Muhammad Razi", department: "Hadith and Related Sciences" },
    "17104": { name: "Ibrahim Badusha Sudheer", department: "Hadith and Related Sciences" },
    "17128": { name: "Fasalul Abidheen", department: "Hadith and Related Sciences" },
    "17162": { name: "Muhammed Hanan K M", department: "Hadith and Related Sciences" },
    "17179": { name: "Samiul Alom Khan", department: "Hadith and Related Sciences" },
    "17181": { name: "Ramjan Ali", department: "Hadith and Related Sciences" },
    "17186": { name: "Muhammed Nabeel Np", department: "Hadith and Related Sciences" },
    "17193": { name: "Dewan Maminul Islam", department: "Hadith and Related Sciences" },
    "17206": { name: "Sayyad Mohammed Vasil", department: "Hadith and Related Sciences" },
    "15825": { name: "Muhammed Adhil Cp", department: "Fiqh and Usul al-Fiqh" },
    "16067": { name: "Swalahudheen Ka", department: "Fiqh and Usul al-Fiqh" },
    "16071": { name: "Muhammed Ishaque K", department: "Fiqh and Usul al-Fiqh" },
    "16072": { name: "Basil Irfan C", department: "Fiqh and Usul al-Fiqh" },
    "16080": { name: "Muhammed A", department: "Fiqh and Usul al-Fiqh" },
    "16088": { name: "Muhammed Ismaeel Kp", department: "Fiqh and Usul al-Fiqh" },
    "16090": { name: "Abdul Basith Pk", department: "Fiqh and Usul al-Fiqh" },
    "16616": { name: "Muhammed Vp", department: "Fiqh and Usul al-Fiqh" },
    "16637": { name: "Muhammed Sahal C", department: "Fiqh and Usul al-Fiqh" },
    "16643": { name: "Salahuddeen Ba", department: "Fiqh and Usul al-Fiqh" },
    "16680": { name: "Hadhir Hameed", department: "Fiqh and Usul al-Fiqh" },
    "16681": { name: "Muhammed Arshad P", department: "Fiqh and Usul al-Fiqh" },
    "16682": { name: "Muhammed Midlaj Ms", department: "Fiqh and Usul al-Fiqh" },
    "16684": { name: "Muhammed Ashiq C", department: "Fiqh and Usul al-Fiqh" },
    "16693": { name: "Ahmed Shufaiq N V", department: "Fiqh and Usul al-Fiqh" },
    "16167": { name: "Muhammad Ifas B", department: "Fiqh and Usul al-Fiqh" },
    "16204": { name: "Muhammed Ihsan", department: "Fiqh and Usul al-Fiqh" },
    "16209": { name: "Muhammed Aslam C", department: "Fiqh and Usul al-Fiqh" },
    "16213": { name: "Muhammed Rafeeque", department: "Fiqh and Usul al-Fiqh" },
    "16254": { name: "Moinudin Garibh Navaz", department: "Fiqh and Usul al-Fiqh" },
    "16261": { name: "Muhammed Nabeel C", department: "Fiqh and Usul al-Fiqh" },
    "16263": { name: "Athhar Thayyib Ms", department: "Fiqh and Usul al-Fiqh" },
    "16927": { name: "Muhammed Shamil K", department: "Fiqh and Usul al-Fiqh" },
    "16929": { name: "Sayyid Miqdad Hasani P", department: "Fiqh and Usul al-Fiqh" },
    "16933": { name: "Mohammed Maflooh K", department: "Fiqh and Usul al-Fiqh" },
    "16935": { name: "Abdul Vahid K", department: "Fiqh and Usul al-Fiqh" },
    "16943": { name: "Muhammed Nisthaf", department: "Fiqh and Usul al-Fiqh" },
    "16952": { name: "Mohammed Aslam Kv", department: "Fiqh and Usul al-Fiqh" },
    "16977": { name: "Muhammad Mansoor M", department: "Fiqh and Usul al-Fiqh" },
    "16981": { name: "Saifudheen Ap", department: "Fiqh and Usul al-Fiqh" },
    "16266": { name: "Sahad C", department: "Fiqh and Usul al-Fiqh" },
    "16272": { name: "Abdullah Al Mubarak", department: "Fiqh and Usul al-Fiqh" },
    "16278": { name: "Jamnas Muhammed Pc", department: "Fiqh and Usul al-Fiqh" },
    "16293": { name: "Masood Kk", department: "Fiqh and Usul al-Fiqh" },
    "16301": { name: "Murshed Pk", department: "Fiqh and Usul al-Fiqh" },
    "16302": { name: "Muhammed Safaras R", department: "Fiqh and Usul al-Fiqh" },
    "16309": { name: "Muhammed Shammas", department: "Fiqh and Usul al-Fiqh" },
    "16987": { name: "Muhammed Sinan Op", department: "Fiqh and Usul al-Fiqh" },
    "16994": { name: "Mohammad Jabir", department: "Fiqh and Usul al-Fiqh" },
    "17004": { name: "Muhammed Junaid C", department: "Fiqh and Usul al-Fiqh" },
    "17013": { name: "Munawar T", department: "Fiqh and Usul al-Fiqh" },
    "17026": { name: "Muhammed Aman Kp", department: "Fiqh and Usul al-Fiqh" },
    "17034": { name: "Mohammed Junaid H", department: "Fiqh and Usul al-Fiqh" },
    "17042": { name: "Sayyid Muhammed Naheel", department: "Fiqh and Usul al-Fiqh" },
    "17046": { name: "Ahammed Rashid Tk", department: "Fiqh and Usul al-Fiqh" },
    "16320": { name: "Muhammed Nihal Ok", department: "Fiqh and Usul al-Fiqh" },
    "16353": { name: "Anwar Yaseer", department: "Fiqh and Usul al-Fiqh" },
    "16361": { name: "Mazin Ahmad", department: "Fiqh and Usul al-Fiqh" },
    "16364": { name: "Muhammed Afsal Km", department: "Fiqh and Usul al-Fiqh" },
    "16377": { name: "Muhammad Yaseen N", department: "Fiqh and Usul al-Fiqh" },
    "16381": { name: "Midlaj Kt", department: "Fiqh and Usul al-Fiqh" },
    "16422": { name: "Anvar Hussain", department: "Fiqh and Usul al-Fiqh" },
    "17070": { name: "Liyakath Ali Kp", department: "Fiqh and Usul al-Fiqh" },
    "17076": { name: "Thameem Kv", department: "Fiqh and Usul al-Fiqh" },
    "17097": { name: "Muhammad Rashid", department: "Fiqh and Usul al-Fiqh" },
    "17132": { name: "Muhammed Mahroos Kc", department: "Fiqh and Usul al-Fiqh" },
    "17133": { name: "Muhammed Rishan Tp", department: "Fiqh and Usul al-Fiqh" },
    "17134": { name: "Dilshad P", department: "Fiqh and Usul al-Fiqh" },
    "17164": { name: "Muhammed Irshad Ak", department: "Fiqh and Usul al-Fiqh" },
    "17177": { name: "Femin Fajes Mc", department: "Fiqh and Usul al-Fiqh" },
    "16424": { name: "Abdul Vahid Vh", department: "Fiqh and Usul al-Fiqh" },
    "16430": { name: "Muhammed Niyaz", department: "Fiqh and Usul al-Fiqh" },
    "16446": { name: "Mohammed Fayiz Kp", department: "Fiqh and Usul al-Fiqh" },
    "16448": { name: "Muhammed Farshad P T", department: "Fiqh and Usul al-Fiqh" },
    "16454": { name: "Ajmal Shanir Vk", department: "Fiqh and Usul al-Fiqh" },
    "16505": { name: "Muhammed Farhan M", department: "Fiqh and Usul al-Fiqh" },
    "16551": { name: "Abdunnafih", department: "Fiqh and Usul al-Fiqh" },
    "16559": { name: "Muhammed Afnas K", department: "Fiqh and Usul al-Fiqh" },
    "16607": { name: "Muhammed Yaqoob P", department: "Fiqh and Usul al-Fiqh" },
    "17178": { name: "Muhsin Jas K P", department: "Fiqh and Usul al-Fiqh" },
    "17189": { name: "Nabhan Abdul Azeez C", department: "Fiqh and Usul al-Fiqh" },
    "17185": { name: "Muhammed Rashad Vp", department: "Fiqh and Usul al-Fiqh" },
    "15881": { name: "Shaik Mohd Yaseen", department: "Fiqh and Usul al-Fiqh" },
    "15994": { name: "Nasiruddin Ajmal", department: "Fiqh and Usul al-Fiqh" },
    "16021": { name: "Abu Taher", department: "Fiqh and Usul al-Fiqh" },
    "16162": { name: "Fidaul Mustafa", department: "Fiqh and Usul al-Fiqh" },
    "16306": { name: "Alqamah Rahmani", department: "Fiqh and Usul al-Fiqh" },
    "16310": { name: "Imran Husain", department: "Fiqh and Usul al-Fiqh" },
    "16333": { name: "Md Sarmad Raza", department: "Fiqh and Usul al-Fiqh" },
    "16487": { name: "Shaik Muhammed Rafi", department: "Fiqh and Usul al-Fiqh" },
    "16521": { name: "Shaik Musthafir Rahman", department: "Fiqh and Usul al-Fiqh" },
    "16626": { name: "Md Sahajahan", department: "Fiqh and Usul al-Fiqh" },
    "16901": { name: "Arif Safi", department: "Fiqh and Usul al-Fiqh" },
    "16934": { name: "Muzammil Raza", department: "Fiqh and Usul al-Fiqh" },
    "16953": { name: "Mobarak Sk", department: "Fiqh and Usul al-Fiqh" },
    "17006": { name: "Mohammad", department: "Fiqh and Usul al-Fiqh" },
    "17022": { name: "Shaik Nafees Ahmad", department: "Fiqh and Usul al-Fiqh" },
    "17029": { name: "Ansari Tanveer", department: "Fiqh and Usul al-Fiqh" },
    "17056": { name: "Sulaiman Shah Qadri", department: "Fiqh and Usul al-Fiqh" },
    "17108": { name: "C Sayeed Basha", department: "Fiqh and Usul al-Fiqh" },
    "16539": { name: "Masidul Islam", department: "Fiqh and Usul al-Fiqh" },
    "16562": { name: "Muhammed Abusaif", department: "Fiqh and Usul al-Fiqh" },
    "16564": { name: "Alimudeen", department: "Fiqh and Usul al-Fiqh" },
    "16595": { name: "Koreshi Mohammed", department: "Fiqh and Usul al-Fiqh" },
    "16604": { name: "Mazidur Rahman", department: "Fiqh and Usul al-Fiqh" },
    "17138": { name: "Bilal Ansari", department: "Fiqh and Usul al-Fiqh" },
    "17142": { name: "Masud Rana", department: "Fiqh and Usul al-Fiqh" },
    "17159": { name: "Ghulam Mohammad", department: "Fiqh and Usul al-Fiqh" },
    "17169": { name: "Toufik", department: "Fiqh and Usul al-Fiqh" },
    "17190": { name: "Musharaf Alam", department: "Fiqh and Usul al-Fiqh" },
    "17197": { name: "Kaif Ahmed", department: "Fiqh and Usul al-Fiqh" },
    "16096": { name: "Muhammed Hibathulla", department: "Fiqh and Usul al-Fiqh" },
    "16107": { name: "Muhammed Sahal Vk", department: "Fiqh and Usul al-Fiqh" },
    "16112": { name: "Muhammed Shahin K", department: "Fiqh and Usul al-Fiqh" },
    "16123": { name: "Munavvar Km", department: "Fiqh and Usul al-Fiqh" },
    "16134": { name: "Muhammed Asif", department: "Fiqh and Usul al-Fiqh" },
    "16140": { name: "Muzammil Siddique", department: "Fiqh and Usul al-Fiqh" },
    "16141": { name: "Muhammed Fayis", department: "Fiqh and Usul al-Fiqh" },
    "16711": { name: "Abdu Raheem P", department: "Fiqh and Usul al-Fiqh" },
    "16735": { name: "Muhammed Mufeed Tk", department: "Fiqh and Usul al-Fiqh" },
    "16754": { name: "Abdul Basith P", department: "Fiqh and Usul al-Fiqh" },
    "16772": { name: "Sadaqathulla Mp", department: "Fiqh and Usul al-Fiqh" },
    "16780": { name: "Mubashir Pk", department: "Fiqh and Usul al-Fiqh" },
    "16803": { name: "Ahmed K", department: "Fiqh and Usul al-Fiqh" },
    "16816": { name: "Muhammed Sahal Op", department: "Fiqh and Usul al-Fiqh" },
    "16820": { name: "Munawir Ali K", department: "Fiqh and Usul al-Fiqh" },
    "16827": { name: "Muhammed Masroor P", department: "Fiqh and Usul al-Fiqh" },
    "16853": { name: "Muhammed Sinan Tk", department: "Fiqh and Usul al-Fiqh" },
    "16864": { name: "Muhammed Hashir", department: "Fiqh and Usul al-Fiqh" },
    "16871": { name: "Nasarudheen Ma", department: "Fiqh and Usul al-Fiqh" },
    "16874": { name: "Muhammed Nihr V", department: "Fiqh and Usul al-Fiqh" },
    "16911": { name: "Muhammed Nabeel P", department: "Fiqh and Usul al-Fiqh" },
    "16916": { name: "Muhammed Fazlu K", department: "Fiqh and Usul al-Fiqh" },
    "16924": { name: "Muhammed Harshil Ec", department: "Fiqh and Usul al-Fiqh" },
    "15563": { name: "Mohammed Saheer P", department: "Islamic Economics and Finance" },
    "15613": { name: "Muhammed Safvan", department: "Islamic Economics and Finance" },
    "16025": { name: "Haris", department: "Islamic Economics and Finance" },
    "16085": { name: "Abdul Bayis P", department: "Islamic Economics and Finance" },
    "16087": { name: "Mohammed Imran", department: "Islamic Economics and Finance" },
    "16091": { name: "Mohamed Faise K", department: "Islamic Economics and Finance" },
    "16094": { name: "Ahmed Hisham Km", department: "Islamic Economics and Finance" },
    "16098": { name: "Abdul Samad", department: "Islamic Economics and Finance" },
    "16100": { name: "Muhammed Shafi Pp", department: "Islamic Economics and Finance" },
    "16139": { name: "Sabith Cp", department: "Islamic Economics and Finance" },
    "16144": { name: "Jafar Sadhik B M", department: "Islamic Economics and Finance" },
    "16145": { name: "Muhammed Arshad Ck", department: "Islamic Economics and Finance" },
    "16624": { name: "Muhammed Ali Murthala", department: "Islamic Economics and Finance" },
    "16629": { name: "Muhammed Mubashir", department: "Islamic Economics and Finance" },
    "16656": { name: "Muhammed Unais C K", department: "Islamic Economics and Finance" },
    "16659": { name: "Thamjeed Ansal", department: "Islamic Economics and Finance" },
    "16705": { name: "Aftabuddin Sekh", department: "Islamic Economics and Finance" },
    "16736": { name: "Muhammed Shameem K", department: "Islamic Economics and Finance" },
    "16738": { name: "Adil Shah", department: "Islamic Economics and Finance" },
    "16753": { name: "Muhammed Sinan Pt", department: "Islamic Economics and Finance" },
    "16155": { name: "Muhammed Fayis Np", department: "Islamic Economics and Finance" },
    "16163": { name: "Muhammed Nizam Ch", department: "Islamic Economics and Finance" },
    "16186": { name: "Muhammed Naseef Pk", department: "Islamic Economics and Finance" },
    "16189": { name: "Abdul Nafi P", department: "Islamic Economics and Finance" },
    "16193": { name: "Muhammed Javad V", department: "Islamic Economics and Finance" },
    "16201": { name: "Muhammed Sinan Ap", department: "Islamic Economics and Finance" },
    "16205": { name: "Saheed Ck", department: "Islamic Economics and Finance" },
    "16782": { name: "Muhammed Sahl Pp", department: "Islamic Economics and Finance" },
    "16819": { name: "Jasim", department: "Islamic Economics and Finance" },
    "16830": { name: "Abdul Basith Vp", department: "Islamic Economics and Finance" },
    "16850": { name: "Muhammed Abdul Rauf", department: "Islamic Economics and Finance" },
    "16877": { name: "Midhlaj K", department: "Islamic Economics and Finance" },
    "16897": { name: "Mahammad Ziyan", department: "Islamic Economics and Finance" },
    "16898": { name: "Muhammed Sinan K", department: "Islamic Economics and Finance" },
    "16908": { name: "Muhammed Nafeel", department: "Islamic Economics and Finance" },
    "16226": { name: "Muhammed Inshad", department: "Islamic Economics and Finance" },
    "16246": { name: "Ahammed Nijad Pc", department: "Islamic Economics and Finance" },
    "16260": { name: "Muhammed Midlaj Vt", department: "Islamic Economics and Finance" },
    "16346": { name: "Muhammed Ajmal P", department: "Islamic Economics and Finance" },
    "16363": { name: "Muhammed Risil Pc", department: "Islamic Economics and Finance" },
    "16403": { name: "Muhammed Swalih", department: "Islamic Economics and Finance" },
    "16404": { name: "Uvais Ahammed M", department: "Islamic Economics and Finance" },
    "16948": { name: "Op Muhasir Musthafa", department: "Islamic Economics and Finance" },
    "16969": { name: "Swafvan", department: "Islamic Economics and Finance" },
    "17009": { name: "Mohammed Rashid T P", department: "Islamic Economics and Finance" },
    "17023": { name: "Minhaj P", department: "Islamic Economics and Finance" },
    "17072": { name: "Muhammed Jaseel Km", department: "Islamic Economics and Finance" },
    "17080": { name: "Muhammed Shameem K", department: "Islamic Economics and Finance" },
    "17085": { name: "Muhammed Hisan", department: "Islamic Economics and Finance" },
    "17091": { name: "Muhammad Thameem", department: "Islamic Economics and Finance" },
    "16407": { name: "Muhammed Sinan C", department: "Islamic Economics and Finance" },
    "16408": { name: "Muhammed Sinan Ek", department: "Islamic Economics and Finance" },
    "16434": { name: "Marwan Siddique", department: "Islamic Economics and Finance" },
    "16481": { name: "Muhammed Uvais Pa", department: "Islamic Economics and Finance" },
    "16500": { name: "Zainul Abid K", department: "Islamic Economics and Finance" },
    "16501": { name: "Sayyid Muhd Adhil Kp", department: "Islamic Economics and Finance" },
    "16507": { name: "Hashir Hussain Ik", department: "Islamic Economics and Finance" },
    "16574": { name: "Jazalul Ameen T", department: "Islamic Economics and Finance" },
    "17094": { name: "Muhammed Galib M", department: "Islamic Economics and Finance" },
    "17095": { name: "Razal Abdul Rahman P E", department: "Islamic Economics and Finance" },
    "17120": { name: "Muhammed Rabeeh Kv", department: "Islamic Economics and Finance" },
    "17145": { name: "Mohammad Faheem", department: "Islamic Economics and Finance" },
    "17151": { name: "Muhammed Nazeeb N", department: "Islamic Economics and Finance" },
    "17152": { name: "Muhammed Nadeem", department: "Islamic Economics and Finance" },
    "17168": { name: "Suroosh Ahmed Pk", department: "Islamic Economics and Finance" },
    "15519": { name: "Faris", department: "Aqeeda and Philosophy" },
    "15742": { name: "Shefins Vs", department: "Aqeeda and Philosophy" },
    "16063": { name: "Aslam Sha Kp", department: "Aqeeda and Philosophy" },
    "16108": { name: "Muhammed Swalih P", department: "Aqeeda and Philosophy" },
    "16191": { name: "Janib Ali", department: "Aqeeda and Philosophy" },
    "16233": { name: "Asweel Rahman", department: "Aqeeda and Philosophy" },
    "16647": { name: "Ahammed Jasir Mk", department: "Aqeeda and Philosophy" },
    "16658": { name: "Muhammed Musthafa C", department: "Aqeeda and Philosophy" },
    "16737": { name: "Muhammed Mansoor", department: "Aqeeda and Philosophy" },
    "16747": { name: "Mohammed Sahl Cs", department: "Aqeeda and Philosophy" },
    "16794": { name: "Muhammed Imran S", department: "Aqeeda and Philosophy" },
    "16805": { name: "Muhammed Fawas K", department: "Aqeeda and Philosophy" },
    "16812": { name: "Muhammed Fawas M S", department: "Aqeeda and Philosophy" },
    "16818": { name: "Midhlaj Pm", department: "Aqeeda and Philosophy" },
    "16840": { name: "Mohamed Shabeel", department: "Aqeeda and Philosophy" },
    "16241": { name: "Abdul Bari Nc", department: "Aqeeda and Philosophy" },
    "16270": { name: "Ajmal Ki", department: "Aqeeda and Philosophy" },
    "16287": { name: "Abdul Younus", department: "Aqeeda and Philosophy" },
    "16303": { name: "Sabir Ct", department: "Aqeeda and Philosophy" },
    "16326": { name: "Abdul Saleem T", department: "Aqeeda and Philosophy" },
    "16331": { name: "Moosa Ma", department: "Aqeeda and Philosophy" },
    "16922": { name: "Muhammed Ramees M", department: "Aqeeda and Philosophy" },
    "16925": { name: "Muhammed Jashad", department: "Aqeeda and Philosophy" },
    "16957": { name: "Ahammed Yaseen", department: "Aqeeda and Philosophy" },
    "16959": { name: "Muhammed Nihal K", department: "Aqeeda and Philosophy" },
    "16961": { name: "Fawad Pc", department: "Aqeeda and Philosophy" },
    "16968": { name: "Muhammed Lazim K", department: "Aqeeda and Philosophy" },
    "16982": { name: "Muhammed Sinan Cp", department: "Aqeeda and Philosophy" },
    "16992": { name: "Rinshad Mp", department: "Aqeeda and Philosophy" },
    "16996": { name: "Shadi Shahlan P K", department: "Aqeeda and Philosophy" },
    "16365": { name: "Safvan P", department: "Aqeeda and Philosophy" },
    "16402": { name: "Sa Ad Pk", department: "Aqeeda and Philosophy" },
    "16472": { name: "Shibli P N", department: "Aqeeda and Philosophy" },
    "16478": { name: "Yahiya B M", department: "Aqeeda and Philosophy" },
    "16486": { name: "Muhammed Afnan Kp", department: "Aqeeda and Philosophy" },
    "16496": { name: "Muhammed Favas Kv", department: "Aqeeda and Philosophy" },
    "17005": { name: "Muhammed Javad P V", department: "Aqeeda and Philosophy" },
    "17007": { name: "Niyas N K", department: "Aqeeda and Philosophy" },
    "17021": { name: "Muhammed Azhar Cp", department: "Aqeeda and Philosophy" },
    "17035": { name: "Muhammed Adil Ck", department: "Aqeeda and Philosophy" },
    "17092": { name: "Muhammed Hashim C", department: "Aqeeda and Philosophy" },
    "17098": { name: "Aboobacker Siyas M K", department: "Aqeeda and Philosophy" },
    "17114": { name: "Muhammed Sufyan", department: "Aqeeda and Philosophy" },
    "17122": { name: "Muhammed Jazeel Pv", department: "Aqeeda and Philosophy" },
    "17123": { name: "Jalaludheen K", department: "Aqeeda and Philosophy" },
    "16508": { name: "Asadullah", department: "Aqeeda and Philosophy" },
    "16516": { name: "Muhammed Jiyadh Ka", department: "Aqeeda and Philosophy" },
    "16524": { name: "Muhammed Lubab T", department: "Aqeeda and Philosophy" },
    "16526": { name: "Mahammad Nuhuman", department: "Aqeeda and Philosophy" },
    "16527": { name: "Mohammad Hamid Raza", department: "Aqeeda and Philosophy" },
    "16563": { name: "K M Muhammad Sahad", department: "Aqeeda and Philosophy" },
    "16572": { name: "Mohammed Jawad A", department: "Aqeeda and Philosophy" },
    "16586": { name: "Abdul Basith V", department: "Aqeeda and Philosophy" },
    "17129": { name: "Ali Mubashir", department: "Aqeeda and Philosophy" },
    "17130": { name: "Mohammed Sahal", department: "Aqeeda and Philosophy" },
    "17131": { name: "Muhammed Irfan Pp", department: "Aqeeda and Philosophy" },
    "17140": { name: "Sayyed Minhaj Thangal", department: "Aqeeda and Philosophy" },
    "17144": { name: "Abdul Wadhood", department: "Aqeeda and Philosophy" },
    "17160": { name: "Nihal Ahmed", department: "Aqeeda and Philosophy" },
    "17171": { name: "Abdul Salam R V", department: "Aqeeda and Philosophy" },
    "15965": { name: "Abdul Raoof M", department: "Study of Religion" },
    "16066": { name: "Mohammed Azeem", department: "Study of Religion" },
    "16070": { name: "Ammar Ali I", department: "Study of Religion" },
    "16076": { name: "Abdul Rahiman Raza", department: "Study of Religion" },
    "16101": { name: "Sarif Aktar", department: "Study of Religion" },
    "16105": { name: "K H Mahd Zahid", department: "Study of Religion" },
    "16621": { name: "Mohammed Shamsheer", department: "Study of Religion" },
    "16623": { name: "Salim Ameen", department: "Study of Religion" },
    "16631": { name: "Ramees Ahammed Mu", department: "Study of Religion" },
    "16634": { name: "Sufyan Saleem Pp", department: "Study of Religion" },
    "16687": { name: "Muhammed Noufal", department: "Study of Religion" },
    "16714": { name: "Mohammed Hashir", department: "Study of Religion" },
    "16720": { name: "Miras Muhammed K", department: "Study of Religion" },
    "16721": { name: "Khalandar Ziyad", department: "Study of Religion" },
    "16722": { name: "Sadakkathullah Mm", department: "Study of Religion" },
    "16113": { name: "Adeeb Muhammed", department: "Study of Religion" },
    "16114": { name: "Mohammed Shahzan", department: "Study of Religion" },
    "16129": { name: "Mohammed Irfan C", department: "Study of Religion" },
    "16136": { name: "Mohammed Jasir K", department: "Study of Religion" },
    "16137": { name: "Muhammed Muhsin Pk", department: "Study of Religion" },
    "16147": { name: "Muhammad Rameez Ke", department: "Study of Religion" },
    "16723": { name: "Muzammil C P", department: "Study of Religion" },
    "16724": { name: "Adheeb Rashdan K", department: "Study of Religion" },
    "16726": { name: "Ahammed Aslin N", department: "Study of Religion" },
    "16765": { name: "Swafvan M K", department: "Study of Religion" },
    "16769": { name: "Yaseen Muhammed", department: "Study of Religion" },
    "16786": { name: "Muhammed Rashid", department: "Study of Religion" },
    "16806": { name: "Muhammed Rajif N P", department: "Study of Religion" },
    "16815": { name: "Muhammed Sinad Kv", department: "Study of Religion" },
    "16860": { name: "Mahammad Afrid", department: "Study of Religion" },
    "16164": { name: "Muhammed Shinan Cp", department: "Study of Religion" },
    "16171": { name: "Muhad Vaseem T A", department: "Study of Religion" },
    "16174": { name: "Mohammed Jazeel K", department: "Study of Religion" },
    "16177": { name: "Ahmed Shahbas Mh", department: "Study of Religion" },
    "16184": { name: "Ibraheem Badhusha K", department: "Study of Religion" },
    "16188": { name: "Farooque Hussain Cb", department: "Study of Religion" },
    "16861": { name: "Aboobaker Sidheeq K", department: "Study of Religion" },
    "16863": { name: "Mohammed Anas", department: "Study of Religion" },
    "16892": { name: "Nihal Ibrahim Pp", department: "Study of Religion" },
    "16919": { name: "Md Samir Ali", department: "Study of Religion" },
    "16930": { name: "Muhammed Bisher Kc", department: "Study of Religion" },
    "16938": { name: "Hamid Mm", department: "Study of Religion" },
    "16945": { name: "Arshad Ahammed V", department: "Study of Religion" },
    "16954": { name: "Muhammed Siyan K", department: "Study of Religion" },
    "16958": { name: "Majidul Islam", department: "Study of Religion" },
    "16192": { name: "Abdulla Jalal Kp", department: "Study of Religion" },
    "16198": { name: "Muhammed Suhail N", department: "Study of Religion" },
    "16202": { name: "Muhammed Shabeeb", department: "Study of Religion" },
    "16203": { name: "Muhammad Thameem", department: "Study of Religion" },
    "16210": { name: "Muhammed Munavvir", department: "Study of Religion" },
    "16211": { name: "Muahmmed Afeef V", department: "Study of Religion" },
    "16962": { name: "Faslu Rahman", department: "Study of Religion" },
    "16967": { name: "Muhammed Noufal O A", department: "Study of Religion" },
    "16980": { name: "Muhammed Anshif K", department: "Study of Religion" },
    "16989": { name: "Farhan A", department: "Study of Religion" },
    "17010": { name: "Md Ruhul Amin", department: "Study of Religion" },
    "17033": { name: "Minhaj M", department: "Study of Religion" },
    "17040": { name: "Sanaullhakhan Kv", department: "Study of Religion" },
    "17043": { name: "Toufeeque Umar", department: "Study of Religion" },
    "17045": { name: "Ahammed Arshad M N", department: "Study of Religion" },
    "16214": { name: "Abdulla Ahamed", department: "Study of Religion" },
    "16217": { name: "Muhd Musthafa Mp", department: "Study of Religion" },
    "16221": { name: "Muhammed Rashid M", department: "Study of Religion" },
    "16235": { name: "Muhamd Muneeb M P", department: "Study of Religion" },
    "16237": { name: "Muhammed Rafid Ac", department: "Study of Religion" },
    "16249": { name: "Mohammad Hisham Li", department: "Study of Religion" },
    "16250": { name: "Muhammed Uvais K", department: "Study of Religion" },
    "16292": { name: "Arshad Hassan T", department: "Study of Religion" },
    "17051": { name: "Adil Ahamad K P", department: "Study of Religion" },
    "17058": { name: "Mahad Nizamuddeen", department: "Study of Religion" },
    "17062": { name: "Mohammed Shahal C T", department: "Study of Religion" },
    "17068": { name: "Muhammed Basil C", department: "Study of Religion" },
    "17081": { name: "Muhammed Swalah", department: "Study of Religion" },
    "17087": { name: "Irfan T", department: "Study of Religion" },
    "17105": { name: "Nazimul Hassan Mollah", department: "Study of Religion" },
    "16312": { name: "Sarthaj C", department: "Study of Religion" },
    "16327": { name: "Mohammed Rinshad Kt", department: "Study of Religion" },
    "16336": { name: "Salmanul Faris K", department: "Study of Religion" },
    "16355": { name: "Mazin Abbas Naveer", department: "Study of Religion" },
    "16368": { name: "Muhammed Adil K", department: "Study of Religion" },
    "16528": { name: "Aminal Alam Ali", department: "Study of Religion" },
    "16550": { name: "Forman Ali Sikdar", department: "Study of Religion" },
    "16611": { name: "Asif Sinan", department: "Study of Religion" },
    "17107": { name: "Hamid Ali N", department: "Study of Religion" },
    "17119": { name: "Musharaf Hoque", department: "Study of Religion" },
    "17127": { name: "Muhammed Nisam Kp", department: "Study of Religion" },
    "17143": { name: "Muhammed Nadil Pc", department: "Study of Religion" },
    "17146": { name: "Asraful Ali", department: "Study of Religion" },
    "17158": { name: "Minhaj M", department: "Study of Religion" },
    "17188": { name: "Muhd Abdurahiman TP", department: "Study of Religion" },
    "15982": { name: "Ahamed Asif M", department: "Civilizational Studies" },
    "16027": { name: "Ashkar Ali Cp", department: "Civilizational Studies" },
    "16036": { name: "Ahmed Adil B K", department: "Civilizational Studies" },
    "16069": { name: "Ibrahim Badusha P", department: "Civilizational Studies" },
    "16084": { name: "Mohammed Shees A", department: "Civilizational Studies" },
    "16099": { name: "Nazirul Aziz", department: "Civilizational Studies" },
    "16627": { name: "Abdul Muhaimin Pt", department: "Civilizational Studies" },
    "16642": { name: "Muhammed Safvan K", department: "Civilizational Studies" },
    "16645": { name: "Mohammed Midlaj M", department: "Civilizational Studies" },
    "16646": { name: "Habeel Aman K K", department: "Civilizational Studies" },
    "16660": { name: "Sayyid Jazeel Jifri Pm", department: "Civilizational Studies" },
    "16672": { name: "Muhammed Faheem", department: "Civilizational Studies" },
    "16700": { name: "Jaseem V P M", department: "Civilizational Studies" },
    "16143": { name: "Mahsin Akram", department: "Civilizational Studies" },
    "16166": { name: "Jahidul Hassan", department: "Civilizational Studies" },
    "16206": { name: "Muhammed Midlaj E", department: "Civilizational Studies" },
    "16208": { name: "Nasim Sekh", department: "Civilizational Studies" },
    "16231": { name: "Muhammed Nasweeh P", department: "Civilizational Studies" },
    "16236": { name: "Tousif Reja", department: "Civilizational Studies" },
    "16268": { name: "Araj Sekh", department: "Civilizational Studies" },
    "16275": { name: "Muhammed Swalih M", department: "Civilizational Studies" },
    "16708": { name: "Abdul Basith", department: "Civilizational Studies" },
    "16718": { name: "Mohammad Midlaj Av", department: "Civilizational Studies" },
    "16732": { name: "Muhammed Ajmal", department: "Civilizational Studies" },
    "16734": { name: "Muhammed Jaseem V", department: "Civilizational Studies" },
    "16756": { name: "Ajmal P V", department: "Civilizational Studies" },
    "16764": { name: "Muhd Thameem Pk", department: "Civilizational Studies" },
    "16776": { name: "Mubashir Kp", department: "Civilizational Studies" },
    "16277": { name: "Muhammed Sahal Kp", department: "Civilizational Studies" },
    "16281": { name: "Saifudeen Mt", department: "Civilizational Studies" },
    "16311": { name: "Muhammed Jazeel P", department: "Civilizational Studies" },
    "16316": { name: "Muhammed Afnan Lk", department: "Civilizational Studies" },
    "16360": { name: "Ansarul", department: "Civilizational Studies" },
    "16367": { name: "Salahudheen Azeem Tk", department: "Civilizational Studies" },
    "16379": { name: "Muhammed Unais Pt", department: "Civilizational Studies" },
    "16390": { name: "Muhammad Sabith Tp", department: "Civilizational Studies" },
    "16785": { name: "Fawaz Muhammed", department: "Civilizational Studies" },
    "16801": { name: "Muhammed Sinan Vm", department: "Civilizational Studies" },
    "16811": { name: "Muhammed Basil Vm", department: "Civilizational Studies" },
    "16847": { name: "Arshad Mp", department: "Civilizational Studies" },
    "16867": { name: "Md Jahir Ali", department: "Civilizational Studies" },
    "16868": { name: "Muhd Hismathulla Ck", department: "Civilizational Studies" },
    "16900": { name: "Md Jayad Sk", department: "Civilizational Studies" },
    "16410": { name: "Rabiul Alam", department: "Civilizational Studies" },
    "16412": { name: "Ahammed Ajnas K", department: "Civilizational Studies" },
    "16437": { name: "Najeeh Rahman P", department: "Civilizational Studies" },
    "16444": { name: "Pp Muhammad Bilal", department: "Civilizational Studies" },
    "16462": { name: "Muhammed Bayis Km", department: "Civilizational Studies" },
    "16512": { name: "Muhammad Muzammil", department: "Civilizational Studies" },
    "16540": { name: "Zainudeen", department: "Civilizational Studies" },
    "16615": { name: "Muhammed Fayis P", department: "Civilizational Studies" },
    "16907": { name: "Muhammed Faez T K", department: "Civilizational Studies" },
    "16942": { name: "Shadin G", department: "Civilizational Studies" },
    "16947": { name: "Mahammed Shameel", department: "Civilizational Studies" },
    "16950": { name: "Hashem Ali", department: "Civilizational Studies" },
    "16951": { name: "Muhammed Muflih K", department: "Civilizational Studies" },
    "16963": { name: "Shamil C", department: "Civilizational Studies" },
    "16970": { name: "Muhammed Shanil Pm", department: "Civilizational Studies" },
    "16974": { name: "Mahammed Shakir", department: "Civilizational Studies" },
    "17025": { name: "Ibrahim Mansoor", department: "Civilizational Studies" },
    "17027": { name: "Muhammed Sehil K", department: "Civilizational Studies" },
    "17038": { name: "Falelu Rahman P", department: "Civilizational Studies" },
    "17075": { name: "Salman M", department: "Civilizational Studies" },
    "17093": { name: "Irfan Raza", department: "Civilizational Studies" },
    "17110": { name: "Abdul Jaleel M", department: "Civilizational Studies" },
    "17125": { name: "Muhammed Adil", department: "Civilizational Studies" },
    "17161": { name: "Muhammed Shahal", department: "Civilizational Studies" },
    "16023": { name: "Munavir", department: "Civilizational Studies" },
    "16059": { name: "Mohammed Fasil KP", department: "Civilizational Studies" },
    "16079": { name: "Muhammad Yahya", department: "Civilizational Studies" },
    "16324": { name: "Mohammad", department: "Civilizational Studies" },
    "16330": { name: "Muhammed Shafi Ek", department: "Civilizational Studies" },
    "16397": { name: "Salman Faris", department: "Civilizational Studies" },
    "17180": { name: "K Ahmed Murshid", department: "Societal Development" },
    "17182": { name: "Muhammed Yaseen Rm", department: "Societal Development" },
    "17187": { name: "Muhammed Suhail K", department: "Societal Development" },
    "17191": { name: "Mahammad Mukthar", department: "Societal Development" },
    "17201": { name: "Muhammad Asif", department: "Societal Development" },
    "16132": { name: "Muhammed Sinan", department: "Societal Development" },
    "16513": { name: "Muhammed Midhlaj", department: "Societal Development" },
    "16606": { name: "Muhammad Suhood", department: "Societal Development" },
    "16630": { name: "Mehazin Aman T", department: "Societal Development" },
    "16639": { name: "Muhammed Aslam Vt", department: "Societal Development" },
    "16657": { name: "Abdulla Sinan Pt", department: "Societal Development" },
    "16664": { name: "Mahammad Irfan", department: "Societal Development" },
    "16669": { name: "Muhammed Jemsheer", department: "Societal Development" },
    "16676": { name: "Muhammed Musthafa", department: "Societal Development" },
    "16686": { name: "Yaseen Gazzali Cp", department: "Societal Development" },
    "16690": { name: "Muhammad Hashir", department: "Societal Development" },
    "16695": { name: "Munnas Alungal", department: "Societal Development" },
    "16698": { name: "Mohammed Shahim", department: "Societal Development" },
    "16704": { name: "Muhammed Naseeh Mc", department: "Societal Development" },
    "16727": { name: "Muhammed Sufyan Vv", department: "Societal Development" },
    "16729": { name: "Muhammed Farhan", department: "Societal Development" },
    "16730": { name: "Muhammad Ansar K V", department: "Societal Development" },
    "16733": { name: "Bishr C P", department: "Societal Development" },
    "16741": { name: "Muhammed Juraij Vp", department: "Societal Development" },
    "16767": { name: "Muhammed Jabir", department: "Societal Development" },
    "16778": { name: "Muhammed Adil", department: "Societal Development" },
    "16797": { name: "Swalih Minhaj U", department: "Societal Development" },
    "16799": { name: "Muhammed Nihal K", department: "Societal Development" },
    "16804": { name: "Muhammed Shibili", department: "Societal Development" },
    "16817": { name: "Mohammed Swadiq", department: "Societal Development" },
    "16833": { name: "Ibrahim Ag", department: "Societal Development" },
    "16869": { name: "Muhammed Hashim Ek", department: "Societal Development" },
    "16873": { name: "Muhammed Musthafa", department: "Societal Development" },
    "16876": { name: "Adnan Sanaf", department: "Societal Development" },
    "16887": { name: "Muhammed Pk", department: "Societal Development" },
    "16893": { name: "Muhammed Saheer P", department: "Societal Development" },
    "16903": { name: "Muhammed Rashif K", department: "Societal Development" },
    "16904": { name: "Abdul Rauoof Ca", department: "Societal Development" },
    "16937": { name: "Muhammed Swadiq Ta", department: "Societal Development" },
    "16944": { name: "Muhammed Hisham", department: "Societal Development" },
    "16973": { name: "Muhammed Hashim T", department: "Societal Development" },
    "16997": { name: "Murshid", department: "Societal Development" },
    "17020": { name: "Sinsarul Haq K", department: "Societal Development" },
    "17031": { name: "Mohammed Shuaib K", department: "Societal Development" },
    "17036": { name: "Muhammed Shamil M", department: "Societal Development" },
    "17050": { name: "Abdulla Akhnas Vt", department: "Societal Development" },
    "17061": { name: "Muhammed Hashim T", department: "Societal Development" },
    "16064": { name: "Muhd Safwan Mp", department: "Arabic Language and Literature" },
    "16092": { name: "Ishaq Sa", department: "Arabic Language and Literature" },
    "16104": { name: "Muhammed Shibli P", department: "Arabic Language and Literature" },
    "16154": { name: "Muhammed Aslam K", department: "Arabic Language and Literature" },
    "16169": { name: "Rajjak Hussain", department: "Arabic Language and Literature" },
    "16173": { name: "Thanveer Ahammed T", department: "Arabic Language and Literature" },
    "16223": { name: "Muhammed Sinan Pa", department: "Arabic Language and Literature" },
    "16632": { name: "Muhammed Shamil K", department: "Arabic Language and Literature" },
    "16633": { name: "Muhammed Shakeeb T", department: "Arabic Language and Literature" },
    "16673": { name: "Muhammed Javad K A", department: "Arabic Language and Literature" },
    "16703": { name: "Md Ahesan Ali", department: "Arabic Language and Literature" },
    "16731": { name: "Muhammad Shaheer", department: "Arabic Language and Literature" },
    "16759": { name: "Muhammed Abdal", department: "Arabic Language and Literature" },
    "16766": { name: "Muhammed Fathah M S", department: "Arabic Language and Literature" },
    "16224": { name: "Afthab Rahman Pt", department: "Arabic Language and Literature" },
    "16230": { name: "Imran Shaikh", department: "Arabic Language and Literature" },
    "16253": { name: "Muhammed Salim Mk", department: "Arabic Language and Literature" },
    "16265": { name: "Muhammed Nadeer Pp", department: "Arabic Language and Literature" },
    "16286": { name: "Muhammed Thanseer", department: "Arabic Language and Literature" },
    "16289": { name: "Muhammed Swalih P", department: "Arabic Language and Literature" },
    "16291": { name: "Anas Akaram Ansari", department: "Arabic Language and Literature" },
    "16787": { name: "Mahammad Thashreef", department: "Arabic Language and Literature" },
    "16789": { name: "Muhammed Shabeeb P", department: "Arabic Language and Literature" },
    "16792": { name: "Sibtain Raza", department: "Arabic Language and Literature" },
    "16878": { name: "Musthafa Moolakadath", department: "Arabic Language and Literature" },
    "16910": { name: "Mohammed Ismayil", department: "Arabic Language and Literature" },
    "16941": { name: "Ameer Kt", department: "Arabic Language and Literature" },
    "16946": { name: "Ali Fasil P A", department: "Arabic Language and Literature" },
    "16972": { name: "Muhammed Anas Pp", department: "Arabic Language and Literature" },
    "16295": { name: "Md Sanuar Hoque", department: "Arabic Language and Literature" },
    "16315": { name: "Gulam Navi Shekh", department: "Arabic Language and Literature" },
    "16319": { name: "Shaheer Ahamed At", department: "Arabic Language and Literature" },
    "16322": { name: "Mohammed Sabith M", department: "Arabic Language and Literature" },
    "16356": { name: "Mohad Yoonus Ali C", department: "Arabic Language and Literature" },
    "16450": { name: "Javed Raza", department: "Arabic Language and Literature" },
    "16451": { name: "Muhammed Thameem", department: "Arabic Language and Literature" },
    "16976": { name: "Abdulla Thanveer M K", department: "Arabic Language and Literature" },
    "16985": { name: "Althaf P A", department: "Arabic Language and Literature" },
    "16986": { name: "Ahsin Hassan T A", department: "Arabic Language and Literature" },
    "16991": { name: "Muhammed Sinan Pk Pk", department: "Arabic Language and Literature" },
    "17003": { name: "Rashban", department: "Arabic Language and Literature" },
    "17014": { name: "Muhammad Junaid", department: "Arabic Language and Literature" },
    "17019": { name: "Muhammed Ijas K", department: "Arabic Language and Literature" },
    "17064": { name: "Ziyad M T", department: "Arabic Language and Literature" },
    "16497": { name: "Abdu Rahman", department: "Arabic Language and Literature" },
    "16504": { name: "Muhammed Ashmil", department: "Arabic Language and Literature" },
    "16519": { name: "Muhammed Mufeed", department: "Arabic Language and Literature" },
    "16520": { name: "Muhammed Anas Pc", department: "Arabic Language and Literature" },
    "16543": { name: "Dilshad Tk", department: "Arabic Language and Literature" },
    "16560": { name: "Muhammed Sabith Pk", department: "Arabic Language and Literature" },
    "16581": { name: "Muhammed Saleeque K", department: "Arabic Language and Literature" },
    "17071": { name: "Muhammed Muzammil T", department: "Arabic Language and Literature" },
    "17100": { name: "Muhammed Muneer J", department: "Arabic Language and Literature" },
    "17101": { name: "Muhammed Siyad O P", department: "Arabic Language and Literature" },
    "17103": { name: "Thahir Muhammad", department: "Arabic Language and Literature" },
    "17121": { name: "Muhammed Nihal A K", department: "Arabic Language and Literature" },
    "17126": { name: "Muhammed Yahya Av", department: "Arabic Language and Literature" },
    "17139": { name: "Muhammed Yasin Vp", department: "Arabic Language and Literature" },
    "17141": { name: "Abdul Kader Al Ameen", department: "Arabic Language and Literature" },
    "17149": { name: "Muhammed Sinan Kt", department: "Arabic Language and Literature" },
    "17150": { name: "Alfaz Shameer", department: "Arabic Language and Literature" },
    "17153": { name: "Muhammed Adnan K", department: "Arabic Language and Literature" },
    "17163": { name: "Muzammil K P", department: "Arabic Language and Literature" },
    "17184": { name: "Abu Thahir", department: "Arabic Language and Literature" },
    "15902": { name: "Abdul Hafeez Hafeez", department: "Translation and Comparitive Literature" },
    "15905": { name: "Shuhaib", department: "Translation and Comparitive Literature" },
    "15908": { name: "M M Omarfaruque", department: "Translation and Comparitive Literature" },
    "16103": { name: "Falalu Rahman C M", department: "Translation and Comparitive Literature" },
    "16220": { name: "Faizan Khan", department: "Translation and Comparitive Literature" },
    "16243": { name: "Muhammed Ansif", department: "Translation and Comparitive Literature" },
    "16244": { name: "Fazlul Bari", department: "Translation and Comparitive Literature" },
    "16267": { name: "Muhammed Nihal P H", department: "Translation and Comparitive Literature" },
    "16284": { name: "Muhd Dhilshad Ali N", department: "Translation and Comparitive Literature" },
    "16318": { name: "Musaraf Miah", department: "Translation and Comparitive Literature" },
    "16321": { name: "Md Tahseen Raza", department: "Translation and Comparitive Literature" },
    "16366": { name: "Shahid K", department: "Translation and Comparitive Literature" },
    "16370": { name: "Mohammmad Favas", department: "Translation and Comparitive Literature" },
    "16386": { name: "Ismail Jamal", department: "Translation and Comparitive Literature" },
    "16389": { name: "Shajahan Pk", department: "Translation and Comparitive Literature" },
    "16418": { name: "Muhammed Saleem", department: "Translation and Comparitive Literature" },
    "16674": { name: "Farhan C", department: "Translation and Comparitive Literature" },
    "16710": { name: "Muhammed Naseef K", department: "Translation and Comparitive Literature" },
    "16895": { name: "Anshadali Ap", department: "Translation and Comparitive Literature" },
    "16902": { name: "Muhammed Qasim K P", department: "Translation and Comparitive Literature" },
    "16979": { name: "Ansari Nizamuddin", department: "Translation and Comparitive Literature" },
    "16993": { name: "Noufan P", department: "Translation and Comparitive Literature" },
    "17015": { name: "Muhammed Nufail Kp", department: "Translation and Comparitive Literature" },
    "17032": { name: "Momin Fahad", department: "Translation and Comparitive Literature" },
    "16431": { name: "Mohammad Ata Ansar", department: "Translation and Comparitive Literature" },
    "16438": { name: "Mohammed Sinan K", department: "Translation and Comparitive Literature" },
    "16440": { name: "Muhammed Bin Hameed", department: "Translation and Comparitive Literature" },
    "16441": { name: "Muhammed Jasim P", department: "Translation and Comparitive Literature" },
    "16443": { name: "Ridansha U", department: "Translation and Comparitive Literature" },
    "16452": { name: "Jasir P", department: "Translation and Comparitive Literature" },
    "17039": { name: "Muhammed Favas P K", department: "Translation and Comparitive Literature" },
    "17044": { name: "Muhammed Shaheem K", department: "Translation and Comparitive Literature" },
    "17055": { name: "Sayyid Mud Radhin", department: "Translation and Comparitive Literature" },
    "17063": { name: "Muhammed Swalih C", department: "Translation and Comparitive Literature" },
    "17073": { name: "Irfaan Farhathu E C", department: "Translation and Comparitive Literature" },
    "17077": { name: "Sainul Abid", department: "Translation and Comparitive Literature" },
    "17096": { name: "Salim Abdu Rahiman Ki", department: "Translation and Comparitive Literature" },
    "17099": { name: "Muhammed Shammas", department: "Translation and Comparitive Literature" },
    "16460": { name: "Alija Ali Izzath", department: "Translation and Comparitive Literature" },
    "16482": { name: "Muhammed Nawal A P", department: "Translation and Comparitive Literature" },
    "16514": { name: "Muhammed Anas P", department: "Translation and Comparitive Literature" },
    "16518": { name: "Sanidul Islam", department: "Translation and Comparitive Literature" },
    "16533": { name: "Anas", department: "Translation and Comparitive Literature" },
    "16553": { name: "Md Mokibul Islam", department: "Translation and Comparitive Literature" },
    "17117": { name: "Muhammed Usman S", department: "Translation and Comparitive Literature" },
    "17135": { name: "Muhammed Nihal Pa", department: "Translation and Comparitive Literature" },
    "17136": { name: "Muhammed Irfan V", department: "Translation and Comparitive Literature" },
    "17148": { name: "Muhammed Hadiq T", department: "Translation and Comparitive Literature" },
    "17157": { name: "Abdul Rahman Munzir", department: "Translation and Comparitive Literature" },
    "17166": { name: "Rashique Ahammed Pv", department: "Translation and Comparitive Literature" },
    "17167": { name: "Labeeb Shameem Ap", department: "Translation and Comparitive Literature" },
    "17170": { name: "Muhammed Muhsin K", department: "Translation and Comparitive Literature" },
    "17172": { name: "Muhammed Anas M N", department: "Translation and Comparitive Literature" },
    "16556": { name: "Muhammed Aslam", department: "Translation and Comparitive Literature" },
    "16557": { name: "Md Masuk", department: "Translation and Comparitive Literature" },
    "16579": { name: "Nabeel Mansoor", department: "Translation and Comparitive Literature" },
    "16588": { name: "Aurangzeb", department: "Translation and Comparitive Literature" },
    "17173": { name: "Muhammed Ijas Ckm", department: "Translation and Comparitive Literature" },
    "17174": { name: "Muhammed Yaseen K", department: "Translation and Comparitive Literature" },
    "17175": { name: "Shanib Rahman", department: "Translation and Comparitive Literature" },
    "17183": { name: "Muhammed Anas E K", department: "Translation and Comparitive Literature" },
    "17194": { name: "Mohammed Razi", department: "Translation and Comparitive Literature" },
    "17198": { name: "Abdulla M Hakeem", department: "Translation and Comparitive Literature" },
    "17199": { name: "Muhammad Sinan Np", department: "Translation and Comparitive Literature" },
    "17200": { name: "Muhammed Rishad E P", department: "Translation and Comparitive Literature" },
    "17203": { name: "Mohammad Azeem H", department: "Translation and Comparitive Literature" },
    "17204": { name: "Muhammed Nihad Mk", department: "Translation and Comparitive Literature" },
    "17205": { name: "Muhammed Sufaz P", department: "Translation and Comparitive Literature" },
    "16065": { name: "Yoosuf Kamal", department: "Governance and Public Leadership" },
    "16083": { name: "Shahul Hameed Faizal", department: "Governance and Public Leadership" },
    "16095": { name: "Jafar Ali Jawad", department: "Governance and Public Leadership" },
    "16109": { name: "Mohammed Salih P", department: "Governance and Public Leadership" },
    "16118": { name: "Ahmad Asim Ag", department: "Governance and Public Leadership" },
    "16119": { name: "Muhammed Irshad Pk", department: "Governance and Public Leadership" },
    "16121": { name: "Muhammed Faraz K P", department: "Governance and Public Leadership" },
    "16131": { name: "Muhammed Muhsin Mp", department: "Governance and Public Leadership" },
    "16617": { name: "Muhammed Irfan C", department: "Governance and Public Leadership" },
    "16618": { name: "Muhad Nizamuddeen", department: "Governance and Public Leadership" },
    "16619": { name: "Fahmeed Khan Ep", department: "Governance and Public Leadership" },
    "16625": { name: "Sulthan Bin Abbas", department: "Governance and Public Leadership" },
    "16636": { name: "Muhammed Jasim", department: "Governance and Public Leadership" },
    "16638": { name: "Ahmad Shumail", department: "Governance and Public Leadership" },
    "16640": { name: "Muhammed Safeer", department: "Governance and Public Leadership" },
    "16133": { name: "Ameen Abdulla K", department: "Governance and Public Leadership" },
    "16157": { name: "Mahammad Ajmal", department: "Governance and Public Leadership" },
    "16168": { name: "Mahammed Irfan", department: "Governance and Public Leadership" },
    "16180": { name: "Sahal Muhammed", department: "Governance and Public Leadership" },
    "16181": { name: "Muhammed Shaheem", department: "Governance and Public Leadership" },
    "16197": { name: "Ahammed Mushraf Ms", department: "Governance and Public Leadership" },
    "16216": { name: "Muhammed Swalih K", department: "Governance and Public Leadership" },
    "16257": { name: "Mohammed Afsal", department: "Governance and Public Leadership" },
    "16650": { name: "Abdulla Pp", department: "Governance and Public Leadership" },
    "16653": { name: "Muhammed Afsal N", department: "Governance and Public Leadership" },
    "16662": { name: "Mahammad Safwan Kh", department: "Governance and Public Leadership" },
    "16665": { name: "Abbas Aznab M A", department: "Governance and Public Leadership" },
    "16667": { name: "Muhammed Diyab P", department: "Governance and Public Leadership" },
    "16679": { name: "Muhammed Javvad Kt", department: "Governance and Public Leadership" },
    "16694": { name: "Md Saquib Raza", department: "Governance and Public Leadership" },
    "16288": { name: "Abdul Malik K C", department: "Governance and Public Leadership" },
    "16325": { name: "Mahammad Sami Sn", department: "Governance and Public Leadership" },
    "16329": { name: "Ahmad Midlaj Ma", department: "Governance and Public Leadership" },
    "16332": { name: "Ajsal Rahman M", department: "Governance and Public Leadership" },
    "16335": { name: "Mohd Suhail", department: "Governance and Public Leadership" },
    "16337": { name: "Mahammad Irshad Sh", department: "Governance and Public Leadership" },
    "16374": { name: "Ruamais Ali M", department: "Governance and Public Leadership" },
    "16427": { name: "Muhammed Ajmal Kp", department: "Governance and Public Leadership" },
    "16702": { name: "Muhammed Saheer Nt", department: "Governance and Public Leadership" },
    "16713": { name: "Mahammad Savad", department: "Governance and Public Leadership" },
    "16719": { name: "Ahammed Razi Pt", department: "Governance and Public Leadership" },
    "16748": { name: "Muhammed Habeeb T", department: "Governance and Public Leadership" },
    "16750": { name: "Muhammed Habeeb", department: "Governance and Public Leadership" },
    "16757": { name: "Abrar Salim", department: "Governance and Public Leadership" },
    "16788": { name: "Abu Saad Shaikh", department: "Governance and Public Leadership" },
    "16436": { name: "Muhammed Sinan Tk", department: "Governance and Public Leadership" },
    "16474": { name: "Anshif", department: "Governance and Public Leadership" },
    "16479": { name: "Mohammed Arshed Pp", department: "Governance and Public Leadership" },
    "16538": { name: "Muhammed Rahees K", department: "Governance and Public Leadership" },
    "16548": { name: "Muhammed Fasal P", department: "Governance and Public Leadership" },
    "16549": { name: "Ashif Kandoth", department: "Governance and Public Leadership" },
    "16596": { name: "Mohammed Shamsheer", department: "Governance and Public Leadership" },
    "16796": { name: "Ilyas Ahammad", department: "Governance and Public Leadership" },
    "16809": { name: "Muhammed Safwan C B", department: "Governance and Public Leadership" },
    "16814": { name: "Basim Ahammed", department: "Governance and Public Leadership" },
    "16836": { name: "Aaftab Ali Ansari", department: "Governance and Public Leadership" },
    "16838": { name: "Muhammad Salah K", department: "Governance and Public Leadership" },
    "16848": { name: "Mohammed Muddassir", department: "Governance and Public Leadership" },
    "16857": { name: "Muhammed K", department: "Governance and Public Leadership" },
    "16859": { name: "Namshad Nihal", department: "Governance and Public Leadership" },
    "16872": { name: "Vahid Mp", department: "Governance and Public Leadership" },
    "16879": { name: "Muzammil P", department: "Governance and Public Leadership" },
    "16984": { name: "Shaik Umar Farooq", department: "Governance and Public Leadership" },
    "17016": { name: "Muhammed Ansil Mp", department: "Governance and Public Leadership" },
    "17037": { name: "Muhammed Ameen P", department: "Governance and Public Leadership" },
    "17082": { name: "Mohammed Miqdad", department: "Governance and Public Leadership" },
    "16885": { name: "Althaf Shafeeq T S", department: "Community Leadership and Social Change" },
    "16886": { name: "Muhammed Rabeen", department: "Community Leadership and Social Change" },
    "16906": { name: "Mahammad Afsal", department: "Community Leadership and Social Change" },
    "16914": { name: "Muhammed Sinan T C", department: "Community Leadership and Social Change" },
    "16921": { name: "Umer Abdulla", department: "Community Leadership and Social Change" },
    "16923": { name: "Abdul Raheem", department: "Community Leadership and Social Change" },
    "16926": { name: "Muhammed Swalih K", department: "Community Leadership and Social Change" },
    "16999": { name: "Muhammad Shaz", department: "Community Leadership and Social Change" },
    "17048": { name: "Mujthaba Shamil Sha", department: "Community Leadership and Social Change" },
    "17052": { name: "Muhammed Farhan E S", department: "Community Leadership and Social Change" },
    "17084": { name: "Muhammed Midhlaj", department: "Community Leadership and Social Change" },
    "17102": { name: "Hashir Mohammed P P", department: "Community Leadership and Social Change" },
    "17118": { name: "Marwan Ashraf C", department: "Community Leadership and Social Change" },
    "17137": { name: "Mehthab Muneer", department: "Community Leadership and Social Change" },
    "17202": { name: "Mohammed Shaduli M A", department: "Community Leadership and Social Change" },
    "16362": { name: "Muhammed Safwan", department: "Law, Justice and Governance" },
    "16369": { name: "Muhammad Musthafa", department: "Law, Justice and Governance" },
    "16409": { name: "Muhammed Najeeb", department: "Law, Justice and Governance" },
    "16461": { name: "Thasleem Kp", department: "Law, Justice and Governance" },
    "16467": { name: "Muhammed Uvais", department: "Law, Justice and Governance" },
    "16480": { name: "Muhammed Jasim", department: "Law, Justice and Governance" },
    "16644": { name: "Abu Salman Ts", department: "Law, Justice and Governance" },
    "16654": { name: "Basith Basith", department: "Law, Justice and Governance" },
    "16697": { name: "Abdullah T", department: "Law, Justice and Governance" },
    "16728": { name: "Sayd Sahood Abdu Ra", department: "Law, Justice and Governance" },
    "16743": { name: "Mohammed Shammas", department: "Law, Justice and Governance" },
    "16746": { name: "Muhammed Riyas K R", department: "Law, Justice and Governance" },
    "16755": { name: "Nawedul Hasan", department: "Law, Justice and Governance" },
    "16760": { name: "Sayd Mahmood Hashim", department: "Law, Justice and Governance" },
    "16762": { name: "Amir A Asan", department: "Law, Justice and Governance" },
    "15956": { name: "Muhammad Raslan E K", department: "Law, Justice and Governance" },
    "15945": { name: "Mohd Shahabas K", department: "Law, Justice and Governance" },
    "15676": { name: "Mubadhih Ali", department: "Law, Justice and Governance" },
    "15937": { name: "Abdul Gaffar", department: "Law, Justice and Governance" },
    "16062": { name: "Sharafiyab MP", department: "Law, Justice and Governance" },
    "16153": { name: "Muhammed Liyakath", department: "Law, Justice and Governance" },
    "16182": { name: "Roushad", department: "Law, Justice and Governance" },
    "16256": { name: "Ahammed Mubarak", department: "Law, Justice and Governance" },
    "16294": { name: "Abdulla Swalih", department: "Law, Justice and Governance" },
    "16506": { name: "Muhammad Sarshal", department: "Law, Justice and Governance" },
    "16522": { name: "Muhammed Swalih", department: "Law, Justice and Governance" },
    "16531": { name: "Muhammed Nafi'", department: "Law, Justice and Governance" },
    "16536": { name: "Rashad", department: "Law, Justice and Governance" },
    "16561": { name: "Abdu Rasheed", department: "Law, Justice and Governance" },
    "16567": { name: "Aminul", department: "Law, Justice and Governance" },
    "16763": { name: "Muhammed Ashique M", department: "Law, Justice and Governance" },
    "16793": { name: "Jafakash Jahan", department: "Law, Justice and Governance" },
    "16800": { name: "Mohammed Aslam P", department: "Law, Justice and Governance" },
    "16802": { name: "Muhammed Fahim", department: "Law, Justice and Governance" },
    "16808": { name: "Muhammed Jahafar Cp", department: "Law, Justice and Governance" },
    "16813": { name: "Muhammed Siyan", department: "Law, Justice and Governance" },
    "16849": { name: "Muhd Ashique Op", department: "Law, Justice and Governance" },
    "16852": { name: "Md Khalid Raza", department: "Law, Justice and Governance" },
    "16856": { name: "Muhammed Rashiq Pm", department: "Law, Justice and Governance" },
    "16570": { name: "Muhammed Adhil", department: "Law, Justice and Governance" },
    "16573": { name: "Anees Abdulla", department: "Law, Justice and Governance" },
    "16582": { name: "Muhammed Alfas O C", department: "Law, Justice and Governance" },
    "16584": { name: "Muhammed Marvan", department: "Law, Justice and Governance" },
    "16585": { name: "Muhammed Luquman", department: "Law, Justice and Governance" },
    "16593": { name: "Abdul Hadi", department: "Law, Justice and Governance" },
    "16880": { name: "Muhammed Shamil K", department: "Law, Justice and Governance" },
    "16881": { name: "Mohammed Firaz A K", department: "Law, Justice and Governance" },
    "16884": { name: "Muhammed Sajad K P", department: "Law, Justice and Governance" },
    "16894": { name: "Muhammed Salim O", department: "Law, Justice and Governance" },
    "16899": { name: "Muhammed Rashad Pt", department: "Law, Justice and Governance" },
    "16915": { name: "Muhammad Bishar K", department: "Law, Justice and Governance" },
    "16917": { name: "Muhammed Rashid Cs", department: "Law, Justice and Governance" },
    "16983": { name: "Muhammed Ajnas", department: "Law, Justice and Governance" },
    "16988": { name: "Rinshad Shan A", department: "Law, Justice and Governance" },
    "16597": { name: "Abdul Vajid", department: "Law, Justice and Governance" },
    "16599": { name: "Amjadul Ameen K", department: "Law, Justice and Governance" },
    "16602": { name: "Muhammed Anshan", department: "Law, Justice and Governance" },
    "16395": { name: "Niyasul Salman", department: "Law, Justice and Governance" },
    "16491": { name: "Muhammed Dilshad", department: "Law, Justice and Governance" },
    "16614": { name: "Abdul Basith Ct", department: "Law, Justice and Governance" },
    "17018": { name: "Muhammed Fayis Up", department: "Law, Justice and Governance" },
    "17059": { name: "Muhd Shabeeb Cp", department: "Law, Justice and Governance" },
    "17060": { name: "Mahammed Miqdad", department: "Law, Justice and Governance" },
    "17078": { name: "Muhammed Thwayyib", department: "Law, Justice and Governance" },
    "17088": { name: "Salmanul Farisy A S", department: "Law, Justice and Governance" },
    "17109": { name: "Muhammed Musthafa", department: "Law, Justice and Governance" },
    "17111": { name: "Mohammed Salih", department: "Law, Justice and Governance" },
    "17115": { name: "Muhammed Fuhad Kt", department: "Law, Justice and Governance" },
    "17147": { name: "Muhammed Dilfas Pt", department: "Law, Justice and Governance" },
    "17176": { name: "Muhammed TA", department: "Law, Justice and Governance" },
    "15931": { name: "Muhammed Saduli", department: "Holistic Education" },
    "15785": { name: "Muhammed Siyas Kp", department: "Holistic Education" },
    "16012": { name: "Sheez Muhammed", department: "Holistic Education" },
    "16165": { name: "Muhammed Safwan", department: "Holistic Education" },
    "16255": { name: "Amal Ihsan Kp", department: "Holistic Education" },
    "16258": { name: "Rawan", department: "Holistic Education" },
    "16323": { name: "Muhammed Afsal", department: "Holistic Education" },
    "16341": { name: "Muhammad Shameem", department: "Holistic Education" },
    "16342": { name: "Ahammed Anjoom", department: "Holistic Education" },
    "16351": { name: "Ashhar", department: "Holistic Education" },
    "16372": { name: "Ameen", department: "Holistic Education" },
    "16373": { name: "Muhammed Salman", department: "Holistic Education" },
    "16385": { name: "Muhammed Arshad", department: "Holistic Education" },
    "16387": { name: "Muhammed Irfan", department: "Holistic Education" },
    "16391": { name: "Muhammed Anshid", department: "Holistic Education" },
    "16652": { name: "Muhd Thanveer Pk", department: "Holistic Education" },
    "16655": { name: "Muhammed Shamir T", department: "Holistic Education" },
    "16688": { name: "Muhammed Sinan", department: "Holistic Education" },
    "16689": { name: "Muhammed Naseef Nk", department: "Holistic Education" },
    "16699": { name: "Muhammed Shibil", department: "Holistic Education" },
    "16706": { name: "Mubashir", department: "Holistic Education" },
    "16712": { name: "Tariq Anwar K P", department: "Holistic Education" },
    "16742": { name: "Ahammed Nabeel A", department: "Holistic Education" },
    "16401": { name: "Nihal E", department: "Holistic Education" },
    "16423": { name: "Ansil", department: "Holistic Education" },
    "16439": { name: "Salmanul Farisy", department: "Holistic Education" },
    "16449": { name: "Abuthahir", department: "Holistic Education" },
    "16456": { name: "Aman T K", department: "Holistic Education" },
    "16464": { name: "Muhammed Ashad K", department: "Holistic Education" },
    "16466": { name: "Suhail", department: "Holistic Education" },
    "16771": { name: "Muhammed Faris", department: "Holistic Education" },
    "16775": { name: "Muhd Shaheer Kk", department: "Holistic Education" },
    "16779": { name: "Mohammed Ajmal V K", department: "Holistic Education" },
    "16837": { name: "Mohammed Raees K", department: "Holistic Education" },
    "16839": { name: "Muhd Hanees P O", department: "Holistic Education" },
    "16858": { name: "Muhammed Jasim Tm", department: "Holistic Education" },
    "16862": { name: "Abdul Basith C", department: "Holistic Education" },
    "16890": { name: "Zainul Abid P", department: "Holistic Education" },
    "16469": { name: "Muhammed Ali Fahiz", department: "Holistic Education" },
    "16470": { name: "Muhammed Hannan", department: "Holistic Education" },
    "16476": { name: "Muhammed Rafi", department: "Holistic Education" },
    "16525": { name: "Sahadudheen", department: "Holistic Education" },
    "16891": { name: "Muhammed Sinan K", department: "Holistic Education" },
    "16918": { name: "Muhammed Nafih Pk", department: "Holistic Education" },
    "16965": { name: "Muhammed Sahad S", department: "Holistic Education" },
    "17000": { name: "Muhammed Nishad At", department: "Holistic Education" },
    "17001": { name: "Zainul Abid T", department: "Holistic Education" },
    "17002": { name: "Mushfir Kp", department: "Holistic Education" },
    "17024": { name: "Mohd Muzammil E", department: "Holistic Education" },
    "17041": { name: "Muhammed Rabeeh K", department: "Holistic Education" },
    "17065": { name: "Muhammed Hilal Nk", department: "Holistic Education" },
    "17066": { name: "Muhammed Midlaj", department: "Holistic Education" },
    "17067": { name: "Muhammad Asif A K", department: "Holistic Education" },
    "16530": { name: "Muhammed Ameer", department: "Holistic Education" },
    "16542": { name: "Muhammed Thahseen", department: "Holistic Education" },
    "16565": { name: "Muhd Hashim Roshan", department: "Holistic Education" },
    "16589": { name: "Nawwaf", department: "Holistic Education" },
    "16590": { name: "Muhammed Shameel", department: "Holistic Education" },
    "17069": { name: "Muhammed Sinan P", department: "Holistic Education" },
    "17074": { name: "Majid Pk", department: "Holistic Education" },
    "17086": { name: "Muhammed Sinan Kt", department: "Holistic Education" },
    "17113": { name: "Mohammed Rabeeh P", department: "Holistic Education" },
    "17116": { name: "Muhammed Sahl Pp", department: "Holistic Education" },
    "17154": { name: "Javad Ali", department: "Holistic Education" },
    "17155": { name: "Amjad Moosa Pk", department: "Holistic Education" },
    "17156": { name: "Muhammed Shereef", department: "Holistic Education" },
    "17165": { name: "Abdulla Bushair K", department: "Holistic Education" },
    "17196": { name: "Abdul Fathah LK", department: "Holistic Education" },
    "15865": { name: "Najmudheen C", department: "Media and Communication" },
    "16014": { name: "Muhammed Waheed M", department: "Media and Communication" },
    "16015": { name: "Salmanul Faris CH", department: "Media and Communication" },
    "16060": { name: "Bilal Muhammed A", department: "Media and Communication" },
    "16151": { name: "Muhammed Muhasin", department: "Media and Communication" },
    "16238": { name: "Abdulla Majid Mk", department: "Media and Communication" },
    "16298": { name: "Farsin Vp", department: "Media and Communication" },
    "16671": { name: "Muhammed Midlaj Mt", department: "Media and Communication" },
    "16692": { name: "Muhammad Farhan", department: "Media and Communication" },
    "16740": { name: "Munavvir M", department: "Media and Communication" },
    "16744": { name: "Muhammed Ameen", department: "Media and Communication" },
    "16774": { name: "Thanveer", department: "Media and Communication" },
    "16777": { name: "Muhammed Sinan Pk", department: "Media and Communication" },
    "16790": { name: "Muhammed Sinan K", department: "Media and Communication" },
    "16822": { name: "Sahal Muhammed P M", department: "Media and Communication" },
    "16338": { name: "Muhammed Sinan", department: "Media and Communication" },
    "16371": { name: "Muhd Shabeeb Tp", department: "Media and Communication" },
    "16376": { name: "Ameer Shafi E A", department: "Media and Communication" },
    "16392": { name: "Salamanul Faris", department: "Media and Communication" },
    "16394": { name: "Muhammed Abdul Hadi", department: "Media and Communication" },
    "16396": { name: "Muhammed Janees", department: "Media and Communication" },
    "16420": { name: "Muhammed", department: "Media and Communication" },
    "16826": { name: "Muhammed Nadheer A", department: "Media and Communication" },
    "16828": { name: "Muhad Ameen K B", department: "Media and Communication" },
    "16831": { name: "Mohd Salmanul Faris", department: "Media and Communication" },
    "16844": { name: "Muhammed Salih Pt", department: "Media and Communication" },
    "16896": { name: "Badhusha S", department: "Media and Communication" },
    "16905": { name: "Muhammed Althaf A", department: "Media and Communication" },
    "16909": { name: "Faaiz Vr", department: "Media and Communication" },
    "16912": { name: "Shuhaib Rahman Kp", department: "Media and Communication" },
    "16445": { name: "Muhammad Nihal", department: "Media and Communication" },
    "16447": { name: "Mohammed Rahees", department: "Media and Communication" },
    "16458": { name: "Muhammed Razi", department: "Media and Communication" },
    "16459": { name: "Aboobacker Sidheek", department: "Media and Communication" },
    "16475": { name: "Abdulshahid Kt", department: "Media and Communication" },
    "16489": { name: "Irshad", department: "Media and Communication" },
    "16502": { name: "Shahid Muneer", department: "Media and Communication" },
    "16913": { name: "Muhad Nabeel Ke", department: "Media and Communication" },
    "16920": { name: "Hashim Nihal", department: "Media and Communication" },
    "16928": { name: "Nabhan Ca", department: "Media and Communication" },
    "16936": { name: "Muhammed Irfan", department: "Media and Communication" },
    "16939": { name: "Sadab Raza", department: "Media and Communication" },
    "16940": { name: "Ahmed Najrie", department: "Media and Communication" },
    "16964": { name: "Ansif P", department: "Media and Communication" },
    "16966": { name: "Muhad Hisham Ac", department: "Media and Communication" },
    "16503": { name: "Abdul Majid", department: "Media and Communication" },
    "16511": { name: "Faslu Rahman", department: "Media and Communication" },
    "16523": { name: "Mohammed Sinan Mp", department: "Media and Communication" },
    "16541": { name: "Muhammed Ramees", department: "Media and Communication" },
    "16544": { name: "Muhammad Ramees", department: "Media and Communication" },
    "16587": { name: "Muhammed Hisham P", department: "Media and Communication" },
    "16600": { name: "Aboobakr Ma'Roof", department: "Media and Communication" },
    "16978": { name: "Lukuman T P", department: "Media and Communication" },
    "16990": { name: "Muhammed Yahya Pa", department: "Media and Communication" },
    "16995": { name: "Anshad Rahman Pk", department: "Media and Communication" },
    "16998": { name: "Shabeel Mt", department: "Media and Communication" },
    "17012": { name: "Muhd Arshil Ali Kp", department: "Media and Communication" },
    "17030": { name: "Muhamed Musthafa", department: "Media and Communication" },
    "17053": { name: "Ajmal Khan H", department: "Media and Communication" },
    "17057": { name: "Zainu Murshideen", department: "Media and Communication" },
    "17079": { name: "Muhammed Umair K K", department: "Media and Communication" },
    "17090": { name: "Ek Abbas Ali", department: "Media and Communication" },
    "17112": { name: "Arif Zaid P P", department: "Media and Communication" },
    "17124": { name: "Arif Muhammad B", department: "Media and Communication" },
    "17192": { name: "Muhammed Nihal C", department: "Media and Communication" }
};

// ============================================
// GLOBAL STATE
// ============================================
let registrationsData = [];
let departmentSlots = {};
let currentStudent = null;
let selectedDepartment = null;

// DOM Elements
const enrolInput = document.getElementById('enrolNo');
const studentNameField = document.getElementById('studentName');
const studentDepartmentField = document.getElementById('studentDepartment');
const departmentContainer = document.getElementById('departmentContainer');
const departmentSlotInfo = document.getElementById('departmentSlotInfo');
const submitBtn = document.getElementById('submitBtn');
const alertPopup = document.getElementById('alertPopup');
const enrolError = document.getElementById('enrolError');
const statusContainer = document.getElementById('statusContainer');
const statusDisplay = document.getElementById('statusDisplay');
const selectionContainer = document.getElementById('selectionContainer');

// ============================================
// INIT
// ============================================
setupEventListeners();
loadRegistrationsData().then(() => {
    computeDepartmentSlots();
    console.log('✅ Portal ready');
});

// Background refresh
setInterval(async () => {
    await loadRegistrationsData();
    computeDepartmentSlots();
    if (currentStudent) {
        checkExistingRegistration();
        renderDepartmentCard();
    }
}, 30000);

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    let debounceTimeout;
    
    enrolInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        clearTimeout(debounceTimeout);
        
        debounceTimeout = setTimeout(() => {
            if (val.length > 0) {
                lookupStudent(val);
            } else {
                resetStudentUI();
            }
        }, 300);
    });
    
    submitBtn.addEventListener('click', submitRegistration);
}

// ============================================
// STUDENT LOOKUP
// ============================================
function lookupStudent(enrol) {
    const cleanEnrol = String(enrol).trim();
    
    if (!cleanEnrol) {
        resetStudentUI();
        return;
    }
    
    const studentData = STUDENT_DATABASE[cleanEnrol];
    
    if (!studentData) {
        enrolError.textContent = "❌ Enrolment number not found";
        enrolError.classList.remove("hidden");
        resetStudentUI();
        return;
    }
    
    enrolError.classList.add("hidden");
    
    currentStudent = {
        enrol: cleanEnrol,
        name: studentData.name,
        department: studentData.department
    };
    
    studentNameField.value = currentStudent.name;
    studentDepartmentField.value = currentStudent.department;
    
    checkExistingRegistration();
    renderDepartmentCard();
}

function checkExistingRegistration() {
    const existingRegistration = registrationsData.find(r =>
        String(r.enrol).trim() === String(currentStudent.enrol).trim()
    );
    
    if (existingRegistration && existingRegistration.department) {
        statusContainer.classList.remove("hidden");
        statusDisplay.innerHTML = `<span class="status-badge status-submitted"><i class="fas fa-check-circle mr-1"></i> Already Registered for ${existingRegistration.department}</span>`;
        selectionContainer.classList.add("hidden");
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.6";
        submitBtn.style.cursor = "not-allowed";
    } else {
        statusContainer.classList.add("hidden");
        selectionContainer.classList.remove("hidden");
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
    }
}

function resetStudentUI() {
    studentNameField.value = '';
    studentDepartmentField.value = '';
    currentStudent = null;
    selectedDepartment = null;
    statusContainer.classList.add("hidden");
    selectionContainer.classList.add("hidden");
    departmentContainer.innerHTML = '';
    departmentSlotInfo.innerHTML = '';
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
    submitBtn.style.cursor = "pointer";
}

// ============================================
// LOAD REGISTRATIONS
// ============================================
async function loadRegistrationsData() {
    try {
        const response = await fetch(`${APPS_SCRIPT_URL}?action=getAllRegistrations&t=${Date.now()}`);
        const data = await response.json();
        
        if (data.error) {
            console.error("Error loading registrations:", data.error);
            return;
        }
        
        if (Array.isArray(data)) {
            registrationsData = data;
        } else if (data.data && Array.isArray(data.data)) {
            registrationsData = data.data;
        }
        
        console.log(`📋 Loaded ${registrationsData.length} registrations`);
    } catch (err) {
        console.warn("Registrations fetch failed");
    }
}

// ============================================
// DEPARTMENT SLOTS
// ============================================
function computeDepartmentSlots() {
    const allDepartments = [...new Set(Object.values(STUDENT_DATABASE).map(s => s.department))];
    
    departmentSlots = {};
    allDepartments.forEach(dept => {
        departmentSlots[dept] = 0;
    });
    
    for (const reg of registrationsData) {
        const dept = reg.department;
        if (dept && departmentSlots[dept] !== undefined) {
            departmentSlots[dept]++;
        }
    }
}

function getRemainingSlots(department) {
    const current = departmentSlots[department] || 0;
    return Math.max(0, SLOTS_PER_DEPARTMENT - current);
}

function isSlotAvailable(department) {
    return getRemainingSlots(department) > 0;
}

// ============================================
// RENDER DEPARTMENT CARD
// ============================================
function renderDepartmentCard() {
    if (!currentStudent) {
        departmentContainer.innerHTML = '';
        departmentSlotInfo.innerHTML = '';
        return;
    }
    
    const dept = currentStudent.department;
    const remaining = getRemainingSlots(dept);
    const available = remaining > 0;
    const isAlreadyRegistered = registrationsData.some(r => 
        String(r.enrol).trim() === String(currentStudent.enrol).trim() && r.department
    );
    
    let cardHtml = '';
    
    if (isAlreadyRegistered) {
        cardHtml = `
            <div class="department-card disabled">
                <h3 class="font-semibold text-gray-800 text-sm mb-2">${dept}</h3>
                <div class="slot-badge ${!available ? 'slot-full' : 'bg-emerald-100 text-emerald-700'}">
                    ${remaining} slots left
                </div>
                <p class="text-xs text-gray-500 mt-2">Already registered</p>
            </div>
        `;
        departmentSlotInfo.innerHTML = '';
    } else {
        const isSelected = (selectedDepartment === dept);
        cardHtml = `
            <div class="department-card highlight cursor-pointer hover:shadow-md transition-all ${isSelected ? 'selected' : ''}" 
                 onclick="selectDepartment('${dept.replace(/'/g, "\\'")}')" 
                 data-department="${dept}">
                <h3 class="font-semibold text-gray-800 text-sm mb-2">${dept}</h3>
                <div class="slot-badge ${!available ? 'slot-full' : 'bg-emerald-100 text-emerald-700'}">
                    ${available ? `${remaining} slots left` : 'Full'}
                </div>
                ${!available ? '<p class="text-xs text-red-500 mt-2">No slots available</p>' : '<p class="text-xs text-emerald-600 mt-2">Click to select</p>'}
            </div>
        `;
        
        departmentSlotInfo.innerHTML = available ? 
            `<i class="fas fa-info-circle mr-1"></i> ${remaining} of ${SLOTS_PER_DEPARTMENT} slots remaining for ${dept}` :
            `<i class="fas fa-exclamation-triangle mr-1 text-red-500"></i> All ${SLOTS_PER_DEPARTMENT} slots filled for ${dept}`;
    }
    
    departmentContainer.innerHTML = cardHtml;
}

// Global function for department selection
window.selectDepartment = function(department) {
    if (!currentStudent) {
        showAlert("Please enter a valid enrolment number first");
        return;
    }
    
    const alreadyRegistered = registrationsData.some(r => 
        String(r.enrol).trim() === String(currentStudent.enrol).trim() && r.department
    );
    
    if (alreadyRegistered) {
        showAlert("You have already registered. Registration cannot be changed.");
        return;
    }
    
    if (!isSlotAvailable(department)) {
        showAlert(`No available slots for ${department}. This department is full.`);
        return;
    }
    
    selectedDepartment = department;
    renderDepartmentCard();
    showAlert(`Selected: ${department}`, false);
};

// ============================================
// SUBMIT REGISTRATION
// ============================================
async function submitRegistration() {
    if (!currentStudent) {
        showAlert("❌ Please enter a valid enrolment number first.");
        return;
    }
    
    const alreadyRegistered = registrationsData.some(r => 
        String(r.enrol).trim() === String(currentStudent.enrol).trim() && r.department
    );
    
    if (alreadyRegistered) {
        showAlert("⚠️ You have already registered. Registration cannot be changed.");
        return;
    }
    
    if (!selectedDepartment) {
        showAlert("⚠️ Please select your department by clicking on it.");
        return;
    }
    
    if (!isSlotAvailable(selectedDepartment)) {
        showAlert(`❌ No available slots for ${selectedDepartment}.`);
        renderDepartmentCard();
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
            registrationsData.push({
                enrol: currentStudent.enrol,
                name: currentStudent.name,
                department: selectedDepartment,
                submission_date: new Date().toISOString()
            });
            
            computeDepartmentSlots();
            
            showAlert(`✅ Success! Registered for ${selectedDepartment}.`, false);
            
            statusContainer.classList.remove("hidden");
            statusDisplay.innerHTML = `<span class="status-badge status-submitted"><i class="fas fa-check-circle mr-1"></i> Registered for ${selectedDepartment}</span>`;
            selectionContainer.classList.add("hidden");
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.6";
            submitBtn.style.cursor = "not-allowed";
        } else {
            showAlert(`❌ Registration failed: ${result.error || "Unknown error"}`);
            await loadRegistrationsData();
            computeDepartmentSlots();
            renderDepartmentCard();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
            submitBtn.style.opacity = "1";
            submitBtn.style.cursor = "pointer";
        }
    } catch (error) {
        console.error("Submit error:", error);
        showAlert("Network error. Please try again.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
    }
}

// ============================================
// UI HELPERS
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
// SECURITY
// ============================================
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("keydown", function(e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && (e.key === "u" || e.key === "U"))
    ) {
        e.preventDefault();
    }
});

console.log('%c⚡ PG Quota Registration Portal ⚡', 'color: #059669; font-size: 16px; font-weight: bold;');
