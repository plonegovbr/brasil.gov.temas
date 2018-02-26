import 'jquery.cookie';

// Adciona alto contras a página e inverte os ícones para sua versão de alto contraste
jQuery(function($) {
  $('.link-contraste').click(
    function(e) {
      console.log($.cookie('contraste'));
      if($.cookie('contraste') === null) {
        $.cookie('contraste', 'on');

        $('body').addClass('contraste').addClass('inverter');
        $('#portal-breadcrumbs').addClass('inverter');
        $('.voltar-topo').addClass('inverter');
        $('.discreet').addClass('inverter');

        $('.portalredes-item').addClass('inverter');

        $('.documentFirstHeading').addClass('inverter');

        $('#logo-governo').removeClass('logo-governo').addClass('logo-governo-inverter');
        $('#logo-acesso').removeClass('logo-acesso').addClass('logo-acesso-inverter');

        e.preventDefault();
        return false;
      }else {
        if($.cookie('contraste') == 'on'){
          $.cookie('contraste', 'off');

          $('body').removeClass('contraste').removeClass('inverter');
          $('#portal-breadcrumbs').removeClass('inverter');
          $('.voltar-topo').removeClass('inverter');
          $('.discreet').removeClass('inverter');

          $('.portalredes-item').removeClass('inverter');

          $('.documentFirstHeading').removeClass('inverter');

          $('#logo-governo').removeClass('logo-governo-inverter').addClass('logo-governo');
          $('#logo-acesso').removeClass('logo-acesso-inverter').addClass('logo-acesso');

          e.preventDefault();
          return false;
        }else{
          $.cookie('contraste', 'on');

          $('body').addClass('contraste').addClass('inverter');
          $('#portal-breadcrumbs').addClass('inverter');
          $('.voltar-topo').addClass('inverter');
          $('.discreet').addClass('inverter');

          $('.documentFirstHeading').addClass('inverter');

          $('.portalredes-item').addClass('inverter');

          $('#logo-governo').addClass('logo-governo-inverter').removeClass('logo-governo');
          $('#logo-acesso').addClass('logo-acesso-inverter').removeClass('logo-acesso');

          e.preventDefault();
          return false;
        }
      }
  });

  if($.cookie('contraste') == 'on') {

    $('body').addClass('contraste').addClass('inverter');
    $('#portal-breadcrumbs').addClass('inverter');
    $('.voltar-topo').addClass('inverter');
    $('.discreet').addClass('inverter');

    $('.portalredes-item').addClass('inverter');

    $('.documentFirstHeading').addClass('inverter');

    $('#logo-governo').addClass('logo-governo-inverter').removeClass('logo-governo');
    $('#logo-acesso').addClass('logo-acesso-inverter').removeClass('logo-acesso');

    return false;
  }
});