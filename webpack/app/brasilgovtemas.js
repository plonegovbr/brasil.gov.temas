import Contraste from './js/contrast.js';
import GaleriaDeFotos from './js/albuns.js';


$(document).ready(function(){
    $(".ico-navegacao").click(function(){
        $(".navigation-wrapper").toggleClass("ativo");
    });
    $(".ico-busca").click(function(){
        $("#main-header").toggleClass("busca-ativa");
        $("#portal-searchbox").toggleClass("ativo");
    });
    
    $('.tile-faq dt').on('click', function () {
        $(this).next("dd").slideToggle();
        $(this).toggleClass("aberto");
    });
    if ($('.template-galeria_de_fotos').length > 0) {
        new GaleriaDeFotos();
    }

    if($.cookie('contraste') !== undefined) {
        $('body').addClass('contraste');
    }
});

