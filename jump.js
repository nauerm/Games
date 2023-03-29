var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let collision = false;
let width = 30;
let height = 30;
let x = canvas.width/2 - width/2;
let FLOOR_HEIGHT = canvas.height*0.5;
let y = FLOOR_HEIGHT - height;
let bottom_y = y + height/2;
let jump_counter = 0;
let should_jump = false;
let floor = {
    x:[canvas.width-100, canvas.width],
    y:[0,0],
    w:[0,0],
    h:[20,20],
    color: ['#2288ff','#ff4433'],
    move: [true, false],
    moving: [true, false],
    gain: 0.15,
    speed: 5,
    percentage: [0, 0],
}
floor.y[0] = canvas.height*0.9;
floor.y[1] = canvas.height*(1-(Math.random() * 0.5));

GRAVITY = 10;
JUMP = 20;

console.log()

function drawFloor()
{
    floor.w[0] = canvas.width*1.5;
    floor.percentage[0] = floor.w[0]*floor.gain;

    floor.w[1] = canvas.width*1.5;
    floor.percentage[1] = floor.w[1]*floor.gain;

    //Checa se o primeiro está terminando e deve mandar o segundo
    if(floor.moving[0] == true && floor.x[0] > -floor.percentage[0])
    {
        floor.move[1] = false;
    }
    else
    {
        //Manda mover o segundo
        floor.move[1] = true;
        floor.moving[1] = true;
    }
    
    //Checa se o segundo está terminando e deve mandar o primeiro
    if(floor.moving[1] == true && floor.x[1] > -floor.percentage[1])
    {
        floor.move[0] = false;
    }
    else
    {
        //Manda mover o primeiro
        floor.move[0] = true;
        floor.moving[0] = true;
    }

    //Checa se terminou o primeiro
    if (floor.x[0]+floor.w[0] < 0)
    {
        floor.y[0] = canvas.height*(1-(Math.random() * 0.5));
        floor.x[0] = canvas.width;
        floor.move[0] = false;
        floor.moving[0] = false;
    }
    //Checa se terminou o segundo
    if (floor.x[1]+floor.w[1] < 0)
    {
        floor.y[1] = canvas.height*(1-(Math.random() * 0.5));
        floor.x[1] = canvas.width;
        floor.move[1] = false;
        floor.moving[1] = false;
    }

    //Checa se deve mover
    if (floor.moving[0] == true)
    {
        floor.x[0] -= floor.speed;
        ctx.fillStyle = floor.color[0];
        ctx.fillRect(floor.x[0], floor.y[0], floor.w[0], floor.h[0]); 
    }
    if (floor.moving[1] == true)
    {
        floor.x[1] -= floor.speed;
        ctx.fillStyle = floor.color[1];
        ctx.fillRect(floor.x[1], floor.y[1], floor.w[1], floor.h[1]);
    }
    // console.log(floor.move)
     
}

function draw()
{
    collision = false;

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    
    drawFloor();
    bottom_y = y + height/2;

    checkCollision();
    if(collision)
    {
        ctx.fillStyle = "#f00";
    }
    else
    {
        y += GRAVITY;
        ctx.fillStyle = "#000";
    }
    ctx.fillRect(x, y, width, height);    

    jump();

    requestAnimationFrame(draw);
}

draw();

let frames_preparing = 10;
let mouse = false;
function jump()
{
    if(should_jump){
        jump_counter++;
        if(jump_counter < 11)
        {
            height -= 1.5;
            y += 1.5;
        }
        else if(jump_counter < 12)
        {
            y -= 15;
            height += 15;
        }
        else if(jump_counter < 29)
        {
            y -= JUMP;
        }
        else if(jump_counter >= 29 && jump_counter < 31)
        { 
            y += 0;
        }
    }
}

function mousedown()
{
  mouse = true;
  callEvent();
}
function mouseup()
{
  mouse = false;
  jump_counter = 0;
  should_jump = true;
}
function callEvent()
{

}

canvas.addEventListener("mousedown", function(e) {

});
canvas.addEventListener("mouseup", function(e) {
    mouseup();
});


function checkCollision()
{
    if( x+width >= floor.x[0]  && 
        x-width <= floor.x[0]+floor.w[0] &&
        y+height >= floor.y[0] &&
        y-height <= floor.y[0]+floor.h[0])
    {
        collision = true;
    }
    if( x+width >= floor.x[1]  && 
        x-width <= floor.x[1]+floor.w[1] &&
        y+height >= floor.y[1] &&
        y-height <= floor.y[1]+floor.h[1])
    {
        collision = true;
    }
}
