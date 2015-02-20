$(function() {$("#content").load("frontpage.html");});

/**
 * Instead of changing the actual page, the website loads subpages into the index page.
 */
$(document).on("click", "a.navbar-brand", interceptPageChange);
$(document).on("click", "#menulist li a", interceptPageChange);

$(document).on("click", "#subcategory li a", function(ev){

  ev.preventDefault();
  ev.stopPropagation();
  changePage(pagename, "#research_area");

  return false;
});

window.onload = function () {
  var pagename = window.location.hash;
  if(pagename.length > 0) {
    pagename = pagename.substring(1) + ".html";
  }
  changePage(pagename, "#contents")
}

// $(window).on('hashchange', function(event) {
//   // console.log("IFRAME HASH CHANGED");
//   // console.log(event);

//   pagename = window.location.hash;
//   if(pagename == "")
//     pagename = "frontpage.html";
//   else
//     pagename = pagename + ".html";
//   changePage(pagename, "#content");
// });


function interceptPageChange(event) {
  var pagename = $(this).attr('href');
  var formattedpagename = pagename.substring(0, pagename.lastIndexOf("."));
  if(formattedpagename == "frontpage") formattedpagename = "";
  // console.log(pagename);

  // This fakes out the page name, but this doesn't help in retrieving pages
  // window.history.pushState('page2', 'Title', formattedpagename);

  window.location.hash = formattedpagename;

  event.preventDefault();
  event.stopPropagation();
  changePage(pagename, "#content");

  return false;
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
