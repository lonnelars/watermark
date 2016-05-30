var container = document.createElement("div");
var div = document.createElement("div");
var text = document.createTextNode("piggvar.kantega.lan");
div.appendChild(text);
div.setAttribute("class", "watermark");
container.appendChild(div);
container.setAttribute("class", "watermark-container");
document.body.appendChild(container);
