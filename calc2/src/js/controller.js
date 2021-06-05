'using strict';
import * as model from './model.js';
import calcView from './views/calcView.js';
import clipView from './views/clipView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import settingsView from './views/settingsView.js';
//////////////////////////////////////////////////////////
const patchStrength = document.querySelector('#patch-strength');
const calcForm = document.querySelector('#calculator-form');
const allInputs = document.querySelectorAll('input');
//////////////////////////////////////////////////////////
// Calculator page nicotine options
const btnPatch = document.querySelector('#option--patch');
const btnOral = document.querySelector('#option--oral');
const btnVape = document.querySelector('#option--vape');
const btnSpray = document.querySelector('#option--spray');
//////////////////////////////////////////////////////////
const strengthLabel = document.getElementById('strength--label');
const page = document.querySelector('.page');
const mCol = document.querySelector('.mainContainer');
const timeLabel = document.getElementById('time--label');

const priceLabel = document.querySelector('#price--label');

const boxQuantityLabel = document.querySelector('#box-quantity--label');

//////////////////////////////////////////////////////////

const strengthHandler = function () {
  const strengthCus = document.getElementById('custom--strength').value;
  const e = document.getElementById('drop--strength');
  const vS = e[e.selectedIndex].value;
  let result;
  if (strengthCus === 0 || strengthCus === '0') {
    result = +vS;
    return result;
  } else {
    result = +strengthCus;
    return result;
  }
};
const timeHandler = function () {
  const x = document.getElementById('custom--time').value;
  const e = document.getElementById('drop--time');
  const vT = e[e.selectedIndex].value;
  let result;
  if (x === 0 || x === '0') {
    result = +vT;
    return result;
  } else {
    result = +x;
    return result;
  }
};

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

const controlCalculator = async function () {
  try {
  } catch (err) {
    console.log(err.message);
  }
};

// Changing page
window.addEventListener('hashchange', function () {
  // get current hash
  const curHash = location.hash;
  // render page by id === current hash
  if (curHash === '#calculator') calcView.loadPage();
  if (curHash === '#clipboard') clipView.loadPage();
  if (curHash === '#android-settings') settingsView.loadPage();
});

document.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('form submit check');

  const data = {
    strength: strengthHandler(),
    time: timeHandler(),
    price: +document.querySelector('#price--input').value,
    quantity: +document.querySelector('#box-quantity--input').value,
  };
  mCol.insertAdjacentHTML('afterbegin', model.renderResults(data));
});

const init = function () {
  controlCalculator();
};
init();
