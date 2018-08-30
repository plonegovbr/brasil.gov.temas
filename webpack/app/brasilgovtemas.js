import ContentCentral from './js/contentcentral.js';
import Contraste from './js/contrast.js';
import GaleriaDeFotos from './js/albuns.js';
import ResultsFilter from './js/resultsfilter.js';
import TileShare from './js/tileshare.js';


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
  $('.tile-faq dt').on('click', function () {
    $(this).next("dd").slideToggle();
    $(this).toggleClass("aberto");
  });
  if ($('.template-galeria_de_fotos').length > 0) {
    new GaleriaDeFotos();
  }
  if ($('.template-centrais-de-conteudo').length > 0) {
    new ContentCentral();
  }
  if ($('.template-filtro-de-resultados').length > 0) {
    new ResultsFilter();
  }
  if ($('.section-pagina-inicial').length > 0) {
    for (let tile of $('.cover-richtext-tile')) {
      if ($(tile).parent().hasClass('tile-default')) {
        continue;
      }
      new TileShare(tile);
    }
    for (let tile of $('.nitf-basic-tile')) {
      new TileShare(tile);
    }
  }
});

