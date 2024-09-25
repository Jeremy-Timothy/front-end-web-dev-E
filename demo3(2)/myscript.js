// window element
window.addEventListener('load', ()=>{

    resize(); // Resizes the canvas once the window loads
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);
});

// declare Variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); // canvas for 2 dimensional operations
let coord = {x:0 , y:0}; // stores the initial position of the cursor
let paint = false; // trigger drawing

// Resizes the canvas to the avaliable size of the window.
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

// Updates the coordinates of the cursor
function getPosition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}

// start and stop drawing
function startPainting(event) {
    paint = true;
    getPosition(event);
}
function stopPainting() {
    paint = false;
}

function sketch(event) {
    if (!paint) return;
    ctx.beginPath();
    ctx.lineWidth = 5;
    //sets round shape
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    // The cursor to start drawing moves to this coordinate
    ctx.moveTo(coord.x, coord.y);
    // The position of the cursuor gets updated as we move to the mouse around.
    getPosition(event);
    // A line is traced from start coordinate to this coordinate
    ctx.lineTo(coord.x, coord.y);
    // Draws the line.
    ctx.stroke();
}