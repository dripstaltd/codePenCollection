class SearchView {
  _parentEl = document.querySelector('.search-container');

  getQuery() {
    const query = this._parentEl.querySelector('.search-input').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search-input').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
