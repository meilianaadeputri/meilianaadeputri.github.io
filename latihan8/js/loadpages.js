document.addEventListener("DOMContentLoaded", function() {
 var page = window.location.hash.substr(1);
 if (page == "") page = "home";
 loadPage(page);

 function loadPage(page) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4) {
       var content = document.querySelector("#body-content");
        }
      };
      xhttp.open("GET", "pages/" + page + ".html", true);
      xhttp.send();
    }
});
