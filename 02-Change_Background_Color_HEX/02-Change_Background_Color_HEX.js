let main = document.querySelector("#main");
let button = document.querySelector("#control");

//paragraph creation 
let para = document.createElement("p");
main.appendChild(para);
para.classList.add("paragraph");

//function and controls
function hexBgColor(e){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    para.textContent = main.style.backgroundColor = `#${randomColor}`;
}

button.addEventListener("click", hexBgColor);