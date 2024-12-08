


const sketchBox = document.querySelector('.sketch-box');
let isRandomOn = false;

createGrid(16);

function createGrid(squaresPerSide) {
    sketchBox.replaceChildren();

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(100% / ${squaresPerSide})`;
        square.style.height = `calc(100% / ${squaresPerSide})`;
        square.setAttribute('data-opacity', 0);
        sketchBox.appendChild(square);

        square.addEventListener('mouseenter', function() {
            let currentOpacity = parseFloat(square.getAttribute('data-opacity'));
            let color;

            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                square.setAttribute('data-opacity', currentOpacity);
            }

            if (isRandomOn) {
                color = generateRandomColor().replace('rgb', 'rgba').replace(')', `, ${currentOpacity})`); 
            } else {
                color = `rgba(0, 0, 0, ${currentOpacity})`;
            }
            
            square.style.backgroundColor = color
        });             
    }
}

const changeGridBtn = document.getElementById("change-grid-btn");

changeGridBtn.addEventListener('click', function() {
    let squaresPerSide =  parseInt(prompt("Enter the number of squares per side:"));
    if (squaresPerSide > 100) {
        alert("Maximum squares per side is 100.");
        squaresPerSide = 100;
    }
    else if (squaresPerSide < 1) {
        alert("Please enter a positive number.");
        return;
    }
    createGrid(squaresPerSide);
});

const randomButton = document.querySelector("#random-button");
randomButton.addEventListener("click", event => {
    isRandomOn = !isRandomOn;
    if (isRandomOn) {
        event.target.style.backgroundColor = "#464646";
        event.target.style.color = "#ffffff";
        event.target.style.fontWeight = "bold";
    } else {
        event.target.style.backgroundColor = "#ffffff";
        event.target.style.color = "#000000";
        event.target.style.fontWeight = "normal";
    }
});


function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);   
    const green = Math.floor(Math.random() * 256); 
    const blue = Math.floor(Math.random() * 256);  
    return `rgb(${red}, ${green}, ${blue})`;       
}
