let divArr = [];

//nodes reference
const container = document.querySelector("#grid-container");
const btnRainbow = document.querySelector("#rainbow");
const btnBlack = document.querySelector("#black");
const btnClear = document.querySelector("#clear");
const btnNew = document.querySelector("#new");

//auto trigger the rainbow button
window.onload = function(){
    document.getElementById("rainbow").click();
}
//create the first grid
let divsQuantity = createGrid(16);

//event listeners for the buttons
btnNew.addEventListener("click", () => {
    let newSize = prompt("Enter the new size of the grid (max 100)!");

    removeGrid(divsQuantity);
    divsQuantity = createGrid(newSize);

    document.getElementById("rainbow").click();
});

btnRainbow.addEventListener("click", () => {

    //apply an addEventListener that triggers a color to every item of the array
    divArr.forEach( (div) => div.addEventListener("mouseover", () => {
        
        let randomColor1 = Math.floor(Math.random()* 255);
        let randomColor2 = Math.floor(Math.random()* 255);
        let randomColor3 = Math.floor(Math.random()* 255);

        div.style.backgroundColor = `RGB(${randomColor1}, ${randomColor2},${randomColor3} )`;
    }))
});

btnBlack.addEventListener("click", () => {

    divArr.forEach( (div) => div.addEventListener("mouseover", () => {

        div.style.backgroundColor = "black";
    }))
});

btnClear.addEventListener("click", () => divArr.forEach( (div) => div.style.backgroundColor = "white"))



function createGrid(size)
{
    let i;
    for(i = 0; i < size*size; i++)
    {
        const gridElement = document.createElement("div");

        gridElement.style.width = `${360/size}px`;
        gridElement.style.height = `${460/size}px`;
        gridElement.classList.add("grid-element");
        container.appendChild(gridElement);

        //store the node reference to the array
        divArr[i] = gridElement;
    }

    return i;
}

function removeGrid(quantity)
{
    for(let i = 0; i < quantity; i++)
        container.removeChild(divArr[i]);   //no need to pop items from the array as they will be overwritten later on
}