import ContentCentral from './js/contentcentral.js';
import Contraste from './js/contrast.js';
import GaleriaDeFotos from './js/albuns.js';
import ResultsFilter from './js/resultsfilter.js';
import SocialLike from './js/sociallike.js';
import Youtube from './js/youtube.js';


$(() => {
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
  if ($('.template-galeria_de_fotos')[0] != null) {
    new GaleriaDeFotos();
  }
  if ($('.template-centrais-de-conteudo')[0] != null) {
    new ContentCentral();
  }
  if ($('.template-filtro-de-resultados')[0] != null) {
    new ResultsFilter();
  }
  if ($('#viewlet-social-like')[0] != null) {
    new SocialLike();
  }
});


export default {
  ContentCentral,
  Contraste,
  GaleriaDeFotos,
  ResultsFilter,
  SocialLike,
  Youtube,
}
