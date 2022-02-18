body = document.querySelector('body');

const pRedText = document.createElement("p");
pRedText.setAttribute("class", "red-text");

pRedText.style.color = "red";

pRedText.textContent = "Hey I'm red";

body.appendChild(pRedText);


