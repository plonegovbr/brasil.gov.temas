export default class SocialLike {
  constructor() {
    this.$el = $('#viewlet-social-like');
    this.$container = $('#main-content');
    this.scrolling = false;
    this.elementStartPosition = this.$container.offset().top + this.$el.height();
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
    let bottomElement = this.elementStartPosition + $(document).scrollTop();
    let bottomContainer = this.$container.offset().top + this.$container.height();
    this.isScrolling = (bottomElement > bottomContainer);
  }
}
