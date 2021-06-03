export default class View {
  _parentElement = document.querySelector('.mainContainer');
  _curHash = location.hash;
  _markup = `
    <div class="page">
      <h2 class="page__title">Template Page</h2>
      <p class="page__description--short">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum fuga optio voluptatum in delectus consequatur maxime ipsum culpa officia.
      </p>
    </div>
`;

  renderView() {
    _parentElement.insertAdjacentHTML('beforeend', _markup);
  }
}

const markup = `
    <div class="page">
      <h2 class="page__title">Template Page</h2>
      <p class="page__description--short">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolorum fuga optio voluptatum in delectus consequatur maxime ipsum culpa officia.
      </p>
    </div>
`;

  export default renderView = function () {
    _parentElement = document.querySelector('.mainContainer');
    _parentElement.insertAdjacentHTML('beforeend', markup);
  }