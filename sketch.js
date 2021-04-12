var canva;
var gameState="START";
var passer_1,passer_2,passer_3;
var score=0;
var key1,key2,key3,key4,key5,key6,key7,key8,key9;
var man,ba;
var c_door,o_door,c,house,hall,Man,r1,r2,r3,r4,obj,badge,cp,bgsound,Clap;
var gs=1
function preload(){
  //loading images.
  c_door =loadImage("Images/closed_door.jpg");
  o_door = loadImage("Images/Opened_door.jpg");
  c =loadImage("Images/cor.jpg");
  house = loadImage("Images/H_house.jpg");
  hall=loadImage("Images/Hall2.jpg");
  Man= loadImage("Images/m.png");
  r1=loadImage("Images/Room_1.jpg");
  r2=loadImage("Images/Room_2.jpg");
  r3=loadImage("Images/Room_3.jpg");
  r4=loadImage("Images/Room_4.jpg");
  obj=loadImage("Images/key.png");
  badge= loadImage("Images/Badge.png");
  //loading sound.
  bgsound=loadSound("detective.mp3");
  cp=loadSound("checkPoint.mp3")
  Clap=loadSound("clapping.mp3.wav");
}

function setup(){
  //creating canvas.
  canvas = createCanvas(1000,800);
  //creating man sprite.
  man = createSprite(310,600);
  //adding image of man.
  man.addImage(Man);
  //setting man's scale.
  man.scale=0.1;
  //creating passer 1 sprite.
  passer_1=createSprite(482,586,10,10);
  //making passer 1 invisible.
  passer_1.visible=false;
  //creating input box
  input=createInput("Enter code .Hint:Capital of Brazil");
  input2=createInput("Enter code to get keys.Enter the previous code");
  //setting collider of man.
  man.setCollider("rectangle",0,0,500,1200);
  //creating keys sprite, adding key image, setting scale and making keys invisible.
  key1=createSprite(330,130,10,10);
  key1.addImage(obj);
  key1.scale=0.03;
  key1.visible=false;
  key2=createSprite(840,600,10,10);
  key2.addImage(obj);
  key2.scale=0.03;
  key2.visible=false;
  key3=createSprite(640,385,10,10);
  key3.addImage(obj);
  key3.scale=0.03;
  key3.visible=false;
  key4=createSprite(110,540,10,10);
  key4.addImage(obj);
  key4.scale=0.03;
  key4.visible=false;
  key5=createSprite(950,130,10,10);
  key5.addImage(obj);
  key5.scale=0.03;
  key5.visible=false;
  key6=createSprite(5,90,10,10);
  key6.addImage(obj);
  key6.scale=0.02;
  key6.visible=false;
  key7=createSprite(290,5,10,10);
  key7.addImage(obj);
  key7.scale=0.02;
  key7.visible=false;
  key8=createSprite(990,650,10,10);
  key8.addImage(obj);
  key8.scale=0.02;
  key8.visible=false;
  key9=createSprite(995,5,10,10);
  key9.addImage(obj);
  key9.scale=0.02;
  key9.visible=false;
  //creating badge sprite, adding badge image and making badge invisible.
  ba=createSprite(500,400,100,100);
  ba.addImage(badge)
  ba.visible=false
}


