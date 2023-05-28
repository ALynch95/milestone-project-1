function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  function num() {
    let rndNum = randomNumber(1, 1000) 
    document.getElementById("result").innerHTML = rndNum; 
 } 

let btn = document.getElementById('draw');
btn.addEventListener('click', function() {
    btn.style.display = 'none';
    enableListItems();
    num();
 });

function enableListItems() {
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', placeNumber)
        listItems[i].classList.remove('disabled');
    }
}

function disableListItems() {
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].removeEventListener('click', placeNumber)
        listItems[i].classList.add('disabled');
    }
}

 function placeNumber() {
    if (!this.innerHTML) {
        let rndNum = document.getElementById('result').innerHTML
        this.innerHTML = rndNum;
        document.getElementById('result').innerHTML = '';
        disableListItems();
        btn.style.display = 'initial';
    }
 }



