import Contraste from './js/contrast.js';


$(document).ready(function(){
    $(".ico-navegacao").click(function(){
        $(".navigation-wrapper").toggleClass("ativo");
    });
    $(".ico-busca").click(function(){
        $("#main-header").toggleClass("busca-ativa");
        $("#portal-searchbox").toggleClass("ativo");
    });

    if($.cookie('contraste') !== undefined) {
        $('body').addClass('contraste');
    }
});
