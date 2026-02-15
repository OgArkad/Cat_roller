let cats = document.getElementById("cats")
let add = document.getElementById("add")
let substract = document.getElementById("substract")
let roll = document.getElementById("roll")

add.addEventListener("click", addFunc);
substract.addEventListener("click", substractFunc);
roll.addEventListener("click", rollFunc);

function addFunc(){
    const blank = document.createElement("div");
    const catWait = document.createElement("img")
    catWait.src = "icons/wait.png"

    catWait.classList.add("catWait")
    blank.appendChild(catWait)
    cats.appendChild(blank)
}
function substractFunc(){
    cats.removeChild(cats.firstChild)
}
function rollFunc(){
    const catImages = cats.querySelectorAll("img");
    console.log(catImages)

    catImages.forEach(img => {
        let randomN = Math.floor(Math.random() * 6) + 1;
        console.log(randomN);

        img.src = `icons/Cat${randomN}roll.svg`;
    });
}