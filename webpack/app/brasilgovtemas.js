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
    $(".documentFirstHeading").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">O Portal Planalto Mudou</h3><br>' +
        'A plataforma evoluiu para facilitar o acesso dos brasileiros a informações sobre a atuação' +
        'do Presidente da República e do Executivo Federal. É o Governo do Brasil mais moderno e' +
        'transparente.'
    ).attr(
        'data-hintPosition', 'bottom-middle'
    );
    $("#portal-searchbox").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Busca Integrada</h3><br>' +
        'Encontre informações e serviços de forma fácil e rápida'
    ).attr(
        'data-step', 2
    );
    $(".ico-navegacao").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Nova Estrutura de Menu</h3><br>' +
        'Clique para abrir o menu e encontrar os conteúdos do seu interesse'
    ).attr(
        'data-step', 3
    );
    $(".header-accessibility").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Mais Ferramentas de Acessibilidade</h3><br>' +
        'Contraste preto e branco, assim como tradutor de conteúdo para Língua Brasileira de Sinais(Libras),' +
        ' estão disponíveis para pessoas com deficiência.'
    ).attr(
        'data-step', 4
    );
    $(".coluna-redes").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Ficou mais fácil compartilhar</h3><br>' +
        'Clique no botão da rede social que vc usa para publicar os conteúdos no seu perfil.'
    ).attr(
        'data-step', 5
    );
    // $(".documentFirstHeading").attr('data-intro', 'comece aqui a sua leitura super empolgante!').attr('data-step', 6);

    introJs().start();

    // remover alguns botões do introjs
    $('.introjs-button.introjs-skipbutton').remove();
});