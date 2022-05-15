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