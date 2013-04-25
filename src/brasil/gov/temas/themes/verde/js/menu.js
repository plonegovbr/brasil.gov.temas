jQuery(document).ready(function($){
  var menuTrigger = $("<span class='menuTrigger'>MENU</span>");
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $("body").addClass("mobile");
    $("#portal-column-one").prepend(menuTrigger);
  }

  menuTrigger.click(function(){
    $(this).parent().toggleClass("ativo");
  });

  var sectionTrigger = $(".mobile .portletNavigationTree dt a");
  sectionTrigger.append("<span></span>");


  sectionTrigger.click(function(e){
    e.preventDefault();
    $(this).parent().parent().toggleClass("ativo");
  });

});