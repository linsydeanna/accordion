$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

      $(this).next().slideToggle('500ms');

      $(".accordion-content").not($(this).next()).slideUp('500ms');

    });
  });
