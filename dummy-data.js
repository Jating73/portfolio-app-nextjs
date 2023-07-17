const EDUCATION_DETAILS = [
  {
    id: 1,
    university_name: "National Insititute of Technology, Jamshedpur",
    unviversity_degree: "Master of Computer Applications",
    start_year: 2018,
    end_year: 2021,
  },
  {
    id: 2,
    university_name: "Panjab Univeristy, Chandigarh",
    unviversity_degree: "Bachelor of Computer Applications",
    start_year: 2015,
    end_year: 2018,
  },
  {
    id: 3,
    university_name: "Central Board of Secondary Education.",
    unviversity_degree: "High School Education",
    start_year: 2014,
    end_year: 2015,
  },
];

const WORK_DETAILS = [
  {
    "id:": 1,
    company_name: "Eleve Media Pvt. Ltd",
    company_logo: 'eleve-media.png',
    company_url: "https://www.eleve.co/",
    position: "Software Engineer",
    start_month: "October",
    start_year: "2022",
    end_month: "",
    end_year: "Present",
    descriptions: [
      "Develop and maintain Backend for apps and web panels",
      "Setting up applications and deploying them on the cloud (AWS).",
      "Writing and optimizing APIs and Database Queries.",
      "Reduced the manual work by automating clearing of data from elastic search.",
      "Debugging production issues.",
      "Solely responsible for the delivery platform(Fatafat and Menus).",
      "Created OPEN APIs and documentation with multiple levels of security.",
      "Integrating various third-party solutions like payment gateways, customer KYC, marketing modules, etc.",
      "Mentoring juniors, actively performing code reviews and discussions.",
      "Actively participating in providing solutions for new development with managers and clients.",
    ],
  },
  {
    "id:": 2,
    company_name: "Jugnoo",
    company_logo: 'jugnoo.png',
    company_url: "https://www.jugnoo.in/",
    position: "Associate Software Engineer",
    start_month: "July",
    start_year: "2021",
    end_month: "2022",
    end_year: "2022",
    descriptions: [
      "Develop and maintain Backend for apps and web panels",
      "Setting up applications and deploying them on the cloud (AWS).",
      "Writing and optimizing APIs and Database Queries.",
      "Reduced the manual work by automating clearing of data from elastic search.",
      "Debugging production issues.",
      "Solely responsible for the delivery platform(Fatafat and Menus).",
      "Created OPEN APIs and documentation with multiple levels of security.",
      "Integrating various third-party solutions like payment gateways, customer KYC, marketing modules, etc.",
      "Mentoring juniors, actively performing code reviews and discussions.",
      "Actively participating in providing solutions for new development with managers and clients.",
    ],
  },
  {
    "id:": 3,
    company_name: "Jugnoo",
    company_logo: 'jugnoo.png',
    company_url: "https://www.jugnoo.in/",
    position: "Software Engineer Intern",
    start_month: "January",
    start_year: "2021",
    end_month: "June",
    end_year: "2021",
    descriptions: [
      "Develop and maintain Backend for apps and web panels",
      "Writing and optimizing APIs and Database Queries.",
      "Debugging production issues on staging",
      "Integrating various third-party solutions like payment gateways, sms gatewags, marketing modules, etc.",
      "Actively performing code reviews and discussions.",
      "Actively participating in providing solutions for new features with managers and clients.",
    ],
  },
  {
    "id:": 4,
    company_name: "Career Dreams Education",
    company_logo: 'career-dreams.png',
    company_url: "https://www.careerdreams.co.in/",
    position: "Software Developer Intern",
    start_month: "December",
    start_year: "2020",
    end_month: "March",
    end_year: "2021",
    descriptions: [
      "Develop and maintain Intern Management System from Scratch",
      "Reduced manual effort by 70% of storing and managing data using google form and excel sheet.",
      "Making optimal Database Model using MySQL for Intern Management System",
      "Writing Complex Database Queries.",
      "Debugging issues on existing website",
      "Taking Interviews, Mentoring juniors, actively performing code reviews and discussions.",
    ],
  },
];

const SKILLS_DETAILS = [
  {
    id: 1,
    language: "NodeJS",
    percentage: "80",
  },
  {
    id: 2,
    language: "ReactJS",
    percentage: "75",
  },
  {
    id: 3,
    language: "Javascript",
    percentage: "90",
  },
  {
    id: 4,
    language: "C++",
    percentage: "85",
  },
  {
    id: 5,
    language: "HTML",
    percentage: "90",
  },
  {
    id: 6,
    language: "CSS",
    percentage: "85",
  },
  {
    id: 7,
    language: "Bootstrap",
    percentage: "90",
  },
  {
    id: 8,
    language: "PHP",
    percentage: "75",
  },
  {
    id: 9,
    language: "MySQL",
    percentage: "80",
  },
  {
    id: 10,
    language: "MongoDB",
    percentage: "80",
  },
  {
    id: 11,
    language: "GIT",
    percentage: "85",
  },
];

const PROJECT_DETAILS = [
  {
    id: 1,
    app_name: "E-Commerce",
    techs: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    id: 2,
    app_name: "Weather App",
    techs: ["NodeJS", "ExpressJS", "HTML5", "CSS3"],
  },
  {
    id: 3,
    app_name: "Book Publication",
    techs: ["ReactJS", "HTML5", "CSS3", "Javascript", "Bootstrap"],
  },
  {
    id: 4,
    app_name: "Hotel Booking",
    techs: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
  },
  {
    id: 5,
    app_name: "Appointment Booking",
    techs: ["ReactJS", "Bootstrap"],
  },
];

const VOLUNTEER_DETAILS = [
  {
    id: 1,
    volunteering_job: "DIGITAL MEDIA MARKETING INTERN",
    organisation: "Hamari Pahchan NGO",
    start_month: "June",
    start_year: "2020",
    end_month: "July",
    end_year: "2020",
    descriptions: [
      "Creating Posters For NGO.",
      "Help in Raising Funds for the NGO.",
      "Creating Social Awareness Regarding Illiterate Women",
    ],
  },
  {
    id: 2,
    volunteering_job: "JOINT CORE",
    organisation: "CULFEST",
    start_month: "August",
    start_year: "2018",
    end_month: "July",
    end_year: "2019",
    descriptions: [
      "Responible for managing different Fests and Activities.",
      "Team Management",
      "Guiding Juniors to work properly",
    ],
  },
];

export function getEducationDetails() {
  return EDUCATION_DETAILS;
}

export function getWorkDetails() {
  return WORK_DETAILS;
}

export function getSkillDetails() {
  return SKILLS_DETAILS;
}

export function getProjectDetails() {
  return PROJECT_DETAILS;
}

export function getVolunteerDetails() {
  return VOLUNTEER_DETAILS;
}
