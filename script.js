let divArr = [];    //array of divs
const container = document.querySelector("#grid-container");
let divsQuantity = createGrid(16);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
        let gridSize = prompt("Enter the size of the new grid: ");
        
        //remove the grid elements from the container
        removeGrid(divsQuantity);

        //create a new grid
        divsQuantity = createGrid(gridSize)
});

function createGrid(size){

    if(size > 100)
    {
        alert("size is too big! Choose one smaller!");
        return;
    }

    let i;
    for ( i = 0; i < size*size; i++)
    {
        const div = document.createElement("div");
        container.appendChild(div);

        div.style.width = `${560/size}px`
        div.style.height = `${560/size}px`

        //add an EventListener
        div.addEventListener("mouseover", () => div.style.backgroundColor = "black");

        //store every child in the array
        divArr[i] = div;
    }

    return i;
}

function removeGrid(divsQuantity)
{
    let i;

    for( i = 0; i < divsQuantity; i++)
        container.removeChild(divArr[i]);   
}