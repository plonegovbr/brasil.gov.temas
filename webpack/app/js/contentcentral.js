export default class ContentCentral {
  constructor() {
    $('#filter-toggle').on('click', this.toggleFilter.bind(this));
    // No search parameters -- start closed
    if (location.search === '') {
      sessionStorage.contentCentralOpen = false;
    }
    // The filter box is open between searches
    if (sessionStorage.contentCentralOpen === 'true') {
      this.toggleFilter();
    }
  }
  toggleFilter(e) {
    if (typeof e !== 'undefined') {
      e.preventDefault();
      sessionStorage.contentCentralOpen = (sessionStorage.contentCentralOpen === 'false');
    }
    $('#filter-toggle').toggleClass('closed');
    $('#results-bar dd.actionMenuContent').toggleClass('closed');
  }
}
