// var userInput = prompt('Introdu un numar');
// var referenceNumber = 20;
// var message = '';
// var messageElement = document.getElementById('message');
// var number = Number(userInput);
// number poate fi numar sau NaN
// isNaN(number) || userInput === null

// if (userInput === null || userInput.trim().length === 0 || isNaN(number)) {
//   message = 'Nu ai introdus un numar';
// } else {
//   if (number > referenceNumber) {
//     message = `Numarul este mai mare decat ${referenceNumber}`;
//   } else if (number === referenceNumber) {
//     message = `Numarul este egal cu ${referenceNumber}`;
//   } else {
//     message = `Numarul este mai mic decat ${referenceNumber}`;
//   }
// }

// console.log(message);
// messageElement.innerText = message;

var userInput = prompt('Introdu un nume');
var message = '';
var messageElement = document.getElementById('message01');

if (userInput === null) {
  message = 'Nu ai introdus un nume';
} else {
  message = 'Numele meu este: Alexandra Brezuica';
}

console.log(message);
messageElement.innerText = message;
