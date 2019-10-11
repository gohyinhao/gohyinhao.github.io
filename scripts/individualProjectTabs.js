const descriptionTab = document.querySelector('#description-tab');
const toolsTab = document.querySelector('#tools-tab');
const roleTab = document.querySelector('#role-tab');

const descriptionSegment = document.querySelector('#description-segment');
const toolsSegment = document.querySelector('#tools-segment');
const roleSegment = document.querySelector('#role-segment');

var activeTab = 'description';
  descriptionTab.addEventListener('click', () => {
  if (activeTab !== 'description') {
    activeTab = 'description';

    toolsTab.classList.remove('active');
    roleTab.classList.remove('active');
    toolsSegment.classList.remove('active');
    roleSegment.classList.remove('active');

    descriptionTab.classList.add('active');
    descriptionSegment.classList.add('active');
  }
});

toolsTab.addEventListener('click', () => {
  if (activeTab !== 'tools') {
    activeTab = 'tools';

    descriptionTab.classList.remove('active');
    roleTab.classList.remove('active');
    descriptionSegment.classList.remove('active');
    roleSegment.classList.remove('active');

    toolsTab.classList.add('active');
    toolsSegment.classList.add('active');
  }
});

roleTab.addEventListener('click', () => {
  if (activeTab !== 'role') {
    activeTab = 'role';

    descriptionTab.classList.remove('active');
    toolsTab.classList.remove('active');
    descriptionSegment.classList.remove('active');
    toolsSegment.classList.remove('active');

    roleTab.classList.add('active');
    roleSegment.classList.add('active');
  }
});