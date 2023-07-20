let backgroundRed = 0;
let backgroundGreen = 68;
let backgroundBlue = 129;

let joints = createJoints(2)

function createJoints(numJoints) {

  let constructor = {
    draw: function(x, y, radius){
      stroke(255, 0, 0);
      fill(255, 0, 0);
      ellipse(x, y, radius, radius);
    }
  }

  let joints = [];

  x = 100;
  y = 100;
  increment = 50;

  for (let i = 0; i < numJoints; i++) {
    let joint = Object.create(constructor)
    joint.pos = [x, y];
    joint.radius = 50;
    x += increment;
    y += increment;
    joints.push(joint); 
  }
  return joints;
} 


function setup() {
  let screenWidth = 960;
  let screenHeight = 995;
  createCanvas(screenWidth, screenHeight, WEBGL);
  
}

function draw(){
  background(backgroundRed, backgroundGreen, backgroundBlue)
  translate(-width/2, -height/2, 0)
  for (let i = 0; i < joints.length; i++) {
    joints[i].draw(
      joints[i].pos[0], 
      joints[i].pos[0], 
      joints[i].radius
    )
  }
}