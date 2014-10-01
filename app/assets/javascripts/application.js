// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require slick
//= require foundation
//= require turbolinks
//= require_tree .
//= require owl.carousel


// $(function(){ 

//	$(document).foundation(); 

// });

$(document).ready(function() {

  $('.orange img').on('mouseenter', function() {
    $('.art').fadeIn("slow");
  });
    $('.orange img').on('mouseleave', function() {
    $('.art').fadeOut("fast");
  });
  $('.two-tone img').on('mouseenter', function() {
    $('.jamsession').fadeIn("slow");
  });
  $('.two-tone img').on('mouseleave', function() {
    $('.jamsession').fadeOut("fast");
  });

  $('.rings img').on('mouseenter', function() {
    $('.treefrog').fadeIn("slow");
  });
  $('.rings img').on('mouseleave', function() {
    $('.treefrog').fadeOut("fast");
  });

  $('.red img').on('mouseenter', function() {
    $('.chairs').fadeIn("slow");
  });
  $('.red img').on('mouseleave', function() {
    $('.chairs').fadeOut("fast");
  });

  $('.purple-spot img').on('mouseenter', function() {
    $('.archduke').fadeIn("slow");
  });
  $('.purple-spot img').on('mouseleave', function() {
    $('.archduke').fadeOut("fast");
  });

  $('.greeny img').on('mouseenter', function() {
    $('.pairs').fadeIn("slow");
  });
  $('.greeny img').on('mouseleave', function() {
    $('.pairs').fadeOut("fast");
  });

   $('.small-orange img').on('mouseenter', function() {
      $('.contact').fadeIn("slow");
  });
    $('.small-orange img').on('mouseleave', function() {
      $('.contact').fadeOut("fast");
  });

    $('.crater img').on('mouseenter', function() {
      $('.resume').fadeIn("slow");
  });
    $('.crater img').on('mouseleave', function() {
      $('.resume').fadeOut("fast");
  });



  $("#owl-demo").owlCarousel({

      autoPlay: 4000, //Set AutoPlay to 3 seconds
      lazyLoad : true,
      navigation:true,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

});

