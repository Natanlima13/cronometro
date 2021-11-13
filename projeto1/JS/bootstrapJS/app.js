window.onload=function() {
    var segundos=00;
    var miles=00;
    var appendmiles= document.getElementById("miles");
    var appendsegundos= document.getElementById("segundos");
    var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    miles = "00";
  	segundos = "00";
    appendmiles.innerHTML = miles;
  	appendsegundos.innerHTML = segundos;
  }
  
   
  
  function startTimer () {
    miles++; 
    
    if(miles <= 9){
      appendmiles.innerHTML = "0" + miles;
    }
    
    if (miles > 9){
      appendmiles.innerHTML = miles;
      
    } 
    
    if (miles > 99) {
      console.log("segundos");
      segundos++;
      appendsegundos.innerHTML = "0" + segundos;
      miles = 0;
      appendmiles.innerHTML = "0" + 0;
    }
    
    if (segundos > 9){
      appendsegundos.innerHTML = segundos;
    }
  
  }
  

}

    
