kategoriAgirlik=[];
var k=0;
function agirlik() {
	
	for(var i=0;i<interest.length;i++){
		for(var j=0;j<category.length;j++){
			if (category[j]==lines[i][2]) {
				kategoriAgirlik[j] += ratio[i];
				k++;
			}
			
		}

	}
	
}
function agirlikStart(){
	for(var j=0;j<category.length;j++){
     	kategoriAgirlik.push(0);
    }
}
var liste=[];

for(var i=0;i<interest.length;i++){
    for (var j = 0; j < kardes.length; j++){
    	if(kardes[j].isim==kat[i]){
    		
    	}
    }
}