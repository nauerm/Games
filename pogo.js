var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


let width = 10;
let height = 150;
let x = canvas.width/2 - width/2;
let y = 525 - height/2;
let bottom_y = y + canvas.height/2;
let jump_counter = 0;
let should_jump = false;

GRAVITY = 10;
JUMP = 20;

function jump()
{
    if(should_jump){
        jump_counter++;
        if(jump_counter < 18)
        {
            height -= 7;
            y += 7;
        }
        else if(jump_counter < 19)
        {
            y -= 7*17;
            height += 7*17;
        }
        else if(jump_counter < 38)
        {
            y -= JUMP;
        }
        else if(jump_counter >= 38 && jump_counter < 41)
        { 
            y += 0;
        }
        else if(jump_counter < 60)
        {
            y += JUMP
        }
        
    }
}
function draw()
{
    bottom_y = y + height/2;
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    if(bottom_y <= canvas.height - height/2)
    {
        // y += GRAVITY;
    }

    ctx.fillStyle = "#fff";
    ctx.fillRect(x, y, width, height);
    
    
    jump();
    requestAnimationFrame(draw);
}

draw();

let mouse = false;

function mousedown()
{
}
function mouseup()
{
    jump_counter = 0;
    should_jump = true;
}

// function callEvent()
// {
//  if(mouse)
//  {
    
//     // if (height >= 75)
//     // {
//     //     height -= 2;
//     //     setTimeout("callEvent()", 1e-5);
//     // }
//  }
//  else
//  return;
// }

canvas.addEventListener("mousedown", function(e) {
    mousedown();

});
canvas.addEventListener("mouseup", function(e) {
    mouseup();
});

