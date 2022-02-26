const btn = document.querySelector('#btn');

//btn.addEventListener('click', () => {
//    alert("This button works!")
//});


// A more fun option than the upper commented out one.
btn.addEventListener('click', function (e) {
    e.target.style.background = "blue" ;
});


// Taking the multiple button container here!
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});