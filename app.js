let age = 14;
let hasTicket = true;
let withAdult = true;

// If och if else satsen
if (age >= 15 && hasTicket == true) {
  console.log('Välkomen in i BIO!');
} else {
  console.log('Du är inte välkomen in i BIO!!!!!');
}

const isLoggedIn = true;
const userrole = 'admin';

if (isLoggedIn === true) {
  if (userrole === 'admin') {
    console.log('Välkomen till Adminpanelen');
  } else {
    console.log('Välkomen vanlig användare!');
  }
} else {
  console.log('Du måste logga in första!');
}

// Switchar
const trafficLight = 'gul';

switch (trafficLight) {
  case 'grön':
    console.log('kör');
    break;
  case 'gul':
    console.log('gör dig redo');
    break;
  case 'röd':
    console.log('stanna!');
    break;
  default:
    console.log('okänd signal');
}

const weather = 'regn';

switch (weather) {
  case 'regn':
    console.log('Ta med ett paraply!');
    break;
  case 'sol':
    console.log('Glöm inte solglasögon!');
    break;
  case 'snö':
    console.log('Ta på dig en varm jacka!');
    break;

  default:
    console.log('Kolla väderappen igen!');
}

// For och for each loopen
for (i = 1; i < 6; i++) {
  console.log(i);
}

const fruits = ['banan', 'äpple', 'körsbär'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loopen
let energi = 3;

while (energi > 0) {
  console.log('Sprang ett varv! Energi kvar: ' + energi);
  energi--;
}
console.log('Slut på energi! Du måste vila.');

for (let i = 3; i > 0; i--) {
  console.log('Sprang ett varv! Energi kvar: ' + i);
}
console.log('Slut på energi! Du måste vila.');

// Array och loopar
let elever = [
  {
    name: 'Anna',
    poang: 85,
  },
  {
    name: 'Ali',
    poang: 1000,
  },
  {
    name: 'Björn',
    poang: 10,
  },
];

for (let i = 0; i < elever.length; i++) {
  console.log(elever[i].name + '-' + elever[i].poang);
}

// for of loop

for (const elev of elever) {
  console.log(elev.name);
}

// Raketnedräkning

for (let i = 5; i >= 1; i--) {
  if (i === 3) {
    console.log('Sekunder kvar: 3 - Halvvägs kvar!');
  } else {
    console.log('Sekunder kvar: ' + i);
  }
}
console.log('LIFTOFF!');
