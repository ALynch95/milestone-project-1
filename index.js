let listItems = Array.from(document.querySelectorAll('.numb'));

console.log(listItems);

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
    let listItems = document.querySelectorAll('li[data-value]');
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
    let listItems = document.querySelectorAll('li[data-value]');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].removeEventListener('click', placeNumber)
        listItems[i].classList.add('disabled');
    }
}

 function placeNumber() {
    if (!this.innerHTML) {
        let rndNum = document.getElementById('result').innerHTML
        this.innerHTML = rndNum;
        this.dataset.value = rndNum;
        document.getElementById('result').innerHTML = '';
        disableListItems();
        btn.style.display = 'initial';

        let listItems = document.querySelectorAll("li[data-value]");
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].classList.remove("highlight");

        }
        checkAscendingOrder();
      }
    }


let numbs = document.querySelectorAll('.numb')

numbs.forEach( e => {
    let number =  new Number(e.dataset.value)
    let gameNumber = new Number()
  })

function checkAscendingOrder() {
  let listItems = document.querySelectorAll('.numb');
  let numbers = [];
  let valid = true;
  let allFilled = true;

  listItems.forEach(function(item) {
    if (item.innerHTML) {
      numbers.push(parseInt(item.innerHTML));
    } else {
      allFilled = false;
    }
  });

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) {
      valid = false;
      break;
    }
  }

  console.log('Numbers:', numbers);
  console.log('Ascending Order:', valid);

  if (!valid) {
    document.getElementById('draw').style.display = 'none';
    document.getElementById('retry').style.display = 'initial';
    document.getElementById('message').innerHTML = 'You Lose!';
  } else if (allFilled) {
    document.getElementById('draw').style.display = 'none';
    document.getElementById('retry').style.display = 'initial';
    document.getElementById('message').innerHTML = 'You Win!';
  }

  return valid;
}

  let retryBtn = document.getElementById('retry');
retryBtn.addEventListener('click', function() {
  resetGame();
});

function resetGame() {
  listItems.forEach(function(item) {
    item.innerHTML = '';
    item.dataset.value = '';
    item.classList.remove('highlight', 'disabled', 'lower', 'higher');
  });
  document.getElementById('message').innerHTML = '';
  btn.style.display = 'initial';
  retryBtn.style.display = 'none';
}