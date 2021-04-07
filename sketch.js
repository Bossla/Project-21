var canvas;
var music;
var surface1, surface2, surface3, surface4; 
var box;
var up,right,left;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,575,196,50);
    surface1.shapeColor = color("blue");
    surface2 = createSprite(300,575,196,50);
    surface2.shapeColor = color("yellow");
    surface3 = createSprite(500,575,196,50);
    surface3.shapeColor = color(220,20,60);
    surface4 = createSprite(700,575,196,50);
    surface4.shapeColor = color("green");

    up = createSprite(400,0,800,1);
    left = createSprite(1,300,1,600);
    right = createSprite(799,300,1,600);

    //create box sprite and give velocity

    box = createSprite(400,22,40,40);
    box.x = random(20,750);
    box.velocityX = 10;
    box.velocityY = 10;
    box.shapeColor = color("white");
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(up);
    box.bounceOff(right);
    box.bounceOff(left);

    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = color("blue");
        music.play();
    }

    if(surface2.isTouching(box)){
        box.shapeColor = color("yellow");
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = color(220,20,60);
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = color("green");
    }

    drawSprites();
}
