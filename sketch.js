const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ground1;
var ground2;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;

var box17,box18,box19,box20,box21,box22,box23, box24,box25;
var poly;
var sling;
var bg = "lightblue";
var score = 0;
function preload() {
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 400, 1200, 20);
    ground1 = new Ground(490, 305, 300, 20);
    ground2 = new Ground(890, 200, 300, 20);

    box1 = new Box(400, 275, 30, 40);
    box2 = new Box(430, 275, 30, 40);
    box3 = new Box(460, 275, 30, 40);
    box4 = new Box(490, 275, 30, 40);
    box5 = new Box(520, 275, 30, 40);
    box6 = new Box(550, 275, 30, 40);
    box7 = new Box(580, 275, 30, 40);

    box8 = new Box(430, 235, 30, 40);
    box9 = new Box(460, 235, 30, 40);
    box10 = new Box(490, 235, 30, 40);
    box11 = new Box(520, 235, 30, 40);
    box12 = new Box(550, 235, 30, 40);

    box13 = new Box(460, 195, 30, 40);
    box14 = new Box(490, 195, 30, 40);
    box15 = new Box(520, 195, 30, 40);

    box16 = new Box(490, 155, 30, 40);

    box17 = new Box(800, 175, 30, 40);
    box18 = new Box(830, 175, 30, 40);
    box19 = new Box(860, 175, 30, 40);
    box20 = new Box(890, 175, 30, 40);
    box21 = new Box(920, 175, 30, 40);

    
    box22 = new Box(830, 135, 30, 40);
    box23 = new Box(860, 135, 30, 40);
    box24 = new Box(890, 135, 30, 40);

    box25 = new Box(860, 95, 30, 40);

    
    poly = new Polygon(50, 300, 20);

    sling = new SlingShot(poly.body,{x:50, y:300} );
}

function draw(){
    background(bg);
    Engine.update(engine);
    fill("black");
    text("SCORE: " +score, 750, 40);
    ground.display();
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();
    box25.display();
    poly.display();
    sling.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
}


function mouseDragged(){
        Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}


function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(poly.body, {x:50, y:200});

       sling.attach(poly.body);
       
    }
}


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
       bg = "lightblue";
    }
    else{
        bg = "purple";
    }
    console.log(backgroundImg);
}
