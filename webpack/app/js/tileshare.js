import ClipboardJS from 'clipboard';


export default class SocialLike {
  constructor(tile) {
    this.$tile = $(tile);
    for (let link of this.$('a')) {
      if (link.host !== location.host) {
        continue;
      }
      if (this.$('.share').lenght > 0) {
        continue;
      }
      this.$tile.append(this.template(link.href, link.innerText.trim()));
    }
    new ClipboardJS('.share-link a', {
      text: function(trigger) {
        return trigger.getAttribute('href');
      }
    });
    this.$('.share-link').on('click', this.linkClick.bind(this));
    this.$('.share-more').on('click', this.moreClick.bind(this));
  }
  $(selector) {
    return $(selector, this.$tile);
  }
  fb(url) {
    let appId = $('meta[property="fb:app_id"]').attr('content');
    if (typeof(appId) === 'undefined') {
      return '';
    }
    let params = {
      app_id: appId,
      display: 'popup',
      href: url,
      redirect_uri: location.href
    };
    let html = `<li class="share-item share-fb share-pinned">
      <a class="slPrivacy"
         title="Share on Facebook (open in new window)"
         href="https://www.facebook.com/dialog/share?${$.param(params)}"
         onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
         Facebook
      </a>
    </li>`;
    return html;
  }
  twitter(url, title) {
    let params = {
      text: title,
      url: url
    };
    let html = `<li class="share-item share-twitter share-pinned">
      <a class="slPrivacy"
          title="Tweet (opens in new window)"
          href="https://twitter.com/intent/tweet?${$.param(params)}"
          onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
          Twitter
      </a>
    </li>`;
    return html;
  }
  linkedin(url, title) {
    let params = {
      mini: 'true',
      url: url,
      title: title,
    };
    let html = `<li class="share-item share-linkedin">
      <a class="slPrivacy"
         title="Share on Linkedin (open in new window)"
         href="https://www.linkedin.com/shareArticle?${$.param(params)}"
         onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
        Linkedin
      </a>
    </li>`;
    return html;
  }
  gplus(url) {
    let language = $('meta[property="og:locale"]').attr('content');
    if (typeof(language) === 'undefined') {
      return '';
    }
    let params = {
      url: url,
      hl: language.replace('_', '-')
    };
    let html = `<li class="share-item share-gplus">
      <a class="slPrivacy"
         title="Share on Google+ (open in new window)"
         href="https://plus.google.com/share?${$.param(params)}"
         onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
         Google Plus
      </a>
    </li>`;
    return html;
  }
  template(url, title) {
    let $ul = $('<ul class="share">');
    $ul.append(this.fb(url));
    $ul.append(this.twitter(url, title));
    $ul.append(this.linkedin(url, title));
    $ul.append(this.gplus(url));
    $ul.append(`
      <li class="share-item share-link">
        <a href="${url}">Link</a>
      </li>
      <li class="share-more share-pinned">
        <a href="#">...</a>
      </li>
    `);
    return $ul;
  }
  linkClick(e) {
    e.preventDefault();
  }
  moreToggle($el) {
    if ($el.hasClass('share-open')) {
      $el.removeClass('share-open');
      this.$('.share-more').removeClass('share-open');
      this.$('.share-more > a').html('...');
    } else {
      $el.addClass('share-open');
      this.$('.share-more').addClass('share-open');
      this.$('.share-more > a').html('x');
    }
  }
  moreClick(e) {
    e.preventDefault();
    this.moreToggle(this.$('.share-item:not(.share-pinned)'));
  }
}

