const personalTab = document.querySelector('#personal-tab');
const schoolTab = document.querySelector('#school-tab');
const tutorialTab = document.querySelector('#tutorial-tab');

const personalSegment = document.querySelector('#personal-segment');
const schoolSegment = document.querySelector('#school-segment');
const tutorialSegment = document.querySelector('#tutorial-segment');

var activeTab = 'personal';

personalTab.addEventListener('click', () => {
  if (activeTab !== 'personal') {
    activeTab = 'personal';

    schoolTab.classList.remove('active');
    tutorialTab.classList.remove('active');
    schoolSegment.classList.remove('active');
    tutorialSegment.classList.remove('active');

    personalTab.classList.add('active');
    personalSegment.classList.add('active');
  }
});

schoolTab.addEventListener('click', () => {
  if (activeTab !== 'school') {
    activeTab = 'school';

    personalTab.classList.remove('active');
    tutorialTab.classList.remove('active');
    personalSegment.classList.remove('active');
    tutorialSegment.classList.remove('active');

    schoolTab.classList.add('active');
    schoolSegment.classList.add('active');
  }
});

tutorialTab.addEventListener('click', () => {
  if (activeTab !== 'tutorial') {
    activeTab = 'tutorial';

    personalTab.classList.remove('active');
    schoolTab.classList.remove('active');
    personalSegment.classList.remove('active');
    schoolSegment.classList.remove('active');

    tutorialTab.classList.add('active');
    tutorialSegment.classList.add('active');
  }
});