const calculateRectangleArea = (width, length) => {
  return width * length;
};

console.warn(`
Calculeaza suprafata de tapet necesara pentru o camera de
6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista
o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.
“Suprafata de tapet necesara este: xxx metri patrati.”
`);

const longWallSurface = calculateRectangleArea(6, 2.5);
const shortWallSurface = calculateRectangleArea(4, 2.5);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(2.2, 1.5);
const windowSurface = calculateRectangleArea(2, 1.5);

// console.log((totalWallSurface - doorSurface - windowSurface).toString());
const wallpaperSurface = totalWallSurface - doorSurface - windowSurface;
console.log(`Suprafata de tapet este: ${wallpaperSurface} metri patrati.`);

console.warn(`
Creaza o functie wrapper numita calculateSquareArea() pentru
calculateRectangleArea() care sa primeasca ca parametru latura unui patrat
si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i
aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.
`);
const calculateSquareArea = (width) => {
  const squareArea = calculateRectangleArea(width, width);

  return squareArea;
};

console.warn(`
Calculeaza suprafata de tapet necesara pentru o camera de
12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista o usa de 3
pe 2 si o suprafata de ferestre de 3 pe 2. “Suprafata de
tapet necesara este xxx metri patrati.”
`);
const bigWallSurface = calculateRectangleArea(12, 2.5);
const smallWallSurface = calculateRectangleArea(9, 2.5);
const absoluteWallSurface = (bigWallSurface + smallWallSurface) * 2;
const gateSurface = calculateRectangleArea(3, 2);
const lancetSurface = calculateRectangleArea(3, 2);
const coverSurface = absoluteWallSurface - gateSurface - lancetSurface;

console.log(`Suprafata de tapet necesara este: ${coverSurface} metri patrati.`);

console.warn(`
Creaza o functie wrapper pentru calculateRectangleArea() care
sa primeasca 4 parametrii: latimea si lungimea unui dreptunghi initial,
apoi latimea si lungimea altui dreptunghi. Functia se va
numi aggregateSurfaceArea().
`);

const aggregateSurfaceArea = () => {
  const rectangle1area = calculateRectangleArea(length, width);
  const rectangle2area = calculateRectangleArea(length, width);

  return rectangle1area + rectangle2area;
};

console.warn(`
Folosind aceasta noua functie calculeaza suprafata totala a
doua dreptunghiuri de 48 pe 92 si 51 pe 102.
`);
const rectangle1area = calculateRectangleArea(48, 92);
const rectangle2area = calculateRectangleArea(51, 102);

console.log(`${rectangle1area} + ${rectangle2area}`);
