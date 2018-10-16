export default class SocialLike {
  constructor() {
    this.$el = $('#viewlet-social-like');
    this.$container = $('#main-content');
    this.bindEvents();
    this.scrolling = false;
    this.elementStartPosition = this.bottomOffset(this.$el);
    this.onScroll();
  }
  bindEvents() {
    this.$el.stop(true, true);
    $(document).on('scroll', this.onScroll.bind(this));
  }
  set isScrolling(scrolling) {
    if (this.scrolling != scrolling) {
      this.$el.toggleClass('is-scrolling', scrolling);
      this.scrolling = scrolling;
    }
  }
  onScroll() {
    let bottomElement = this.elementStartPosition + $(document).scrollTop();
    this.isScrolling = (bottomElement > this.bottomOffset(this.$container));
  }
  bottomOffset($el) {
    return $el.offset().top + $el.height();
  }
}
