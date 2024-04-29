const ScooterApp = require("../src/ScooterApp");

// create instance of Scooter app 
const app = new ScooterApp();
// register the user and log them in
app.registerUser("Amanda123", "test123", 23);
app.loginUser("Amanda123", "test123");
// create a scooter instance 
const newScooter = app.createScooter("Narnia");
// rent and dock scooter 
app.rentScooter(newScooter,"Amanada123");
app.dockScooter(newScooter, "Candyland");
// logout user
app.logoutUser("Amanda123");