var dogs,happyDog
var foodS,foodStock
var database

function preload()
{
  dog= loadImage ("images/dogImg.png")
  happyDog= loadImage ("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database=firebase.database();
  dogs=createSprite(400,350)
  dogs.addImage(dog)
  dogs.scale=0.3
  foodStock=database.ref('food');
  foodStock.on("value",readStock)
}


function draw() {  
background(rgb(0,255,100))
fill(155)
text("Note: Press Up_ARROW Key to Feed Ollie Milk!",10,20)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dogs.addImage(happyDog);
  }
  drawSprites();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else {
    x=x-1;
  }
database.ref('/').update({
  food:x
})


}
function readStock(data){
  foodS=data.val();
}



