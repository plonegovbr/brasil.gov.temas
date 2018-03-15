import 'jquery.cookie';

// Adciona alto contras a página e inverte os ícones para sua versão de alto contraste
jQuery(function($) {
  $('.link-contraste').click(
    function(e){
      if($.cookie('contraste') != 'on') {
        $.cookie('contraste', 'on');
        $('body').addClass('contraste');
      } else {
        $.cookie('contraste', 'off');
        $('body').removeClass('contraste');
      }
      e.preventDefault();
      return false;
    });
});