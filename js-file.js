const container = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);

    square.addEventListener('mouseenter', function() {
        square.classList.add('hovered');
    });
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

function createGrid(squaresPerSide) {
    container.replaceChildren();

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(100% / ${squaresPerSide})`;
        square.style.height = `calc(100% / ${squaresPerSide})`;
        container.appendChild(square);

        square.addEventListener('mouseenter', function() {
            square.classList.add('hovered');
        });
    }
}
