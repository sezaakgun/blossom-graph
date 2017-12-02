
function Node(x,y,isim,boyut,node){
	

	this.x = x + node.x;
	this.konumX=x;
	this.konumY=y;
	this.y = y + node.y;
	this.isim = isim;
	this.boyut = boyut;
	this.kategori=node.isim;
	//var myDiv = createDiv(this.isim);
	//myDiv.style("max-width", this.boyut/2);
	//myDiv.style("background-color", "red");
	//myDiv.style("text-align", "justify");
	//myDiv.style("text-justify", "inter-word");
	this.show=function(){
		
		ellipse(this.x,this.y,this.boyut,this.boyut);
		textAlign(CENTER);
		
		var isimler = split(this.isim,' ');
		var maxInterestChar=isimler[0].length;
		var satirSayisi = isimler.length;
		var enUzunKelime=isimler[0];
		for (var i = 0; i < isimler.length; i++) {
			if(maxInterestChar<isimler[i].length){
				maxInterestChar=isimler[i].length;
				enUzunKelime=isimler[i];
			}
		}
		rectMode(CENTER);
		//text(this.isim,this.x-this.boyut/2*cos(PI/4),this.y-this.boyut/2*sin(PI/4),2*this.boyut*cos(PI/4),2*this.boyut*sin(PI/4));
		//text(this.isim,this.x,this.y,this.boyut*cos(PI/4),this.boyut*sin(PI/4));
		//textSize(map(this.isim.length,minInterestChar,maxInterestChar,0,this.boyut));
		var size = 21;
		
		textSize(size);
		if(satirSayisi==3){
			while(textWidth(enUzunKelime)+this.boyut/20+20>this.boyut){
				size--;
				textSize(size);
				// console.log(this.isim);
			}
		}else if (satirSayisi==2) {
			while(textWidth(enUzunKelime)+this.boyut/20+11>this.boyut){
				size--;
				textSize(size);
				// console.log(this.isim);
			}
		}else{
			while(textWidth(enUzunKelime)+this.boyut/19>this.boyut){
				size--;
				textSize(size);
				//console.log(this.isim+" boyut "+size);
			}
		}
		
		
		var ustSinir = textAscent() * 0.8;//her font için farklı
		var altSinir = textDescent() * 0.8;
		var satirBosluk = textLeading();;
		var kelimeYuksekliği =abs(ustSinir+altSinir);
		//satir Sayisina Bagli Katsayi ssbks
		var ssbks=(satirSayisi-1)*satirBosluk+satirSayisi*kelimeYuksekliği;
		var genislik =sqrt(this.boyut*this.boyut-(ssbks/2)*(ssbks/2));
		//rect(this.x,this.y,genislik,ssbks);
		text(this.isim,this.x,this.y,genislik-(satirSayisi-1)*15,ssbks-(satirSayisi-1)*satirSayisi*5);
		//text(this.isim,this.x,this.y);
		// myDiv.style("position", this.x,this.y);
	}
	this.cizgi=function(){
		line(this.x,this.y,node.x,node.y);
	}
	this.run=function(){
		push();
  		translate(node.x,node.y);
		ellipse(this.konumX,this.konumY,this.boyut,this.boyut);
		
		pop();
	}
	this.categoriyeGoreDuzenle=function(){
		push();
  		translate(node.x,node.y);
		ellipse(this.konumX,this.konumY,this.boyut,this.boyut);
		textAlign(CENTER);
		text(this.isim,this.konumX,this.konumY);
		pop();
	}
	
	this.cakisma = function(){
		if(abs(dist(this.x,this.y,mouseX,mouseY))<=this.boyut/2)
			return true;
		else
			return false;
	}


}




function Anne(){
	this.x=width/2;
	this.y=height/2;
	this.isim="anne";
	this.boyut = width/10;
	
	this.show=function(){
		ellipse(this.x,this.y,this.boyut,this.boyut);
		textAlign(CENTER);
		textSize(30);
		text(this.isim,this.x,this.y)
	}
}




function kardesOlustur() {
	var deger =2*PI/category.length;
  
    for (var i = 1; i <=category.length ; i++) {
      	kardes[i-1]=new Node(220*cos(deger*i),220*sin(deger*i),category[i-1],60+kategoriAgirlik[i-1]*8,ana);
    }
}


function cocukOlustur() {
	var deger;
	var k=0;
  	var m=0;
	var kontrol=kardes[0];
	var iler=[];
	
  for(var j=0;j<kardes.length;j++){

    	for(var i=0;i<interest.length;i++){
       	 	if(kardes[j].isim==kat[i]){
      			k++;
        	  iler.push(i);	
      		}
    	}
     	 deger = PI/(k+5);
     	 var theta=29*PI/36 + atan2(ana.y-kardes[j].y,ana.x-kardes[j].x);
     	 for (var l = 1; l <= k; l++) {
     	 	var a = map(len[m],min(len),max(len),kardes[j].boyut+5,width/2);
     	 	var x =a*cos(theta+deger*l);
     	 	var y =a*sin(theta+deger*l);
     	 	var rad =30+ratio[iler[l-1]]*20;
     	 	
     	 	

        	cocuk[m]=new Node(x,y,interest[iler[l-1]],rad, kardes[j]);
        	m++;
        	//console.log(k);
        	//console.log(kardes[j].isim);
      	}
      	k=0;
    	iler.length=0;
  	}
}


function cakismaAyarlama() {

		for (var i = 0; i < cocuk.length; i++) {
			for (var j = 0; j < cocuk.length; j++) {
				if(i!=j&&cocuk[i].cakisma(cocuk[j])){
					//console.log("2");
					cocuk[i].x++;
					cocuk[i].y++;
				}
			}			
		}
	}