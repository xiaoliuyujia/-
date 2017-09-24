const main = document.getElementById('else');
main.innerHTML = `<p>If you see this, then main.js has loaded.</p>
<p>If the text is blue, then the style.css has loaded.</p>`;

function createButton () {
  var input = document.createElement("input");
  input.setAttribute("id", "search");

  var b1 = document.createElement("button");
  b1.setAttribute("id", "search");
  b1.innerHTML = "Search Activities";
  b1.addEventListener("click", get_and_send);

  var b2 = document.createElement("button");
  b2.setAttribute("id", "search");
  b2.innerHTML = "Search Events";
  b2.addEventListener("click", get_and_send);

  var div = document.createElement('div');
  div.setAttribute("id", "stuff");

  main.appendChild(input);
  main.appendChild(b1);
  main.appendChild(b2);
  main.appendChild(div);
}

createButton();

function get_and_send (input) {
  var value = document.getElementById('search').value;
  var search_obj = {search: value};
  console.log(search_obj);

  var xml = new XMLHttpRequest();
  xml.open("GET","/activities",true);
  xml.send();
  xml.onLoad = function (data) {
    var display = document.getElementById("stuff");
    display.innerHTML = "got";
  }
}
