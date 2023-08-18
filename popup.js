// const { load } = require("flat-cache");

const projects = [
  {
    id: 'pro-1',
    title: 'Portfolio Pages',
    technologies: [
      'html',
      'CSS',
      'Javascript',
    ],
    featureImage: './images/port.png',
    description: 'This project is a responsive mobile-first portfolio website that can be used by professionals like software developers to showcase and promote their work. It is built using javascript and bootstrap.',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink: 'https://github.com/Habtamu210/portfoliopage',
  },
  {
    id: 'pro-2',
    title: 'Budget Application',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails',
    ],
    featureImage: './images/budget-app.png',
    description: 'Budget-app is a personal expense tracker mobile app that allows users to: create expense category, introduce new transactions associated with a category and see total expense as well as expense per each category.',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink: 'https://github.com/Habtamu210/budget-app',
  },
  {
    id: 'pro-3',
    title: 'Car Appointment',
    technologies: [
      'Java',
      'Springbot',
      'Ruby',
    ],
    featureImage: './images/car.png',
    description: 'A fullstack Booking web application that enables users to signup, login, logout, add/delete cars, make/cancel reservations. Full features of authentication and authorization. Built with React + Redux + Rails',
    livelink: 'https://booking-app-api-lmvm.onrender.com/api-docs/index.html',
    sourcelink: 'https://github.com/ernestmusong/Booking-app-frontend',
  },
  {
    id: 'pro-4',
    title: 'Book Store',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby',
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'An aplication developed using react and it is a bookstore website that allow users to add books, edit, remove and list books to the user, Display a list of books, Add a book, Remove a selected book',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink: 'https://github.com/Habtamu210/portfoliopage',
  },
  {
    id: 'pro-5',
    title: 'Leaderboard',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby',
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'About The leaderboard website displays scores submitted by different players. It also allows you to submit your score. Built with JavaScript and preserve data at Leaderboard API service.',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink: 'https://github.com/Habtamu210/portfoliopage',
  },
  {
    id: 'pro-6',
    title: 'math-magicians',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby',
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'About "Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple mathmatical calculations like addation, multiplication.',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink: 'https://github.com/Habtamu210/portfoliopage',
  },
  {
    id: 'pro-7',
    title: 'Crypto Web-app',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby',
    ],
    featureImage: './images/bitcoin.png',
    description: 'The Crypto Web-app display a list of Crypto. It also gives us name of Crypto, its image, average price, update on todays lowest price, and update on todays highest price including its Algorithm.',
    livelink: 'https://cryptocurrency-news.onrender.com/',
    sourcelink: 'https://github.com/Habtamu210/React-capstone-Web',
  },
];
const loadCards = () => {
  for (let i = 1; i < projects.length; i += 1) {
    const mySection = document.createElement('section');
    mySection.classList.add('projects');
    mySection.id = projects[i].id;
    mySection.innerHTML = `
    <div class = "project-data">
      <h3 class="project-title">${projects[i].title}</h3>
      <p class="project-description">${projects[i].description}</p>
      <ul class="languages-1">
          <li class="langn">html</li>
          <li class="langn">bootstrap</li>
          <li class="langn">Ruby</li>
      </ul>
      <button class="fullwidth-button" id = ${`${projects[i].id}-btn`}>See Project</button>
    </div>
      `;
    const workSection = document.querySelector('.works-1');
    workSection.appendChild(mySection);
  }
};
document.addEventListener('DOMContentLoaded', () => {
  loadCards();
}, false);

// pup up
const projectButtons = [];
const buttons = document.querySelectorAll('button');
const modal = document.getElementById('myModal');
buttons.forEach((button) => {
  const [btn] = button.id.split('-');
  if (btn === 'project') projectButtons.push(button);
});
const displayModal = (id) => {
  const project = projects.find((p) => p.id === id);
  const render = `
  <div class="modal-container">
    <div class="modal-header">
      <div class="mod-heading">
        <h2>${project.title}</h2>
        <!-- <a href="#" class="close"></a> -->
        <span class="close">&times;</span>
      </div>
      <ul class="modal-language">
        <li>html</li>
        <li>Bootstrap</li>
        <li>Ruby rails</li>
      </ul>
    </div>
    <div class="description-part">
      <div><img class="img-b" src="${project.featureImage}" alt="feature-image"></div>
      <div class="info-pop">
        <p>${project.description}</p>
        <div class="button-modal">
          <button class="btn-o"><a class = "pop-link" href= ${project.livelink}> See Live <img class="live" src="images/Icon-see-live.svg"></a></button>
          <button class="btn-oo"><a class = "pop-link" href= ${project.sourcelink}>See Source<img class="see"  src="images/Vector.svg"></a></button>
        </div>
      </div>
    </div>
    </div>
`;
  modal.innerHTML = render;
  modal.style.display = 'block';
  const closeModalBtn = document.querySelector('span.close');
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

function addLi(proId) {
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === `${proId}-btn`) {
      // display modal
      displayModal(proId);
    }
  });
}

// iterate over and add listner to all buttons
for (let i = 0; i < projects.length; i += 1) {
  addLi(projects[i].id);
}
