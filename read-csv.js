var interest=[];
var ratio=[];
var category=[];
var kat=[];
var len=[];
var lines = [];

function handleFiles(files) {
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          getAsText(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }

    function getAsText(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }

    function loadHandler(event) {
      var csv = event.target.result;
      processData(csv);
    }

    function processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        
        for (var i=1; i<allTextLines.length-1; i++) {
            var data = allTextLines[i].split(';');
                var tarr = [];
                for (var j=0; j<data.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
                // console.log(lines);
        }

        
        
        for(var i=0;i<allTextLines.length-2;i++){
            interest.push(lines[i][0]);
            ratio.push(lines[i][1].replace(',','.'));
            kat.push(lines[i][2]);
            len.push(lines[i][3].replace(',','.'));
        }
        Array.prototype.unique = function() {
          return this.filter(function (value, index, self) { 
            return self.indexOf(value) === index;
          });
        }
        //alt benim eklediğim yerler
        category = kat.unique();
        ratio = float(ratio);
        len = float(len);


        if(a){
          agirlikStart();
          agirlik();
          a=false;
        }

        kardesOlustur();
        cocukOlustur();
        for (var i = 0; i < kardes.length; i++) {
          //if(textWidth(kardes[i].isim)>=kardes[i].boyut)
            //kardes[i].boyut=textWidth(kardes[i].isim);
          kardes[i].run();
        }
  
        for (var i = 0; i < cocuk.length; i++) {
          //if(textWidth(cocuk[i].isim)>=cocuk[i].boyut)
            //cocuk[i].boyut=textWidth(cocuk[i].isim);
          cocuk[i].run();

        }
    }
    

    function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }