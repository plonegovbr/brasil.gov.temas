import 'jquery.cookie';

// Adciona alto contras a página e inverte os ícones para sua versão de alto contraste
jQuery(function($) {
  $('.link-contraste').click(
    function(e){
      if($('body').hasClass('contraste')) {
        $('body').removeClass('contraste');
        $.removeCookie('contraste');
      } else {
        $('body').addClass('contraste');
        $.cookie('contraste', 'on');
      }

      e.preventDefault();
      return false;
    });
});