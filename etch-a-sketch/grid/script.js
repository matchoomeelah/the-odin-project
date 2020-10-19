const body = document.querySelector("body");
const gridDiv = document.getElementById("grid");


// Build initial grid

function buildGrid(size) {
    // Remove current divs in grid before adding new ones
    const currDivs = gridDiv.querySelectorAll("div");
    currDivs.forEach(d => {
        gridDiv.removeChild(d);
    });


    // Specify size of grid
    gridDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // Adding specifics for each grid square
    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("gridSquare");
        newDiv.classList.add("gray");
        newDiv.style.id = `${i}`;
        newDiv.addEventListener("mouseover", (e) => {
            e.target.classList.add("green");
            e.target.classList.remove("gray");
        });
    
        gridDiv.appendChild(newDiv);
    }
}

// Reset Button functionality
const resetButton =  document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
    /*const squares = gridDiv.querySelectorAll(".gridSquare");
    squares.forEach(square => {
        square.classList.remove("green");
        square.classList.add("gray");
    });*/
    const newSize = parseInt(prompt("How size grid do you want?"));
    if (!isNaN(newSize)) {
        buildGrid(newSize);
    }
});

// Change Size button functionality
const submitSizeButton = document.getElementById("submit-size-button");
const sizeInputBox = document.getElementById("grid-size-input");
submitSizeButton.addEventListener("click", () => {
    if (sizeInputBox.value)
    buildGrid(Number(sizeInputBox.value));
});

// Enable "enter" key to submit new size
sizeInputBox.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.keyCode === 13) {
        submitSizeButton.click();
        sizeInputBox.value = "";
    }
    
});


buildGrid(16);