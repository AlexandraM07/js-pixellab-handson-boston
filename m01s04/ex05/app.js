console.warn(`
Folosind un bloc if si keywordul continue, afiseaza
mesajul "Acest numar este multiplu de 7." atunci cand este cazul.
`);

for (var i = 0; i <= 100; i++) {
  console.log(i);
  if (i % 7 === 0) {
    console.log('Acest numar este multiplu de 7.');
  }
}

console.warn(`
Folosind metoda prompt cere utilizatorului numarul
pentru care trebuie sa gasesti multipli si afiseaza
mesajul: “Acest numar este multiplu de x.”
`);

var userInput = prompt('Introdu numarul 7');
console.log('Acesta este multiplu de 7.');

console.warn(`
Folosind metoda prompt cere utilizatorului
numarul pentru care trebuie sa gasesti multipli
si afiseaza mesajul: “Acest numar este multiplu de x.”
Afla multiplii pentru acest numar intre 1 si 1000.
`);
