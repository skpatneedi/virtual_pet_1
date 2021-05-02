var dog, happyDog, database, foodS, foodStock , position;
var backgroundImg, dogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");  
  //backgroundImg = loadImage("bg.jpg");
  
}


function setup(){
    createCanvas(500,500);
    database = firebase.database();
    dog = createSprite(250,300,50,50);
    dog.addImage("dog",dogImg);
    dog.scale=0.5  ;
     foodStock =  database.ref('Food');
    foodStock.on("value",readStock)
}

function draw(){
    background("lightblue");
    
   
    if(keyWentDown("space")){
        
       WriteStock(foodS)
       dog.addImage("happyDog",happyDog);   
    } 
    drawSprites();
    textSize(25);
    fill("black");
    text("food remaining:"+ foodS,170,80);
    text("press space to feed the dog!" ,170 , 120 )
    
}

function WriteStock(x){
    if(x<=0){
        x=0
    }
    else{
        x=x-1;
    }
    database.ref('/').update({
        Food:x
    })
}
function readStock(data){
    foodS = data.val();
    
}

