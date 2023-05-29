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
    let listItems = document.querySelectorAll('li[data-number]');
    for (let i = 0; i < listItems.length; i++) {
    if (!listItems[i].innerHTML){
        listItems[i].addEventListener('click', placeNumber)
        listItems[i].classList.add('highlight');
    } else {
        listItems[i].classList.remove('highlight');
    }
        listItems[i].classList.remove('disabled');
        }
    }

function disableListItems() {
    let listItems = document.querySelectorAll('li[data-number]');
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

        let listItems = document.querySelectorAll("li[data-number]");
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].classList.remove("highlight");
        }
    }
 }

let numbs = document.querySelectorAll('.numb')

numbs.forEach( e => {
    let number =  new Number(e.dataset.number)
    let gameNumber = new Number()
    console.log(gameNumber)
  })
