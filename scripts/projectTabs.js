const petTab = document.querySelector('#pet-tab');
const schoolTab = document.querySelector('#school-tab');
const tutorialTab = document.querySelector('#tutorial-tab');

const petSegment = document.querySelector('#pet-segment');
const schoolSegment = document.querySelector('#school-segment');
const tutorialSegment = document.querySelector('#tutorial-segment');

var activeTab = 'pet';

petTab.addEventListener('click', () => {
  if (activeTab !== 'pet') {
    activeTab = 'pet';

    schoolTab.classList.remove('active');
    tutorialTab.classList.remove('active');
    schoolSegment.classList.remove('active');
    tutorialSegment.classList.remove('active');

    petTab.classList.add('active');
    petSegment.classList.add('active');
  }
});

schoolTab.addEventListener('click', () => {
  if (activeTab !== 'school') {
    activeTab = 'school';

    petTab.classList.remove('active');
    tutorialTab.classList.remove('active');
    petSegment.classList.remove('active');
    tutorialSegment.classList.remove('active');

    schoolTab.classList.add('active');
    schoolSegment.classList.add('active');
  }
});

tutorialTab.addEventListener('click', () => {
  if (activeTab !== 'tutorial') {
    activeTab = 'tutorial';

    petTab.classList.remove('active');
    schoolTab.classList.remove('active');
    petSegment.classList.remove('active');
    schoolSegment.classList.remove('active');

    tutorialTab.classList.add('active');
    tutorialSegment.classList.add('active');
  }
});