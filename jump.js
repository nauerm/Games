var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let width = 30;
let height = 30;
let x = canvas.width/2 - width/2;
let FLOOR_HEIGHT = canvas.height*0.5;
let y = FLOOR_HEIGHT - height;
let bottom_y = y + height/2;
let jump_counter = 0;
let should_jump = false;

GRAVITY = 5;
JUMP = 10;

function drawFloor()
{
    ctx.strokeStyle = '#353848';
    ctx.fillStyle = '#353848';
    ctx.beginPath();
    // Superior esquerdo
    ctx.moveTo(0, FLOOR_HEIGHT);
    // Superior direito
    ctx.lineTo(canvas.width, FLOOR_HEIGHT);
    // Inferior direito
    ctx.lineTo(canvas.width, canvas.height);
    // Inferior esquerdo
    ctx.lineTo(0, canvas.height);
    ctx.fill();
    ctx.stroke();
}

function draw()
{
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    
    drawFloor();
    bottom_y = y + height/2;

    // if(bottom_y < FLOOR_HEIGHT - height/2)
    // {
    //     y += GRAVITY;
    // }

    ctx.fillStyle = "#fff";
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
        else if(jump_counter < 48)
        {
            y += JUMP
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

