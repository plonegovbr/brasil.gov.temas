jQuery(document).ready(function($){
  if($(window).width() <= 480) {
    $("body").addClass("mobile");
  }

  var menuTrigger = $(".menuTrigger");
  var navigationEl = $("#navigation");

  menuTrigger.click(function(e){
    e.preventDefault();
    navigationEl.toggleClass("ativo");
  });

  var sectionTrigger = $(".mobile .portletNavigationTree dt a");
  sectionTrigger.append("<span></span>");


  sectionTrigger.click(function(e){
    e.preventDefault();
    $(this).parent().parent().toggleClass("ativo");
  });
$("ul li:last-child").addClass("last-item");
});
$('#link-buscar').click(function(e) {
    e.preventDefault();
    window.location.hash = '#portal-searchbox';
    $('.searchField').focus();
});
$("#portal-column-one div:first-child").addClass("first-item");
