'using strict';

const State = {
  pages: ['welcome', 'calculator', 'clipboard', 'settings'],
  currentPage: 'welcome',
};

class SubmitData {
  constructor(strength, time, size) {
    this.strength = strength;
    this.time = time;
    this.size = size;
  }
}

// Select all the anchor tags
let links = document.querySelectorAll('a');
let pageContainer = document.querySelector('.mainContainer');
// Loop through the link lists
links.forEach((link) => {
  // Add a click event on each link
  link.addEventListener('click', () => {
    // Get current active link and store in currActive variable
    let currActive = document.querySelector('.active');
    // Set next active link to the current active classname
    let nextActive = currActive.className;
    // Set the current active class to none
    currActive.className = nextActive.replace('active', '');
    // Getting active class name from current and saveing to x
    // Set the clicked link item to active.
    link.className += ' active';
  });
});

const markupCalc = `
    <div class="page">
      <h2 class="page__title">N.E.L Calculator</h2>
      <p class="page__description--short">
        User guide infomation
      </p>
    </div>
`;

const markupClip = `
    <div class="page">
      <h2 class="page__title">Clipboard</h2>
      <p class="page__description--short">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum fuga optio voluptatum in delectus consequatur maxime ipsum culpa officia.
      </p>
    </div>
`;

const markupSettings = `
    <div class="page">
      <h2 class="page__title">Settings</h2>
      <p class="page__description--short">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum fuga optio voluptatum in delectus consequatur maxime ipsum culpa officia.
      </p>
    </div>
`;

// Changing page
window.addEventListener('hashchange', function () {
  // get current hash
  const curHash = location.hash;
  // render page by id === current hash
  if (curHash === '#calculator') pageHandler(markupCalc, 'calulator');
  if (curHash === '#clipboard') pageHandler(markupClip, 'clipboard');
  if (curHash === '#android-settings') pageHandler(markupSettings, 'settings');
});

const pageHandler = function (markup, setPage) {
  pageContainer.innerHTML = markup;
  State.currentPage = setPage;
  console.log(State.currentPage);
};
