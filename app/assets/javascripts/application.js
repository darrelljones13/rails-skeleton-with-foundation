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
//= require foundation
//= require turbolinks
//= require_tree .

// $(function(){ 

//	$(document).foundation(); 

// });

$(document).ready(function() {
  $('.two-tone img').on('mouseenter', function() {
    $('.jamsession').fadeIn("slow");
  });
  $('.two-tone img').on('mouseleave', function() {
    $('.jamsession').fadeOut("slow");
  });

    $('.rings img').on('mouseenter', function() {
    $('.treefrog').fadeIn("slow");
  });
  $('.rings img').on('mouseleave', function() {
    $('.treefrog').fadeOut("slow");
  });

    $('.red img').on('mouseenter', function() {
    $('.chairs').fadeIn("slow");
  });
  $('.red img').on('mouseleave', function() {
    $('.chairs').fadeOut("slow");
  });

   $('.purple-spot img').on('mouseenter', function() {
    $('.archduke').fadeIn("slow");
  });
  $('.purple-spot img').on('mouseleave', function() {
    $('.archduke').fadeOut("slow");
  });

});
