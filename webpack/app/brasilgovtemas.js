import Contraste from './js/contraste.js';


$(document).ready(function(){
    $(".ico-navegacao").click(function(){
        $(".navigation-wrapper").toggleClass("ativo");
    });
    $(".ico-busca").click(function(){
        $("#portal-searchbox").toggleClass("ativo");
    });
});
