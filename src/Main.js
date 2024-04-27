const Scooter = require("../src/Scooter");
const User = require("../src/User");

const Amanada = new User("LaLo", "test123", 23);
const scooty = new Scooter("Candyland");

scooty.charge = 15;
scooty.isBroken = true;
let test = scooty.rent(Amanada);
console.log(test);