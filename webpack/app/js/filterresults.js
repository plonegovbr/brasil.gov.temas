export default class FilterResults {
  constructor() {
    $('#search-filter-toggle').on('click', this.toggleFilter.bind(this));
    // No search parameters -- start closed
    if (location.search === '') {
      sessionStorage.filterResultsOpen = false;
    }
    // The filter box is open between searches
    if (sessionStorage.filterResultsOpen === 'true') {
      this.toggleFilter();
    }
  }
  toggleFilter(e) {
    if (typeof e !== 'undefined') {
      e.preventDefault();
      sessionStorage.filterResultsOpen = (sessionStorage.filterResultsOpen === 'false');
    }
    $('#search-filter-toggle').toggleClass('closed');
    $('#search-results-bar dd.actionMenuContent').toggleClass('closed');
  }
}
