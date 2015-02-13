$(function() {$("#content").load("frontpage.html");});

/**
 * Instead of changing the actual page, the website loads subpages into the index page.
 */
$(document).on("click", "#menulist li a", function(ev){
  var pagename = $(this).attr('href');
  var formattedpagename = pagename.substring(0, pagename.lastIndexOf("."));

  // This fakes out the page name, but this doesn't help in retrieving pages
  // window.history.pushState('page2', 'Title', formattedpagename);

  window.location.hash = formattedpagename;

  ev.preventDefault();
  ev.stopPropagation();
  changePage(pagename, "#content");

  return false;
})

$(document).on("click", "#subcategory li a", function(ev){

  ev.preventDefault();
  ev.stopPropagation();
  changePage(pagename, "#research_area");

  return false;
})

window.onload = function () {
  var pagename = window.location.hash;
  if(pagename.length > 0) {
    pagename = pagename.substring(1) + ".html";
    console.log(pagename);
  }
  changePage(pagename, "#contents")
}

function changePage(pagename, area) {
  $.ajax({
    url: pagename,
    cache: false,
    dataType: "html",
    success: function(data) {
      $("#content").html(data);
    }
  });
}