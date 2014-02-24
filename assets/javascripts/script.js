// var call = document.getElementById("actionCall");

// console.log("This is an element of type ", call.nodeType);
// console.log("The inner html is ", call.innerHTML );
// console.log("child nodes: ", call.childNodes.length);

// var myLinks = document.getElementsByTagName("a");
// console.log	("Links: ", myLinks.length);

// var mainContent = document.getElementById("mainContent");
// mainContent.setAttribute("align","right");

// var inner = document.getElementById("tagLine");
// console.log(inner.innerHTML);

// var sidebar = document.getElementById("secondaryContent");
// console.log(sidebar.innerHTML);

var head = document.createElement("h1");
var para = document.createElement("p");

var h1Txt = document.createTextNode("COOOL Stuff");
var pTxt = document.createTextNode("this si he coolest thing ever.this si he coolest");

head.appendChild(h1Txt);
para.appendChild(pTxt);

document.getElementById("facts").appendChild(head);
document.getElementById("facts").appendChild(para);
