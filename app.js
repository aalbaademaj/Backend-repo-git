let age = 14;
let hasTicket = true;
let withAdult = true;

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
