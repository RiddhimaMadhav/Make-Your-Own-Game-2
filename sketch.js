var covid, covidImg;
var doctor, doctorImg;
var house, houseImg;
var sanitizer, sanitizerImg;
var scenery, sceneryImg;
var sanitizerGroup, covidGroup;

var score;

function preload() {
doctorImg = loadImage("Doctor.png");
covidImg = loadImage("Covid-19.png");
houseImg = loadImage("House.png");
sanitizerImg = loadImage("Sanitizer.png")
sceneryImg = loadImage("scenery.png")
}

function setup() {
  createCanvas(1300,600);

   doctor = createSprite(400, 300, 50,50);
   doctor.addImage(doctorImg);
   doctor.scale = 0.5

   house = createSprite(160,300,100,20);
   house.addImage(houseImg)
   house.scale = 0.6

   scenery = createSprite(0,0,1600,1600);
   scenery.addImage(sceneryImg);
   scenery.scale = 1.5;
   scenery.depth = scenery.depth-5

   sanitizerGroup = createGroup();
   covidGroup = createGroup();


}

function draw() {
  background("sceneryImg");  

    score = 0;

    doctor.y = World.mouseY;
    
    if(keyDown("space")){
      shootSanitizer();
    }

    if (frameCount % 80 === 0) {
      covidObstacles();
    }
   

  drawSprites();
}

function shootSanitizer(){
  sanitizer = createSprite(500,50, 50,20)
  sanitizer.y= doctor.y    
  sanitizer.addImage(sanitizerImg)
  sanitizer.scale = 0.2
  sanitizer.velocityX= 7
  sanitizerGroup.add(sanitizer)
}

function covidObstacles(){
   covid = createSprite(1290, random(20,580),20, 20);
   covid.addImage(covidImg);
   covid.scale = 0.5
   covid.velocityX = -8;
   covid.lifetime = 2000;
   covidGroup.add(covid);
}