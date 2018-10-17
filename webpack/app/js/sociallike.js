export default class SocialLike {
  constructor() {
    this.$el = $('#viewlet-social-like');
    this.$container = $('#content');
    this.scrolling = false;
    this.startPosition = this.$container.offset().top +
                         this.$el.height();
    if ($('.portaltype-collective-nitf-content')[0] != null) {
      // how much pixels used to adjust social like position
      this.startPosition += 245;
    } else if ($('.portaltype-document')[0] != null) {
      // difference between #container and #viewlet-social-like
      this.startPosition += 85;
      // how much pixels used to adjust social like position
      this.startPosition += 85;
    }
    this.bindEvents();
  }
  set isScrolling(scrolling) {
    if (this.scrolling !== scrolling) {
      this.$el.toggleClass('is-scrolling', scrolling);
      this.scrolling = scrolling;
    }
  }
  bindEvents() {
    this.$el.stop(true, true);
    $(document).on('scroll', this.onScroll.bind(this));
    this.onScroll();
  }
  onScroll() {
    let bottomElement = this.startPosition +
                        $(document).scrollTop();
    let bottomContainer = this.$container.offset().top +
                          this.$container.height();
    this.isScrolling = (bottomElement > bottomContainer);
  }
}
