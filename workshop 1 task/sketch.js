let x = 0;
let move = 5;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(255,200,50);

  if (x > width){
    move = -5;
  }
  if (x < 0){
    move = 5;
  }
  
  stroke(255,100,250)
  line(x, 200,200,50);
  
  noStroke();
  fill(40,39,100);
  quad(x, 100, 280, x + 1, 350, 38, 14, 50)
  x = x + move;
  
}