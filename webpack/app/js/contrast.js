import 'jquery.cookie';

// Adciona alto contras a página e inverte os ícones para sua versão de alto contraste
jQuery(function($) {
  $('.link-contraste').click(
    function(e) {
      console.log($.cookie('contraste'));
      if($.cookie('contraste') === null) {
        $.cookie('contraste', 'on');

        $('body').addClass('contraste');

        e.preventDefault();
        return false;
      }else {
        if($.cookie('contraste') == 'on'){
          $.cookie('contraste', 'off');

          $('body').removeClass('contraste');

          e.preventDefault();
          return false;
        }else{
          $.cookie('contraste', 'on');

          $('body').addClass('contraste');

          e.preventDefault();
          return false;
        }
      }
  });

  if($.cookie('contraste') == 'on') {

    $('body').addClass('contraste').addClass('inverter');

    return false;
  }
});