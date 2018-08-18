export default class ResultsFilter {
  constructor() {
    $('#search-filter-toggle').on('click', this.toggleFilter.bind(this));
    // No search parameters -- start closed
    if (location.search === '') {
      sessionStorage.resultsFilterOpen = false;
    }
    // The filter box is open between searches
    if (sessionStorage.resultsFilterOpen === 'true') {
      this.toggleFilter();
    }
  }
  toggleFilter(e) {
    if (typeof e !== 'undefined') {
      e.preventDefault();
      sessionStorage.resultsFilterOpen = (sessionStorage.resultsFilterOpen === 'false');
    }
    $('#search-filter-toggle').toggleClass('closed');
    $('#search-results-bar dd.actionMenuContent').toggleClass('closed');
  }
}
