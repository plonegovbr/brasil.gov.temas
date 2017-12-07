$(document).ready(function(){
    $(".ico-navegacao").click(function(){
        $(".navigation-wrapper").toggleClass("show");
    });
    $(".ico-busca").click(function(){
        $("#portal-searchbox").toggleClass("show");
    });
});