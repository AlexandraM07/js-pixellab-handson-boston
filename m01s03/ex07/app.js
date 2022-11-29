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
    person.pets.species +
    ' si are ' +
    person.pets.age +
    ' ani.',
);

console.warn(`
Calculeaza si afiseaza (folosind anul curent)
  anul de nastere al animalului de pe pozitia 2.
`);
console.log((2022 - person.pets.age[2]).toString());

console.warn(`
Calculeaza si salveaza in variabila difference diferenta
de ani dintre persoana si animalul de pe pozitia
0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);
console.log((person.age - person.pets.age[0]).toString());

console.warn(`
Salveaza numele animalului
de pe pozitia 0 intr-o variabila numita petName.
`);

console.warn(`
Afiseaza propozitia: “Intre firstName
si petName este o diferenta de difference ani.”.
`);
