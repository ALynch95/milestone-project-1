function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
let rndNum = randomNumber(1, 1000)

  function num() { 
    document.getElementById("result").innerHTML = rndNum; 
 } 

let btn = document.getElementById('draw');

 btn.addEventListener('click', function() {
    btn.style.display = 'none';
    clickListItems();
 })

 function clickListItems() {
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', placeNumber);
    }
 }

 function placeNumber() {
    if (!this.innerHTML) {
        let rndNum = document.getElementById('result').innerHTML
        this.innerHTML = rndNum;
    }
 }