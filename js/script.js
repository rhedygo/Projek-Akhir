// JavaScript Document
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('.navbar').css('background', 'black');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});
$(document).ready(function() {
    $('#autoWidth1').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth1').removeClass('cS-hidden');
        } 
    });  
  });

 $(document).ready(function() {
    $('#autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth2').removeClass('cS-hidden');
        } 
    });  
  });

 $(document).ready(function() {
    $('#autoWidth3').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth3').removeClass('cS-hidden');
        } 
    });  
  });
