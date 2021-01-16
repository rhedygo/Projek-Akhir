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

//   $("html, body").animate({ 
//       scrollTop: $('#movies').offset().top 
//     }, 1000);

$(function() {
    AOS.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
    });
});