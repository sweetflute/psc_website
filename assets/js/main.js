$(function() {$("#content").load("frontpage.html");});

$(document).on("click", "#menulist li a", function(ev){
	ev.preventDefault();
  	ev.stopPropagation();
  $.ajax({
   url: $(this).attr('href'),
   cache: false,
   dataType: "html",
   success: function(data) {
       $("#content").html(data);
   }
  });
  return false;
})

