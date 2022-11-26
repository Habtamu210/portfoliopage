//const { load } = require("flat-cache");

const projects = [
  {
    id: 'pro-1',
    title: 'Multi post stories',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby'
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink: 'https://habtamu210.github.io/portfoliopage/',
  },
  { 
    id: 'pro-2',
    title: 'Profesional Art Printing Data',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby on rails'
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink:'https://habtamu210.github.io/portfoliopage/',
  },
  {
    id: 'pro-3',
    title: 'Profesional Art Printing Data',
    technologies: [
      'Java',
      'Springbot',
      'Ruby'
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink:'https://habtamu210.github.io/portfoliopage/',
  },
  {
    id: 'pro-4',
    title: 'Profesional Art Printing Data',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby'
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink:'https://habtamu210.github.io/portfoliopage/',
  },
  {
    id: 'pro-5',
    title: 'Profesional Art Printing Data',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby'
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink:'https://habtamu210.github.io/portfoliopage/',
  },
  {
    id: 'pro-6',
    title: 'Profesional Art Printing Data',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby'
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink:'https://habtamu210.github.io/portfoliopage/',
  },
  {
    id: 'pro-7',
    title: 'Profesional Art Printing Data',
    technologies: [
      'html',
      'Bootstrap',
      'Ruby'
    ],
    featureImage: './images/Img_Placeholder.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    livelink: 'https://habtamu210.github.io/portfoliopage/',
    sourcelink:'https://habtamu210.github.io/portfoliopage/',
  },
];
const loadCards = ()=> {
  for(let i=1; i < projects.length; i+=1){
    const mySection = document.createElement('section');
    mySection.classList.add('projects');
    mySection.id = projects[i].id;
    mySection.innerHTML= `
    <div class = "project-data">
      <h3 class="project-title">${projects[i].title}</h3>
      <p class="project-description">${projects[i].description}</p>
      <ul class="languages-1">
          <li class="langn">html</li>
          <li class="langn">bootstrap</li>
          <li class="langn">Ruby</li>
      </ul>
      <button class="fullwidth-button" id = ${projects[i].id+'-btn'}>See Project</button>
    </div>
      `
    const workSection = document.querySelector('.works-1');
    workSection.appendChild(mySection);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  loadCards();
}, false);
  
// pup up
const additionalLanguages = ['Github', 'Ruby', 'Bootsrap'];
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
          <button class="btn-o">See Live <img class="live" src="images/Icon-see-live.svg"></button>
          <button class="btn-oo">See Source<img class="see"  src="images/Vector.svg"></button>
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
 