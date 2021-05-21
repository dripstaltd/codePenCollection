import View from '../views.js';

class PreviewView extends View {
  _parentElement = '';

  _renderRhyme(ArrObj) {
    this._data = ArrObj;
    _generateMarkup();
  }

  _generateMarkup() {
    //this._data
    return `
    <div class="flexbox-item results-item">${this._data.word}</div>
    `;
  }
}

/////////////////////////////////////////////////////
export default new PreviewView();
