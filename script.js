const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;

let painting = false;
let currentTool = 'pencil';
let brushColor = '#000000';
let brushSize = 5;
let startX, startY; 
function startPosition(e) {
    painting = true;
    startX = e.clientX - canvas.offsetLeft;
    startY = e.clientY - canvas.offsetTop;
    draw(e);
}

function endPosition() {
    if (currentTool !== 'pencil') {
        drawShape(); 
    }
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting || currentTool === 'squareOutline' || currentTool === 'circleOutline' || currentTool === 'filledSquare' || currentTool === 'filledCircle') return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}


function drawShape() {
    const width = 100; 
    const height = 100; 
    
    ctx.fillStyle = brushColor;
    ctx.strokeStyle = brushColor;

    switch (currentTool) {
        case 'squareOutline':
            ctx.strokeRect(startX, startY, width, height);
            break;
        case 'circleOutline':
            ctx.beginPath();
            ctx.arc(startX + width / 2, startY + height / 2, width / 2, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 'filledSquare':
            ctx.fillRect(startX, startY, width, height);
            break;
        case 'filledCircle':
            ctx.beginPath();
            ctx.arc(startX + width / 2, startY + height / 2, width / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
        default:
            break;
    }
}


canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);


document.getElementById('color').addEventListener('input', (e) => {
    brushColor = e.target.value;
});

document.getElementById('brushSize').addEventListener('input', (e) => {
    brushSize = e.target.value;
});

document.getElementById('pencil').addEventListener('click', () => {
    currentTool = 'pencil';
});

document.getElementById('eraser').addEventListener('click', () => {
    currentTool = 'eraser';
    brushColor = '#FFFFFF';
});


document.getElementById('squareOutline').addEventListener('click', () => {
    currentTool = 'squareOutline';
});

document.getElementById('circleOutline').addEventListener('click', () => {
    currentTool = 'circleOutline';
});

document.getElementById('filledSquare').addEventListener('click', () => {
    currentTool = 'filledSquare';
});

document.getElementById('filledCircle').addEventListener('click', () => {
    currentTool = 'filledCircle';
});


document.getElementById('save').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL();
    link.click();
});
