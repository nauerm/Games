const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

// Variáveis
CHAR_WIDTH = 25;
CHAR_HEIGHT = 25;
INIT_POS_X = canvas.width/2;
INIT_POS_Y = canvas.height*0.5 ;
VEL = 5;
//Valor de "offset" para o qual o personagem não segue mais o toque na tela
OFFSET = CHAR_WIDTH/2; 

let x = INIT_POS_X;
let y = INIT_POS_Y;
let radius = CHAR_WIDTH;

let charCenterX = 0; 
let charCenterY = 0;
let angle = 0;

let vx = 0;
let vy = 0;

let deltaX = 0;
let deltaY = 0;
let clickX_main = 0;
let clickY_main = 0;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let y1 = 0;
let y2 = 0;
let y3 = 0;
let y4 = 0;


//Botão de tiro
const shootX = canvas.width*0.80;
const shootY = canvas.height*0.85;
let shootRadius = 40;

// flag para indicar quto track if the character is currently moving
let isMoving = false; 

function update(){
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    // calculate the direction to move the character
    deltaX = clickX_main - x;
    deltaY = clickY_main - y;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    //Só move se clicando ou arrastando E o delta em pelo menos uma das posições é grande
    if (isMoving && (Math.abs(deltaX) > OFFSET || Math.abs(deltaY) > OFFSET))
    {
        vx = deltaX / distance * VEL;
        vy = deltaY / distance * VEL;
    }
    else
    {
        vx = 0;
        vy = 0;
    }

    x += vx;
    y += vy;
    
    charCenterX = x + CHAR_WIDTH / 2;
    charCenterY = y + CHAR_HEIGHT / 2;

    // calculate the rotated points of the rectangle
    x1 = x -CHAR_WIDTH/2 * Math.cos(angle) - (-CHAR_HEIGHT/2 * Math.sin(angle));
    y1 = y -CHAR_WIDTH/2 * Math.sin(angle) + (-CHAR_HEIGHT/2 * Math.cos(angle));

    x2 = x + CHAR_WIDTH/2 * Math.cos(angle) - (-CHAR_HEIGHT/2 * Math.sin(angle));
    y2 = y + CHAR_WIDTH/2 * Math.sin(angle) + (-CHAR_HEIGHT/2 * Math.cos(angle));

    x3 = x + CHAR_WIDTH/2 * Math.cos(angle) - (CHAR_HEIGHT/2 * Math.sin(angle));
    y3 = y + CHAR_WIDTH/2 * Math.sin(angle) + (CHAR_HEIGHT/2 * Math.cos(angle));

    x4 = x -CHAR_WIDTH/2 * Math.cos(angle) - (CHAR_HEIGHT/2 * Math.sin(angle));
    y4 = y -CHAR_WIDTH/2 * Math.sin(angle) + (CHAR_HEIGHT/2 * Math.cos(angle));

    // Desenho do personagem
    ctx.fillStyle = "#fff";
    // Desenho da borda do personagem
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000";
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.closePath();
    ctx.fill();
    // ctx.stroke();
    requestAnimationFrame(update);
}

// function drawShoot()
// {    
//     // Draw the buttons on the canvas
//     ctx.beginPath();
//     ctx.moveTo(shootX+shootRadius, shootY);
//     ctx.arc(shootX, shootY, shootRadius, 0, 2 * Math.PI, false);
//     ctx.fill();
//     ctx.stroke();

//     requestAnimationFrame(drawShoot);
// }

update();
drawShoot();
