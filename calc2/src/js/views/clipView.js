import View from '../View.js';

/////////////////////////////////////////////////////
class ClipboardView extends View {
  _parentElement = document.querySelector('.mainContainer');
  _errorMessage = 'Clipboard Page View Error';
  _message = '';
  _pageName = 'clipboard';

  _generateMarkup() {
    return `
      <div class="page">
      <h2 class="page__title">Clipboard Page</h2>
      <p class="page__description--short">
        User guide infomation
      </p>
    </div>
    `;
  }
}
/////////////////////////////////////////////////////
export default new ClipboardView();
