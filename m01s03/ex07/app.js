var person = {
  firstName: 'Alexandra',
  lastName: 'Brezuica',
  email: 'alexandrabbq@gmail.com',
  birthYear: 1999,
  pets: [
    {
      name: 'Bruno',
      species: 'Cat',
      age: 4,
    },
    {
      name: 'Max',
      species: 'Dog',
      age: 5,
    },
    {
      name: 'Codita',
      species: 'Fox',
      age: 6,
    },
  ],
  zipCode: '010196',
};

var cat = {
  petName: 'Bruno',
};

var difference = {
  difference: 19,
};

console.warn(`
Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”.
  Nu uita de proprietatea length a arrayului pets.
`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`
Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”
`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`
Afiseaza propozitia: “Unul din cele x animale ale mele
este species si are age ani.”
`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(`
Calculeaza si afiseaza (folosind anul curent)
  anul de nastere al animalului de pe pozitia 2.
`);
console.log((2022 - person.pets[2].age).toString());

console.warn(`
Calculeaza si salveaza in variabila difference diferenta
de ani dintre persoana si animalul de pe pozitia
0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);
console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.warn(`
Salveaza numele animalului
de pe pozitia 0 intr-o variabila numita petName.
`);

console.warn(`
Afiseaza propozitia: “Intre firstName
si petName este o diferenta de difference ani.”.
`);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    cat.petName +
    ' este o diferenta de ' +
    difference.difference +
    ' ani.',
);

console.warn(`
Afiseaza propozitia “ firstName,
  pet1, pet2, pet3 locuiesc toti in aceeasi
casa” (folosind bracket notation pe arrayul pets)
`);
console.log(
  person.firstName +
    ', ' +
    person.pets[0].name +
    ', ' +
    person.pets[1].name +
    ', ' +
    person.pets[2].name +
    ' locuiesc toti in aceeasi casa.',
);

console.warn(`
Calculeaza si afiseaza diferenta de varsta
dintre animalul de pe pozitia
0 si cel de pe pozitia 2
`);
console.log((person.pets[0].age - person.pets[2].age).toString());

console.warn(`
Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut
in birthYear si codul meu postal este: zipCode”
`);
console.log(
  'Ma numesc ' +
    person.firstName +
    ' ' +
    person.lastName +
    ', ' +
    ' m-am nascut in ' +
    person.birthYear +
    ' si codul meu postal este: ' +
    person.zipCode,
);

console.warn(`
Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.”
Foloseste anul curent pentru a efectua scaderea.
`);
console.log(
  'Animalele mele s-au nascut in ' +
    (2022 - person.pets[0].age).toString() +
    ', ' +
    (2022 - person.pets[1].age).toString() +
    ', ' +
    ' respectiv ' +
    (2022 - person.pets[2].age).toString() +
    '.',
);
