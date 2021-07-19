/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
  const diceRoll = ["images/d6/1.png", "images/d6/2.png", "images/d6/3.png", "images/d6/4.png", "images/d6/5.png", "images/d6/6.png"];

  const twelveRoll = ["images/numbers/1.png", "images/numbers/2.png", "images/numbers/3.png", "images/numbers/4.png", "images/numbers/5.png", "images/numbers/6.png", "images/numbers/7.png", "images/numbers/8.png", "images/numbers/9.png", "images/numbers/10.png", "images/numbers/11.png", "images/numbers/12.png",]

  const twentyRoll = ["images/numbers/1.png", "images/numbers/2.png", "images/numbers/3.png", "images/numbers/4.png", "images/numbers/5.png", "images/numbers/6.png", "images/numbers/7.png", "images/numbers/8.png", "images/numbers/9.png", "images/numbers/10.png", "images/numbers/11.png", "images/numbers/12.png", "images/numbers/13.png", "images/numbers/14.png", "images/numbers/15.png", "images/numbers/16.png", "images/numbers/17.png", "images/numbers/18.png", "images/numbers/19.png", "images/numbers/20.png",]

  let sixesData = {
    averagest: 0,
    averagestCounter: 0
  }

  let doubleSixesData = {
    averagest: 0,
    averagestCounter: 0
  }

/*******************
 * EVENT LISTENERS *
 *******************/

  const click1 = document.querySelector('#d6-roll');

  click1.addEventListener('click', clicker1);

  const click2 = document.querySelector('img#double-d6-roll-1');

  click2.addEventListener('click', clicker2);

  const click3 = document.querySelector('img#double-d6-roll-2');

  click3.addEventListener('click', clicker2);

  const button = document.querySelector('#reset-button');

  button.addEventListener('click', resetter);

  const click4 = document.querySelector('#d12-roll');

  click4.addEventListener('click', clicker3);

  const click5 = document.querySelector('#d20-roll');

  click5.addEventListener('click', clicker4);





/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function average(arr) {

  let finalizer = 0;
  const firstMode = document.querySelector('#d6-rolls-mode');

  for (i = 0; i < arr.length; i++) {
    sixesData.averagestCounter += arr[i];
  }

  sixesData.averagest = Number(Math.round(sixesData.averagestCounter / sixes.length * 10) / 10);
  console.log(sixesData.averagest);
  finalizer = sixesData.averagest;
  let modest = document.createTextNode(finalizer);
  firstMode.appendChild(modest)
  
} 

function clicker1() {
  let randomizer = Math.floor(Math.random() * diceRoll.length);
  document.getElementById("d6-roll").src = diceRoll[randomizer];
  const hero = (diceRoll[randomizer]);
  sixes.push(Number(hero[hero.length - 5]));
  average(sixes);
}

const meaning = document.getElementById('d6-rolls-mean');
const firstMean = document.createElement('h3');
// const firstMeanNum = document.createTextNode(averagest);
// meaning.appendChild(firstMeanNum);

// document.querySelector('#d6-rolls-mean').innerHTML('averagest');

function clicker2() {
  let randomizer2 = Math.floor(Math.random() * diceRoll.length);
  document.getElementById("double-d6-roll-1").src = diceRoll[randomizer2];
  const hero2 = (diceRoll[randomizer2]);
  let randomizer3 = Math.floor(Math.random() * diceRoll.length);
  document.getElementById("double-d6-roll-2").src = diceRoll[randomizer3];
  const hero3 = (diceRoll[randomizer3]);
  doubleSixes.push(Number(hero2[hero2.length - 5]));
  doubleSixes.push(Number(hero3[hero3.length - 5]));
  // console.log(doubleSixes);
}

function clicker3() {
  let multipleDigits = 0;
  let randomizer4 = Math.floor(Math.random() * twelveRoll.length);
  document.getElementById("d12-roll").src = twelveRoll[randomizer4];
  const hero4 = (twelveRoll[randomizer4]);
  let bucket = 0;
 
  for (i = 0; i < hero4.length; i++) {

      multipleDigits++

      if (hero4[i] = Number(hero4[i])) {
        twelves.push(parseInt(hero4[i]))
      }
  
    multipleDigits = 0;
  }

}

function clicker4() {
  let randomizer5 = Math.floor(Math.random() * twentyRoll.length);
  document.getElementById("d20-roll").src = twentyRoll[randomizer5];
  const hero5 = (twentyRoll[randomizer5]);
  twenties.push(Number(hero5[hero5.length -5]));
  console.log(hero5);
}


function resetter() {
  location.reload();
}

/****************
 * MATH SECTION *
 ****************/
