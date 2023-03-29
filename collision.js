var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let width = 80;
let height = 80;
let x = 20;
let FLOOR_HEIGHT = canvas.height*0.5;
let y = 20;
let bottom_y = y + height/2;
let jump_counter = 0;
let should_jump = false;
let floor = {
    x:[canvas.width*0.85, canvas.width*0.10],
    y:[0,0],
    w:[20,20],
    h:[20,20],
    color: ['#2288ff','#ff4433'],
    move: [true, false],
    moving: [true, false],
    gain: 0.25,
    speed: 5,
    percentage: [0, 0],
}
floor.y[0] = canvas.height+50;
floor.y[1] = canvas.height;

GRAVITY = 5;
JUMP = 10;

width2 = width;
height2 = height;
x2 = canvas.width/2-width2/2;
y2 = canvas.height/2-height2/2;
let collision = false;

function draw()
{
    collision = false;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    
    // ret1
    checkCollision();
    if(collision)
    {
        ctx.fillStyle = "#ff0000";
    }
    else
    {
        ctx.fillStyle = "#0077aa";
    }
    ctx.fillRect(x-width/2, y-width/2, width, height);   

    //ret2
    if(collision)
    {
        ctx.fillStyle = "#ff0000";
    }
    else
    {
        ctx.fillStyle = "#0000ff";
    }
    ctx.fillRect(x2, canvas.height/2-height/2, width, height);  

    requestAnimationFrame(draw);
}

draw();

let frames_preparing = 10;
let mouse = false;

addEventListener('mousemove', (e) => {
    let canvasRect = canvas.getBoundingClientRect();
    x = e.clientX  - canvasRect.left;
    y = e.clientY  - canvasRect.top;
});

function checkCollision()
{
    if( x+width/2 >= x2  && 
        x-width/2 <= x2+width2 &&
        y+height/2 >= y2 &&
        y-height/2 <= y2+height2)
    {
        collision = true;
    }
}