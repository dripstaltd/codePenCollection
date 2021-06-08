import 'core-js/stable';
import 'regenerator-runtime/runtime';

export const nel = {
  // strength
  strength: 0, //mg
  time: 7, //days
  wattage: 0, //wattage
};

export const inputHandler = function (drop, cus) {
  const dropText = drop[drop.selectedIndex].value;
  console.log(dropText);
  const cusText = cus.textContent;
  console.log('------');
  console.log(cusText);
};

export const renderResults = function (data) {
  let nel = calcPatch(data.strength, data.time);
  const markup = `
        <div class="results-container container-fluid" id="results-data">
          <span><h2>Results</h2><p>${nel}</p></span>
          <p >Patch Strength: ${data.strength}<br>
            Time: ${data.time}<br>
          Price: ${data.price}
          Quantity: ${data.quantity}</p>
        </div>
      `;
  if (!data) return console.error('error, no data');
  return markup;
};

export const calcPatch = (strength, time) => {
  let sum = strength / time;
  return sum;
};

export const calcPage = () => {
  const x = document.getElementById('btn-calc');
  x.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#calculator';
    location.reload();
  });
};

// BUG- this doesnt work
export const toggleDisplay = function (x) {
  console.log(x);
  const y = document.getElementById(`${x}`);
  console.log(y);
  const z = ['calculator-page', 'clipboard', 'settings'];
  // setting display of the other pages to none
  y.style.display = 'block';
  for (pages of z !== x) {
    pages.style.display = 'none';
  }
};
