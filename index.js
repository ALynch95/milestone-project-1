function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndNum = randomNumber(1, 1000)

  function num() { 
    document.getElementById("result").innerHTML = rndNum; 
 } 