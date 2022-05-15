particlesJS.load('particlesjs', 'packages/particlesjs/config.json', function () {
  console.log('callback - particles.js config loaded');
});

/* Projects */
let projectsPanel = document.querySelector('#pro-nav-panel');
let projectItems = [];
let projects = [
  {
    duration: 'Feb 2022 - Mar 2022',
    name: 'Food Ordering System',
    role: 'As Full-stack Developer',
    jobs: [
      'Implementing design to code using Laravel Blade',
      'Creating API using Laravel',
    ],
  },
  {
    duration: 'Jul 2021 - Des 2021',
    name: 'G-One Prehospital System',
    role: 'As Leader & Full-stack Developer',
    jobs: [
      'Managing repository using GitHub',
      'Manging clouds environment in GCP',
      'Implementing design to code using Flutter for mobile',
      'Implementing design to code using Vue.js for web',
      'Creating API using Golang',
    ],
  },
  {
    duration: 'Des 2020 - Jan 2021',
    name: 'Room Booking System',
    role: 'As Leader & Mobile Developer',
    jobs: [
      'Managing repository in GitHub',
      'Implementing design to code using React Native',
    ],
  },
  {
    duration: 'Jan 2020 - Apr 2020',
    name: 'Turangga Cellular Management System',
    role: 'As UI/UX & Frontend Developer',
    jobs: [
      'Designing mockups using Figma',
      'Implementing design to code using Vue.js',
    ],
  },
  {
    duration: 'Mar 2019 - Jun 2019',
    name: 'Automatic Inspection Gate',
    role: 'As Backend Developer',
    jobs: [
      'Creating API using NodeJS & Express',
      'Designing system architecture',
      'Managing cloud environment in GCP',
    ],
  },
];

projects.forEach((project) => {
  let projectItem = `
  <div class="card radius p-2 mb-2">
    <div class="card-body">
      <p class="text-muted mb-2">${project.duration}</p>
      <h4 class="fs-4 fw-bold mb-2">${project.name}</h4>
      <p class="fs-5 mb-3">${project.role}</p>
      <h6 class="fs-6 mb-2">Job description:</h6>
      <ol class="list-group list-group-numbered list-group-flush">
        ${project.jobs.map((job) => `<li class="list-group-item">${job}</li>`).join("")}
      </ol>
    </div>
  </div>
  `;
  projectItems.push(projectItem);
});
projectsPanel.innerHTML = projectItems;

/* Educations */
let educationsPanel = document.querySelector('#edu-nav-panel');
let educationItems = [];
let educations = [
  {
    duration: '2020 - 2021',
    name: 'Google Bangkit Academy Program',
    location: 'Indonesia',
    path: 'Cloud Computing Learning Path',
    description: 'Google Bangkit Program is a Google\'s program that collaborates with big tech companies in Indonesia such as Gojek, Traveloka, Tokopedia to educate college students in Indonesia to learn about the tech industry. Google Bangkit Program has 3 learning paths: Android, Cloud Computing and Machine Learning.',
  },
  {
    duration: '2018 - Present',
    name: 'STMIK Primakara',
    location: 'Denpasar, Bali',
    path: 'Bachelor in Informatics Engineering',
    description: 'STMIK Primakara is a college that lets its students focus on leadership and entrepreneurship in technology, especially startups.',
  },
];

educations.forEach((education) => {
  let educationItem = `
  <div class="card radius p-2 mb-2">
    <div class="card-body">
      <p class="text-muted mb-2">${education.duration}</p>
      <h4 class="fs-4 fw-bold mb-2">${education.name}, ${education.location}</h4>
      <p class="fs-5 mb-3">${education.path}</p>
      <p class="lh-base">${education.description}</p>
    </div>
  </div>
  `;
  educationItems.push(educationItem);
});
educationsPanel.innerHTML = educationItems;