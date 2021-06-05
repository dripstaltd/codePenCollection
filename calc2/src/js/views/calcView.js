import View from '../View.js';

/////////////////////////////////////////////////////
class CalculatorView extends View {
  _parentElement = document.querySelector('.mainContainer');
  _errorMessage = 'Calculator Page View Error';
  _message = '';
  _pageName = 'calculator';
  _results = [];

  _generateMarkup() {
    return `
      <div class="page">
        <div class="welcome">
          <h1 class="page__title">N.E.L</h1>
          <p class="page__description--short">Nicotine Efficiency Calculator</p>
        </div>
        <form class="wrapper calculator" id="calculator-form">
          <div class="container-fluid calculator__container">
            <ul class="row calculator__container--row" id="nicotineOptions">
              <li class="btn-products active" id="option--patch">Patches</li>
              <li class="btn-products" id="option--oral">Oral</li>
              <li class="btn-products" id="option--vape">Vapes</li>
              <li class="btn-products" id="option--spray">sprays</li>
            </ul>
            <p class="question-label" id="strength--label"><i class="fas fa-skull-crossbones"></i> Patch Strength?</p>
            <div class="row calculator__container--row">
              <input class="col-xs-6 calculator__container--col" id="custom--strength" type="number" placeholder="strength.." value="0" />

              <select id="drop--strength">
                <option value="7">7mg</option>
                <option value="14">14mg</option>
                <option value="21">21mg</option>
              </select>
            </div>
            <p class="question-label" id="time--label">
            <i class="fas fa-hourglass-end"></i> Usage | Time</p>
            <div class="row calculator__container--row">
              <input class="col-xs-6 calculator__container--col" type="number" value="0" placeholder="Quantity" id="custom--time"/>

              <select name="patch-quantity" id="drop--time">
                <option value="7">Per Week</option>
                <option value="1">Per Day</option>
              </select>
            </div>

            <p class="question-label" id="price--label"><i class="fas fa-pound-sign"></i> Price per box?</p>
            <div class="row calculator__container--row" id="last-row">
              <input class="calculator__container--col" type="number" id="price--input"/>
              <p class="question-label" id="box-quantity--label"><i class="fas fa-box-tissue"></i> How many in a box?</p>
              <input type="number" id="box-quantity--input"/>
              <button class="btn btn-primary" id="calculate-btn">Calculate</button>
            </div>
          </div>
        </form>
      </div>
    `;
  }
}
/////////////////////////////////////////////////////
export default new CalculatorView();
