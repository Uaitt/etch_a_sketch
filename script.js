const container = document.querySelector("#grid-container");

//create the 16x16 grid
for (let i = 0; i < 256; i++)
{
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("grid-element");
}