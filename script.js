/* Header */
document.getElementById("header").innerHTML =
"<h1>Women in Engineering and Computer Science</h1>";

/* Navigation bar */
document.getElementById("nav").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='about.html'>About Us</a></li>" +
"<li><a href='outreach.html'>Outreach</a></li>" +
"<li><a href='speakers.html'>Speaker Series</a></li>" +
"<li><a href='events.html'>Events</a></li>" +
"<li><a href='revealed.html'>CSC Revealed</a></li>" +
"<li><a href='resources.html'>Resources</a></li>" +
"<li><a href='contact.html'>Contact Us</a></li>" +
"</ul>"; 

/* Footer */
document.getElementById("footer").innerHTML =
"<p>&copy;  WECS " + new Date().getFullYear() + "</p>";

/* Dynamic event height */
var div = $('#event');
var width = div.width();
div.css('height', width);