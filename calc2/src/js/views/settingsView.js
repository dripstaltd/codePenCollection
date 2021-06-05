import View from '../View.js';

/////////////////////////////////////////////////////
class SettingsView extends View {
  _parentElement = document.querySelector('.mainContainer');
  _errorMessage = 'Settings Page View Error';
  _message = '';
  _pageName = 'settings';

  _generateMarkup() {
    return `
      <div class="page">
      <h2 class="page__title">Settings Page</h2>
      <p class="page__description--short">
        User guide infomation
      </p>
    </div>
    `;
  }
}
/////////////////////////////////////////////////////
export default new SettingsView();