function draw(){
  //setting background as house.
  background(house);

  //custom function for setting instructions 
  setInstructions();
  
  if ( gameState==="START" ){
      if(keyDown("s")){
         //moving man.
         man.y = man.y-1;
         man.x= man.x+8
         man.scale=  man.scale-0.002;
    }
   
    
}
  // starting the game
  if(man.isTouching(passer_1)){
     gameState="PLAY";
     background(c_door);
     bgsound.playMode('untilDone');
     bgsound.play();
     man.scale=0.3;
     input.style('1500', '700px');
     input.position(310,130);
     fill("yellow")
     textSize(30)
     text("Keys collected : "+score,600,50)
  }

  var abc=input.value();
  if(abc==="Brasilia"||abc==="brasilia"){
     passer_1.destroy();
     input.hide();
     background(o_door);
     man.scale=0.4;
     if (keyDown(UP_ARROW)){
         man.y = man.y-1;
         man.scale=  man.scale-0.002;
     }
     fill("yellow")
     textSize(30)
     text("Keys collected : "+score,600,50)
  }

 var passer_2 = createSprite(470,150,100,50);
 passer_2.visible=false;
 if (man.isTouching(passer_2)){
     background(c);
     man.scale=0.3;
     man_movement();
     passer_2.destroy();
     fill("yellow")
     textSize(30)
     text("Keys collected : "+score,600,50)
}

passer_3 =createSprite(510,170,1000,10);
passer_3.visible=true;
passer_3.shapeColor="blue";
if (man.isTouching(passer_3)){
    background(r3);
    text("Collect 3 keys to go to next room",30,100);
    key1.visible=true;
    key2.visible=true;
    key3.visible=true;
    man.setCollider("rectangle",0,0,500,1400)
    if(man.isTouching(key1)){
       cp.play();
       key1.destroy();
       score++;
    }
    if(man.isTouching(key2)){
       cp.play();
       key2.destroy();
       score++;
       console.log("I'm here")
    }
    if(man.isTouching(key3)){
       cp.play();
       key3.destroy();
       score++;
       console.log("I'm here")
}
    passer_3.width=1000;
    passer_3.height=1000;
  
  
    var invsprite=createSprite(150,6800,5,700);
    invsprite.shapeColor="blue";
    man.collide(invsprite)

    invsprite.visible=true;
    man.scale=0.4;
    console.log(man.x);
    man_movement();
    fill("yellow")
    textSize(30)
    text("Keys collected : "+score,600,50)
    if (score>=3){
        background(r1)
        man.scale=0.4
        fill("yellow")
        textSize(30)
        text("Keys collected : "+score,600,50)
        fill("red")
        textSize(20);
        text("collect 2 key to got to the final room",30,100)
        key4.visible=true;
        key5.visible=true
    if(man.isTouching(key4)){
       cp.play();
       key4.destroy();
       score++;
    }
    if(man.isTouching(key5)){
      cp.play();
      key5.destroy();
      score++;
    }
   if(score>=5){
      background(r4);
      man.scale=0.4
      fill("yellow")
      textSize(30)
      text("Keys collected : "+score,600,50)
  
      input2.style('1500', '700px');
      input2.position(150,50);
      var xyz=input2.value(); 
      if(xyz==="Brasilia"||xyz==="brasilia"){
         key6.visible=true;
         key7.visible=true;
         key8.visible=true;
         key9.visible=true;
         input2.hide();
 if(man.isTouching(key6)){
    cp.play();
    key6.destroy();
    score++;
 }
 if(man.isTouching(key7)){
  cp.play();
  key7.destroy();
  score++;
 }
if(man.isTouching(key8)){
  cp.play();
  key8.destroy();
  score++;
 }
if(man.isTouching(key9)){
  cp.play();
  key9.destroy();
  score++;
 }
}

if(score>=9){
   background("black")
   ba.visible=true
   man.visible=false;
   textSize(35);
   text("You won!! This badge is yours",300,700)
   bgsound.stop();
   Clap.playMode('untilDone');
   Clap.play();
   no_man_movement();
}
}
}
}
   passer_3.destroy();
 

 var edges= createEdgeSprites();
   man.collide(edges);
 drawSprites();
  
}
//custom functions.
function man_movement(){
  if (keyDown(UP_ARROW)){
      man.scale=  man.scale-0.02;
  }
  if (keyDown(RIGHT_ARROW)){
      man.x =man.x+5;
  }
  if (keyDown(LEFT_ARROW)){
      man.x =man.x-5;
  }
  if (keyDown(DOWN_ARROW)){
      man.y =man.y+5;
  } 
}
function no_man_movement(){
  if (keyDown(UP_ARROW)){
    man.scale=  man.scale-0;
  }
  if (keyDown(RIGHT_ARROW)){
    man.x =man.x+0;
  }
  if (keyDown(LEFT_ARROW)){
   man.x =man.x-0;
  }
  if (keyDown(DOWN_ARROW)){
    man.y =man.y+0;
  } 
}
function setInstructions(){
  stroke(20)
  textSize(40);
  fill("red");
  text("--Fight For Badge--",300,50);
  textSize(25)
  text("*Main goal of the game is to collect the badge",100,200);
  text("*Collect keys to get the detective badge",100,280);
  text("*Use s key to move man on the first screen",100,360)
  text("*Use arrow keys to move the detective man from second screen",100,440);
  
}
