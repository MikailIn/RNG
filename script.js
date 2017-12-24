  	var numOne = document.getElementById("nr1");
  	var numTwo = document.getElementById("nr2");
    var randomNumber = document.getElementById("rn");
    var button = document.getElementById("button");
    
    button.addEventListener("click", randomizer);

    function randomizer() {
    	var min = parseFloat(numOne.value) || 0;
    	var max = parseFloat(numTwo.value) || 0;
    	randomNumber.innerHTML = Math.floor(Math.random() * ((max - min) + 1) + min);
    }