var usrname = document.getElementById("name").value;
var passwd = document.getElementById("password").value;

var xml = new XMLHttpRequest();
  xml.open("GET","/activities",true);
  xml.send();
  xml.onLoad = function (data) {
    var display = document.getElementById("stuff");
    display.innerHTML = "got";
  }

//for tesing user inputs
//document.getElementById("login_button").onclick = function() {console.log(document.getElementById("name").value, document.getElementById("password").value)};
