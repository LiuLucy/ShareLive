$(function()
{
    $('#sign_in_icon').hover(function()
    {
        $('#sign_in_icon').attr('src' , 'images/page1/web/sigin_in_hover.png');
    },
    function()
    {
        $('#sign_in_icon').attr('src', 'images/page1/web/sign_in.png');
    });



});

$(function(){
  $('.toggle-nav').click(function() {
  $('body').toggleClass('show-nav');
   return false;
  });
});

$(function(){
  $('#sign_up_hover').hover(function()
  {
      $('#sign_up_hover').attr('src' , 'images/page1/web/sign_up_hover.png');
  },
  function()
  {
      $('#sign_up_hover').attr('src' , 'images/page1/web/sign_up_now.png');
  });
});

// Toggle with hitting of ESC
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
   $('body').toggleClass('show-nav');
  }
});
