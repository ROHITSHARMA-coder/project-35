var hotairball;

var database;

function preload(){
    bg =loadImage("background.png");
    balloonImage1=loadAnimation("ballon1.png");
    balloonImage2=loadAnimation("ballon1.png","ballon1.png",
    "ballon1.png","ballon2.png","ballon2.png",
    "ballon2.png","ballon3.png","ballon3.png","ballon3.png");
   
  
}

function setup(){
    database=firebase.database();

    createCanvas(500,500);

    hotairball = createSprite(250,250,10,10);
    hotairball.addAnimation("hotAirBalloon",balloonImage1);
    hotairball.scale= 0.5;

    var hotairballpos=database.ref('hotairball/position');
    hotairballpos.on("value",readposition)

}

function draw(){

    background(bg);

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    drawSprites();

}

function changePosition(x,y){

database.ref('hotairball/position').set({
    
    'x': position.x+x,
    'y': position.y+y

})
    
}

function readposition(data){
position=data.val();
hotairball.x=position.x
hotairball.y=position.y


}
