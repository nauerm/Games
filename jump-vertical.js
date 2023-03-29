var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let width = 30;
let height = 30;
let x = canvas.width*0.5 - width/2;
let FLOOR_HEIGHT = canvas.height*0.5;
let y = FLOOR_HEIGHT - height;
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
    gain: 0.05,
    speed: 5,
    percentage: [0, 0],
}
floor.y[0] = canvas.height-300;
floor.y[1] = canvas.height;

GRAVITY = 5;
JUMP = 10;

let collision = false;

console.log()

function drawFloor()
{
    floor.h[0] = canvas.height*8;
    floor.percentage[0] = floor.h[0]*floor.gain;

    floor.h[1] = canvas.height*0.8;
    floor.percentage[1] = floor.h[1]*floor.gain;

    //Checa se o primeiro está terminando e deve mandar o segundo
    if(floor.moving[0] == true && floor.y[0] > -floor.percentage[0])
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
    if(floor.moving[1] == true && floor.y[1] > -floor.percentage[1])
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
    if (floor.y[0]+floor.h[0] < 0)
    {
        // floor.x[0] = canvas.width*(1-(Math.random() * 0.5));
        floor.y[0] = canvas.height;
        floor.move[0] = false;
        floor.moving[0] = false;
    }
    //Checa se terminou o segundo
    if (floor.y[1]+floor.h[1] < 0)
    {
        // floor.x[1] = canvas.width*(1-(Math.random() * 0.5));
        floor.y[1] = canvas.height;
        floor.move[1] = false;
        floor.moving[1] = false;
    }

    //Checa se deve mover
    if (floor.moving[0] == true)
    {
        floor.y[0] -= floor.speed;
        ctx.fillStyle = floor.color[0];
        ctx.fillRect(floor.x[0], floor.y[0], floor.w[0], floor.h[0]); 
    }
    if (floor.moving[1] == true)
    {
        floor.y[1] -= floor.speed;
        ctx.fillStyle = floor.color[1];
        ctx.fillRect(floor.x[1], floor.y[1], floor.w[1], floor.h[1]);
    }
    // console.log(floor.move)
     
}

function drawFloorRand()
{
    floor.h[0] = canvas.height*0.8;
    floor.percentage[0] = floor.h[0]*floor.gain;

    floor.h[1] = canvas.height*0.8;
    floor.percentage[1] = floor.h[1]*floor.gain;

    //Checa se o primeiro está terminando e deve mandar o segundo
    if(floor.moving[0] == true && floor.y[0] > -floor.percentage[0])
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
    if(floor.moving[1] == true && floor.y[1] > -floor.percentage[1])
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
    if (floor.y[0]+floor.h[0] < 0)
    {
        floor.x[0] = canvas.width*(1-(Math.random() * 0.5));
        floor.y[0] = canvas.height;
        floor.move[0] = false;
        floor.moving[0] = false;
    }
    //Checa se terminou o segundo
    if (floor.y[1]+floor.h[1] < 0)
    {
        floor.x[1] = canvas.width*(1-(Math.random() * 0.5));
        floor.y[1] = canvas.height;
        floor.move[1] = false;
        floor.moving[1] = false;
    }

    //Checa se deve mover
    if (floor.moving[0] == true)
    {
        floor.y[0] -= floor.speed;
        ctx.fillStyle = floor.color[0];
        ctx.fillRect(floor.x[0], floor.y[0], floor.w[0], floor.h[0]); 
    }
    if (floor.moving[1] == true)
    {
        floor.y[1] -= floor.speed;
        ctx.fillStyle = floor.color[1];
        ctx.fillRect(floor.x[1], floor.y[1], floor.w[1], floor.h[1]);
    }
    // console.log(floor.move)
     
}

function draw()
{
    collision = false;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    
    checkCollision();
    drawFloor();
    bottom_y = y + height/2;

    if(collision)
    {
        ctx.fillStyle = "#ff0000";
    }
    else
    {
        ctx.fillStyle = "#000";
        x += GRAVITY;
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
            width -= 1.5;
            x += 1.5;
        }
        else if(jump_counter < 12)
        {
            x -= 15;
            width += 15;
        }
        else if(jump_counter < 29)
        {
            x -= JUMP;
        }
        else if(jump_counter >= 29 && jump_counter < 31)
        { 
            x += 0;
        }
        else if(jump_counter < 48)
        {
            if(collision)
            {

            }
            else
            {
                x += GRAVITY
            }
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
}

