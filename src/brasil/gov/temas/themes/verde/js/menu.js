jQuery(document).ready(function ($) {

    // simulando click no botao do portlet header via mobile
    // author: deserto digital
    $('.portletNavigationTree .portletHeader').click(function () {
        $(this).toggleClass('ativo');
        $(this).next().slideToggle();
    });

    var menuTrigger = $(".menuTrigger");
    var navigationEl = $("#navigation");

    menuTrigger.click(function (e) {
        e.preventDefault();
        navigationEl.toggleClass("ativo");
    });

    var sectionTrigger = $(".mobile .portletNavigationTree dt a");
    sectionTrigger.append("<span></span>");


    sectionTrigger.click(function (e) {
        e.preventDefault();
        $(this).parent().parent().toggleClass("ativo");
    });
    $("ul li:last-child").addClass("last-item");

    var responsiveResize, root;

    root = typeof exports !== "undefined" && exports !== null ? exports : this;

    root.ResponsiveResize = function () {
        var _Singleton, _base;
        _Singleton = (function () {
            function _Singleton() {}

            _Singleton.prototype.perspectiva_anterior = '';
            _Singleton.prototype.scrollbar = false;

            _Singleton.prototype.resize = function () {
                var perspectiva_atual;

                if ($(window).width() <= 480) {
                    perspectiva_atual = 'mobile';
                } else {
                    perspectiva_atual = 'desktop';
                }

                if (this.perspectiva_anterior !== perspectiva_atual) {
                    this.perspectiva_anterior = perspectiva_atual;

                    if (perspectiva_atual === 'mobile') {
                        $("body").addClass("mobile");
                    } else { // Desktop
                        $("body").removeClass("mobile");
                    }
                }
            };

            return _Singleton;
        })();


        if ((_base = root.ResponsiveResize).instance == null) {
            _base.instance = new _Singleton();
        }
        return root.ResponsiveResize.instance;
    };

    var resize = function () {
        responsiveResize = new root.ResponsiveResize();
        responsiveResize.resize();
    }

    $(window).resize(function () {
        resize();
    });

    resize();

    $('.newsImageContainer .photo-icon').on('click', function(e) {
        e.preventDefault();
        //$(this).parent().find('.carrossel-images').slideToggle();
        $('#parent-fieldname-image').trigger('click');
    });




    // Ajuste no topo do portlet de últimas notícias do NITF
    if ( $('body[class*="nitf"]').length > 0 ) {
        if ($('.portlet-collection-ultimas-noticias')[0] !== undefined) {
            var ultimasNoticiasResize, root;

            root = typeof exports !== "undefined" && exports !== null ? exports : this;

            root.UltimasNoticiasResize = function () {
                var _Singleton, _base;
                _Singleton = (function () {
                    function _Singleton() {}

                    _Singleton.prototype.tamanho_anterior = '';
                    _Singleton.prototype.scrollbar = false;

                    _Singleton.prototype.resize = function () {
                        var tamanho_atual;

                        tamanho_atual = 'mobile';
                        if (($(window).width() > 480)  &&
                            ($(window).width() < 768)) {
                            tamanho_atual = 'tablet';
                        }
                        else if (($(window).width() > 768)  &&
                                 ($(window).width() < 960)) {
                            tamanho_atual = 'desktop';
                        }
                        else if ($(window).width() > 960) {
                            tamanho_atual = 'desktop-wide';
                        }

                        if (this.tamanho_anterior !== tamanho_atual) {
                            this.tamanho_anterior = tamanho_atual;
                            if ((tamanho_atual === 'desktop')       ||
                                (tamanho_atual === 'desktop-wide')) {
                                var topNoticias = $('.documentFirstHeading').offset().top                +
                                                  $('.documentFirstHeading').height()                    -
                                                  $('.portlet-collection-ultimas-noticias').offset().top +
                                                  14;
                                if (Math.round(topNoticias) !== 0) {
                                    $('.portlet-collection-ultimas-noticias').css('margin-top', topNoticias);
                                }
                            }
                            else
                            {
                                $('.portlet-collection-ultimas-noticias').css('margin-top', 0);
                            }
                        }
                    };

                    return _Singleton;
                })();

                if ((_base = root.UltimasNoticiasResize).instance == null) {
                    _base.instance = new _Singleton();
                }
                return root.UltimasNoticiasResize.instance;
            };

            var resize = function () {
                ultimasNoticiasResize = new root.UltimasNoticiasResize();
                ultimasNoticiasResize.resize();
            }

            $(window).resize(function () {
                resize();
            });

            resize();

        }
    }
});

$('#link-buscar').click(function (e) {
    e.preventDefault();
    window.location.hash = '#portal-searchbox';
    $('.searchField').focus();
});

$("#portal-column-one div:first-child").addClass("first-item");

if($('.link-externo').length > 0){
    $('.link-externo .collection-item:even').addClass ('even');
    $('.link-externo .collection-item:odd').addClass ('odd');
}

