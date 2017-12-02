kardes = [];
cocuk=[];
var a =true;
function setup(){
  createCanvas(displayWidth, displayHeight);
  
  //pixelDensity(5);
  ana = new Anne();
}

function draw(){
  background(150);
  //cakismaAyarlama();
  
  cizim();
  



}


var secili1 = [];
var secili2 = [];
function mouseDragged(){

  if(secili2.length==0){
    for (var i = 0; i < cocuk.length; i++) {
      if(dist(cocuk[i].x,cocuk[i].y,mouseX,mouseY)<=cocuk[i].boyut/2){
      secili1.push(cocuk[i]);
      secili1[0].x=mouseX;
      secili1[0].y=mouseY; 
      }
    }
  }
  if(secili1.length==0){
    for (var i = 0; i < kardes.length; i++) {
      if(dist(kardes[i].x,kardes[i].y,mouseX,mouseY)<=kardes[i].boyut/2){
        secili2.push(kardes[i]);
        secili2[0].x=mouseX;
        secili2[0].y=mouseY; 
      }
    }
  }
}

function mouseReleased(){
  secili1.length=0;
  secili2.length=0;
}



function cizim() {
  for (var i = 0; i < kardes.length; i++) {
    kardes[i].cizgi();   
  }
  for (var i = 0; i < cocuk.length; i++) {
    cocuk[i].cizgi();   
  }
  
  ana.show();
  for (var i = 0; i < kardes.length; i++) {
    
    kardes[i].show();
  }
  for (var i = 0; i <cocuk.length ; i++) {
    if(cocuk[i].x>width-cocuk[i].boyut/2){
      cocuk[i].x=width-cocuk[i].boyut/2-10;
    }else if(cocuk[i].x-cocuk[i].boyut/2<0){
      cocuk[i].x=cocuk[i].boyut/2+10;
    }
    if(cocuk[i].y>height-cocuk[i].boyut/2){
      cocuk[i].y=height-cocuk[i].boyut-10;
    }else if(cocuk[i].y-cocuk[i].boyut/2<0){
      cocuk[i].y=cocuk[i].boyut/2+10;
    }
    
    cocuk[i].show();

  }
}