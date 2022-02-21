body = document.querySelector('body');

const pRedText = document.createElement("p");
pRedText.setAttribute("class", "red-text");
pRedText.style.color = "red";
pRedText.textContent = "Hey I'm red";
body.appendChild(pRedText);

const h3Blue = document.createElement("h3");
h3Blue.setAttribute("class", "blue-text");
h3Blue.style.color = "blue";
h3Blue.textContent = "I'm a blue h3!";
body.appendChild(h3Blue);

const divBlackBorder = document.createElement("div");
divBlackBorder.setAttribute("class", "black-border");
divBlackBorder.style.cssText = "border-style: solid; border-color: black; border-width: 5px; background-color: pink;";

const h1 = document.createElement("h1");
const pSecond = document.createElement("p");
h1.textContent = "I'm in a div";
pSecond.textContent = "ME TOO!";
divBlackBorder.appendChild(h1);
divBlackBorder.appendChild(pSecond);

body.appendChild(divBlackBorder);