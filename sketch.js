



let button;
let image;

function preLoad(){
  image = loadImage('Pikachu-PNG-HD.png')

}

function setup() {
  createCanvas(400, 400);
button = select('#changeBackground')
button.mousePressed(changeBG);
}

function changeBG() {
 let val = random(255);
 background(val);
}
