document.addEventListener('contextmenu', event => event.preventDefault());

function release()
{
    // set the flag to indicate that the character should stop moving
    isMoving = false;
    vx = 0;
    vy = 0;
}

function a(e)
{
  console.log(e.type);

  // Pega a posição relativa do canvas
  let canvasRect = canvas.getBoundingClientRect();

  // get the x and y coordinates of the mouse click event
  if(e.type == 'mousedown')
  {
    clickX = e.clientX - canvasRect.left;
    clickY = e.clientY - canvasRect.top;
  }
  else
  {
    clickX = e.touches[0].clientX - canvasRect.left;
    clickY = e.touches[0].clientY - canvasRect.top;
  }
  clickX_main = clickX;
  clickY_main = clickY;

  // // Check if the click is inside the shoot button
  // if (clickX > shootX-shootRadius && clickX < shootX+shootRadius && clickY > shootY-shootRadius && clickY < shootY+shootRadius) 
  // {
  //     isMoving = false;   
  //     shootRadius += 1;
  // }
  // else
  // {
    // set the flag to indicate that the character should start moving
    isMoving = true;
    angle = Math.atan2(clickY - charCenterY, clickX - charCenterX);
  // }

}

canvas.addEventListener("touchstart", function(e) {
    a(e);
});
canvas.addEventListener("mousedown", function(e) {
    a(e);
});

canvas.addEventListener("touchend", function(e) {
    release();
});
canvas.addEventListener("mouseup", function(e) {
    release();
});

addEventListener("touchmove", function(e) {
    // only move the character if the flag is set to true
    let canvasRect = canvas.getBoundingClientRect();
    if (isMoving) {
        // get the x and y coordinates of the mouse click event
        clickX = e.touches[0].clientX - canvasRect.left;
        clickY = e.touches[0].clientY - canvasRect.top;
        clickX_main = clickX;
        clickY_main = clickY;
        
        // Check if the click is inside the shoot button
        // if (clickX > shootX-shootRadius && clickX < shootX+shootRadius && clickY > shootY-shootRadius && clickY < shootY+shootRadius) 
        // {
        //     console.log('Click on button'); 
        //     isMoving = false;   
        //     shootRadius += 1;
        // }
        // else
        // {
          angle = Math.atan2(clickY - charCenterY, clickX - charCenterX);
        // }
    }

});
addEventListener("mousemove", function(e) {
    // only move the character if the flag is set to true
    let canvasRect = canvas.getBoundingClientRect();
    if (isMoving) {
        // get the x and y coordinates of the mouse click event
        clickX = e.clientX - canvasRect.left;
        clickY = e.clientY - canvasRect.top;
        clickX_main = clickX;
        clickY_main = clickY;
        
        // Check if the click is inside the shoot button
        // if (clickX > shootX-shootRadius && clickX < shootX+shootRadius && clickY > shootY-shootRadius && clickY < shootY+shootRadius) 
        // {
        //     console.log('Click on button'); 
        //     isMoving = false;   
        //     shootRadius += 1;
        // }
        // else
        // {
          angle = Math.atan2(clickY - charCenterY, clickX - charCenterX);
        // }
    }

});


////////////////////////////////////////////////
// HANDLES KEYBOARD INPUTS
////////////////////////////////////////////////
// addEventListener("keydown", function(e){
//     if(e.code == 'KeyA') vx = -VEL;
//     if(e.code == 'KeyW') vy = -VEL;
//     if(e.code == 'KeyS') vy = VEL;
//     if(e.code == 'KeyD') vx = VEL;
// })

// addEventListener("keyup", function(e){
//     if(e.code == 'KeyA') vx = 0;
//     if(e.code == 'KeyW') vy = 0;
//     if(e.code == 'KeyS') vy = 0;
//     if(e.code == 'KeyD') vx = 0;
// })

