const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for ( let i = 1; i <= 10; i++ ) {
  let guess = prompt( `I'm thinking of a number between 1 and 10. What is it?` );
  if ( parseInt(guess) === randomNumber ) {
  message = `It only took you ${i} tries! It was ${randomNumber}! :)`;
  break;
} else { 
  message = `Boo you failed. It was ${randomNumber}.`;
  }
}

main.innerHTML = `<h1>${message}</h1>`;

