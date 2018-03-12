import introJs from './js/intro.js-master/intro.js';

window.webTour = function webTour() {
    $('body').append(
        '<button id="intro-myBtn">Open Modal</button>' +
        '<div id="intro-myModal" class="intro-modal">' +
            '<div class="intro-modal-content">' +
                '<span class="intro-close">&times;</span>' +
                '<h1 style="color: blue; margin-top: 100px; margin-bottom: 50px">O site do governo do Brasil mudou</h1>' +
                '<br>' +
                '<p>A plataforma evoluiu para facilitar o acesso dos brasileiros a informações sobre a atuação' +
                'do Presidente da República e do Executivo Federal. É o Governo do Brasil mais moderno e' +
                'transparente.</p>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<button id="init-tour" href="#">INICIAR PASSO A PASSO</button>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<a id="close-tour" href="#">Pular passo a passo</a>' +
            '</div>' +
        '</div>'
    );

    // Get the modal
    var modal = document.getElementById('intro-myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("intro-myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("intro-close")[0];

    // When the user clicks on the button, open the modal
    //btn.onclick = function() {
    //};

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // TODO: criar um arquivo separado para
    // Configurações de texto e elemento para realizar o Tour pelo site
    $("#portal-searchbox").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Busca Integrada</h3><br>' +
        'Encontre informações e serviços de forma fácil e rápida'
    ).attr(
        'data-step', 1
    );
    $(".ico-navegacao").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Nova Estrutura de Menu</h3><br>' +
        'Clique para abrir o menu e encontrar os conteúdos do seu interesse'
    ).attr(
        'data-step', 2
    );
    // TODO: ajustar ao elemento certo
    $(".header-accessibility").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Mais Ferramentas de Acessibilidade</h3><br>' +
        'Contraste preto e branco, assim como tradutor de conteúdo para Língua Brasileira de Sinais(Libras),' +
        ' estão disponíveis para pessoas com deficiência.'
    ).attr(
        'data-step', 3
    );
    $(".daypicker-wrapper").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Agenda do Presidente da República</h3><br>' +
        'Fique por dentro dos compromissos oficiais do Presidente da República. Agora está' +
        'mais fácil navegar e encontrar as agendas por dias e meses do ano'
    ).attr(
        'data-step', 4
    );
    $('.tile.foto-sobreposta-grande').parent().parent().attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Conheça o programa de governo do Brasil</h3><br>' +
        'Acompanhe as metas da gestão do Presidente Michel Temer e saiba o que já foi feito.'
    ).attr(
        'data-step', 5
    );
    $(".coluna-redes").attr(
        'data-intro',
        '<h3 style="color: blue; text-allign: center">Ficou mais fácil compartilhar</h3><br>' +
        'Clique no botão da rede social que você usa para publicar os conteúdos no seu perfil.'
    ).attr(
        'data-step', 6
    );


    // inicia o tour
    if($.cookie('tour') === undefined) {
        modal.style.display = "block";
    };

    $('#init-tour').mouseover(function() {
        $('#init-tour').addClass('alternative')
    });

    $('#init-tour').mouseout(function() {
        $('#init-tour').removeClass('alternative')
    });

    $('#init-tour').click(function() {
        modal.style.display = "none";

        introJs().start();

        $('.introjs-nextbutton').attr('href', '#').removeClass('introjs-nextbutton').removeClass('introjs-button');
        $('.introjs-prevbutton').remove();
        $('.introjs-skipbutton').remove();
    });

    $('#close-tour').click(function () {
        modal.style.display = "none";

        $.cookie('tour', 'done');
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
}