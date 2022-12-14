var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
Afiseaza in consola
folosind metoda forEach() numele fiecarui animal.
`);

person.pets.forEach(function (pet) {
  var petName = pet.name;

  console.log(pet.name);
});

// person.friends.forEach(function (friend, index, friends) {

//   var friendsLength = friends.length;

//   if (index === friendsLength - 1) {
//     punctuation = '.';
//   }

//   message += `${friend.surname}${punctuation}`;
// });
// console.log(message);

console.warn(`
Folosind o bucla for afiseaza suma anilor animalelor.
`);

var sumAge = 0;
for (var i = 0; i < person.pets.length; i++) {
  var petAge = person.pets[i].age;

  sumAge += petAge;
}
console.log(sumAge);

console.warn(`
Folosind forEach() afiseaza cate una pe linie
propozitiile: “Twix este
papagal si are 4 ani. Mars este caine si are… etc”.
`);

var message = '';
person.pets.forEach(function (pet) {
  var petName = person.pets.name;
  var petAge = person.pets.age;
  var petSpecies = person.pets.species;

  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`
Folosind o bucla for afiseaza cate una pe linie propozitiile:
“Intre Dragos si Twix este o diferenta de xx ani.
Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);

for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var diff = 2022 - person.birthYear - pet.age;

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${diff} ani. `,
  );
}

console.warn(`
Folosind o bucla for afiseaza in ordine inversa
numele animalelor din array sub
forma de propozitii: “Animalul meu se numeste xxxx.”.
`);

for (var i = person.pets.length - 1; i >= 0; i--) {
  var pet = person.pets[i];

  console.log(`Animalul meu se numeste ${pet.name}`);
}

console.warn(`
Folosind o bucla for afla care este cel mai in varsta animal si
afiseaza propozitia: “xxx este cel mai batran
animal pe care il am, dar intre noi este o diferenta de xx ani.”
`);

message = '';
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[3];
  var findTheOldest = person.pets[3];
  var diff = 2022 - person.birthYear - pet.age;

  message = `${pet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${diff} ani.`;
}
console.log(message);

console.warn(`
Folosind o bucla forEach afiseaza
propozitia: “Am papagal, caine, hamster si pisica.”.
`);

message = 'Am';
person.pets.forEach(function (pet, index) {
  var punctuation = ', ';
  var petsLength = person.pets[i];

  if (index === petsLength - 1) {
    punctuation = '.';
  }

  if (index === petsLength - 2) {
    punctuation = ' si ';
  }
  message = `Am ${pet.species} ${pet.species} ${pet.species} ${punctuation}`;
});

console.log(message);
