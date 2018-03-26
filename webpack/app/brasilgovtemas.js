import Contraste from './js/contrast.js';


$(document).ready(function(){
    $(".ico-navegacao").click(function(){
        $(".navigation-wrapper").toggleClass("ativo");
    });
    $(".ico-busca").click(function(){
        $("#main-header").toggleClass("busca-ativa");
        $("#portal-searchbox").toggleClass("ativo");
    });
    $("#portal-searchbox .close").click(function(){
        $("#main-header").removeClass("busca-ativa");
        $("#portal-searchbox").removeClass("ativo");
    });
});
