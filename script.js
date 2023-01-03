const container = document.querySelector('.container');

const btn = document.querySelector('button');
let gridSize = 0;

btn.addEventListener('click', (event) => {
    //ask for grid
    gridSize = prompt("# (cannot be higher than 100):");

    //resetting grid if too high of a number
    if (gridSize > 100) {
        alert("Number too high!, setting back to default");
         gridSize = 16;
    }

    //creating grid
    gridSize *= gridSize;

    clearGrid();
    createGrid(gridSize);
})  

function clearGrid() {

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}


function createGrid(number = 256)
{
    for (let i = 0; i < number; i++)
    {
        const div = document.createElement('div');
        div.style.cssText =  "height: 25px; width: 25px; background-color: white; margin:2px";
        div.classList.add('grid');
        container.appendChild(div);

        div.addEventListener('mouseover', (event) => {
            event.target.style.cssText = " height: 25px; width: 25px; background-color: royalblue; margin:2px";
        })
        
    }
}

createGrid();




