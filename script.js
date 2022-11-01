window.addEventListener("load", function () {
  // code here when the page is loaded using javascript
});

$(document).ready(function () {
  // code here when the page is loaded using jquery
});

//selector in js
document.getElementById("idname");
document.getElementsByClassName("classname");
document.getElementsByTagName("p");

// selector jquery
$(".classname");
$("p");
$("#idname");

// click handler js
var button = document.getElementById("idname");
button.addEventListener("click", function () {
  // code here
});

// jquery
$("#idname").click(function () {
  //code here
});

//js css
document.getElementsByTagName("p").style.display = "none";
document.getElementsByTagName("p").style.background = "white";

// jquery css
$("p").css({ "background-color": "white", display: "none" });

// hide in jquery
$(".classname").hide();

// img in jquery
$("img").attr("src", "img2.png");
$("img").attr("width", "100");

$(".classname").height(50);

$(".classname").text("wassim's car");
$(".classname").text("wassim's car");
