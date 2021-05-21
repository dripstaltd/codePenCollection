import View from './../views.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results-container');
  _errorMessage = 'No Rhymes found for you query! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map((result) => previewView.renderRhyme(result)).join('');
  }
}

/////////////////////////////////////////////////////
export default new ResultsView();
