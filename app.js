let checkBtn = document.querySelector('#btn');
let result = document.querySelector('#result');

function checkWord() {
  let word = document.querySelector('.input-text').value;
  let wordLength = word.length;
  let sentenceStart = word
    .substring(0, Math.floor(wordLength / 2))
    .toLowerCase();
  let sentenceEnd = word
    .substring(wordLength - Math.floor(wordLength / 2))
    .toLowerCase();

//   let flip = sentenceEnd.split('').reverse().join('');

// ES6 Syntax
let flip = [...sentenceEnd].reverse().join('');
if(sentenceStart === flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome word`;
} else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome word`;
}
//   alert(flip);
}

checkBtn.addEventListener('click', checkWord);
