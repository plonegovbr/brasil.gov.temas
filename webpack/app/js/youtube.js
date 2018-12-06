let instance = null;


export default class Youtube {
  constructor($container) {
    if (instance != null) {
      return instance;
    }
    instance = this;
    this.$container = $container;
    let $iframe = $('iframe', $container);
    this.urlVideo = $iframe.attr('src');
    $iframe.remove();
    this.percentToHide = 55;
    this.playerState = 'paused';
  }
  iframeIsReady() {
    if (this.urlVideo == null) {
      // Don't have url
      return;
    }
    if (this.urlVideo.indexOf('youtube') < 0) {
      // Not youtube video
      return;
    }
    this.$container.css('cursor', 'pointer');
    this.$container.append(
      `<div class="video-capa">
        <div id="player"></div>
       </div>`
    );
    this.height = 315;
    this.width = 560;
    this.videoId = this.extractId(this.urlVideo);
    this.bindEvents();
  }
  bindEvents() {
    var playerVars = {
      rel: 0,
      controls: 0,
      showinfo: 0,
      frameborder: 0,
      autoplay: 0,
      accelerometer: 1,
      gyroscope: 1,
    };
    this.player = new YT.Player('player', {
      height: this.height,
      width: this.width,
      videoId: this.videoId,
      playerVars: playerVars,
      events: {
        onStateChange: this.playerStateChange.bind(this)
      }
    });
    $('.play', this.$container).on('click', this.togglePlay.bind(this));
  }
  extractId(url) {
    let parser = document.createElement('a');
    parser.href = url;
    return parser.pathname.split('/')[2];
  }
  playerStateChange(e) {
    if (e.data === YT.PlayerState.PLAYING || e.data === YT.PlayerState.BUFFERING) {
      this.playerState = 'playing';
    } else {
      this.playerState = 'paused';
    }
  }
  togglePlay(e) {
    if (this.playerState === 'paused') {
      let $video = $('.video-capa');
      if (!$video.is(':visible')) {
        $video.show(500);
      }
      this.player.playVideo();
    } else if (this.playerState === 'playing') {
      this.player.pauseVideo();
    }
  }
}
