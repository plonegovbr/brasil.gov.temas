import Contraste from './js/contrast.js';
import introJs from './js/intro.js-master/intro.js';

$(document).ready(function(){
    $(".ico-navegacao").click(function(){
        $(".navigation-wrapper").toggleClass("ativo");
    });
    $(".ico-busca").click(function(){
        $("#main-header").toggleClass("busca-ativa");
        $("#portal-searchbox").toggleClass("ativo");
    });

    // TODO: criar um arquivo separado para
    // Tour pelo site
    $(".ico-navegacao").attr('data-intro', 'use o novo ícone de navegação em hamburguer para saciar sua fome de informações!').attr('data-step', 1);
    $("#portal-searchbox").attr('data-intro', 'com a nova barra de busca vc pode buscar tudo o que precisa par a asua vida!').attr('data-step', 2);
    $(".logo-governo").attr('data-intro', 'essa logo está com as cores zuadas, olhe bem e verás!').attr('data-step', 3);
    $(".logo-acesso").attr('data-intro', 'essa tbem está, assim como a outra e ainda zoa a cor do footer!!!').attr('data-step', 4);
    $(".documentFirstHeading").attr('data-intro', 'comece aqui a sua leitura super empolgante!').attr('data-step', 5);

    introJs().start();

    // remover alguns botões do introjs
    $('.introjs-button.introjs-skipbutton').remove();
});