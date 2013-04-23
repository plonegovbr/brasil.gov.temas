jQuery(document).ready(function() {
    
jQuery(document).ready(function(jq) {

var buscalink = document.location.href + '/search'; 

jQuery("#searchbt a").attr({
          href:buscalink
        });

}); 
	 
jQuery('#searchbt a').prepOverlay({
                subtype: 'ajax',
                filter: '#content>*',
                });

/*TrataBanners

   var urlban = document.location.href;

   jQuery("#banner300x250").load(urlban + '/Banners .300x250');

   jQuery("#728x90").load(urlban + '/Banners .bannershead');		
*/


});
