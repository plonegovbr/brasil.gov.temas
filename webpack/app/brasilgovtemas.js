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

    // Configurações de texto e elemento para realizar o Tour pelo site
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
        'Clique no botão da rede social que você usa para publicar os conteúdos no seu perfil.'
    ).attr(
        'data-step', 5
    );

    // TODO: mudar esse elemento para o elemento do plano de governo quando o conteúdo estiver pronto!
    $("div#content").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Conheça o programa de governo do Brasil</h3><br>' +
        'Acompanhe as metas da gestão do Presidente Michel Temer e saiba o que já foi feito.'
    ).attr(
        'data-step', 6
    );

    // inicia o tour
    if($.cookie('tour') === undefined) {
        introJs().start();
    };

    // classe clicável para iniciar o TOUR manualmente
    $('.tour').click(function() {
        introJs().start();
    });

    // seta cookie quando se clica em pular e/ou se termina o tour
    $('.introjs-button.introjs-skipbutton').click(function() {
        $('.introjs-overlay').trigger('click');
        $.cookie('tour', 'done');
    });
    $('.introjs-button.introjs-skipbutton.introjs-donebutton').click(function() {
        $('.introjs-overlay').trigger('click');
        $.cookie('tour', 'done');
    });
});