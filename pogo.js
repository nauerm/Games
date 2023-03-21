var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


let width = 10;
let height = 150;
let x = canvas.width/2 - width/2;
let y = canvas.height/2 - height/2;
let bottom_y = y + canvas.height/2;

GRAVITY = 5;
JUMP = GRAVITY*50;

function draw()
{
    bottom_y = y + height/2;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    if(bottom_y <= canvas.height - height/2)
    {
        y += GRAVITY;
    }

    ctx.fillStyle = "#fff";
    ctx.fillRect(x, y, width, height);
    
    
    requestAnimationFrame(draw);
}

draw();

let mouse = false;

function mousedown()
{
  mouse = true;
  callEvent();
}
function mouseup()
{
  mouse = false;
  y -= JUMP;
  height = 150;
}
function callEvent()
{
 if(mouse)
 {
    
    if (height >= 75)
    {
        height -= 2;
        setTimeout("callEvent()", 1e-5);
    }
 }
 else
 return;
}

canvas.addEventListener("mousedown", function(e) {
    mousedown();

});
canvas.addEventListener("mouseup", function(e) {
    mouseup();
});

