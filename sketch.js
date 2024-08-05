function setup() {
    createCanvas(600, 600);
    background("rgb(212,198,240)");
  }
  
  function draw() {
    
    stroke("rgb(128,118,118)")
    fill("rgb(243,103,243)");
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 40, 50);
     } 
  }
    