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

$(document).on("click", "#subcategory li a", function(ev){
  ev.preventDefault();
    ev.stopPropagation();
  $.ajax({
   url: $(this).attr('href'),
   cache: false,
   dataType: "html",
   success: function(data) {
       $("#research_area").html(data);
   }
  });
  return false;
})


