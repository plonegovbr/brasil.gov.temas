$(document).ready(function(){
    $(".ico-navegacao").click(function(){
        $("#main-navigation").toggleClass("ativo");
    });
    $(".ico-busca").click(function(){
        $("#portal-searchbox").toggleClass("ativo");
    });
});