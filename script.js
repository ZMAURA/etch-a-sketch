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

    clearGrid();
    createGrid(gridSize);
})  

function clearGrid() {

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
}


function createGrid(number = 32)
{
    //row
    for (let i = 0; i < number; i++)
    {
        //created div with class grid
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);

        
        div.addEventListener('mouseover', (event) => {
            //console.log(event.target.classList.value);
            if(event.target.classList.value == "grid") { return;}
            else event.target.style.cssText = " height: 10px; width: 10px; background-color: royalblue; margin:1px;";
        })
        

    }
    //column
    for(let i = 0; i < number; i++){
    const gridAll = document.querySelectorAll('.grid');
        gridAll.forEach((node) => {

        const divInsideGrid = document.createElement('div');
        divInsideGrid.classList.add('grid-style');

        node.appendChild(divInsideGrid);
    }
    )};

        
}
createGrid();
