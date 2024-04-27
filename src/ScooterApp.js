// require the User and Scooter classes - see where they can be used in ScooterApp.js
const Scooter = require('../src/Scooter');
const User = require("../src/User");

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = { 

    "Antigua": [
      new Scooter("Antigua"),
      new Scooter("Antigua"),
      new Scooter("Antigua")
    ],

    "Candyland": [
      new Scooter("Candyland"),
      new Scooter("Candyland"),
      new Scooter("Candyland"),
      new Scooter("Candyland")
    ],

    "Narnia": [
      new Scooter("Narnia"),
      new Scooter("Narnia"),
      new Scooter("Narnia"),
      new Scooter("Narnia"),
      new Scooter("Narnia")
    ]};

    this.registeredUsers = {
      "Alice1": new User("Alice1", "password1", 25),
      "Bob2": new User("Bob2", "password2", 30),
      "Charlie3": new User("Charlie3", "password3", 22),
      "David4": new User("David4", "password4", 19),
      "Eva5": new User("Eva5", "password5", 20),
      "Frank6": new User("Frank6", "password6", 28),
      "Grace7": new User("Grace7", "password7", 36),
      "Henry8": new User("Henry8", "password8", 32),
      "Ivy9": new User("Ivy9", "password9", 21),
      "Jack10": new User("Jack10", "password10", 29)
    };
  }

  registerUser(username, password, age) {
    // check the registeredUsers for existing user
    if (this.registeredUsers.hasOwnProperty(username) == false && age >= 18) {
      // create a new User
      const Usery = new User(username, password, age);
      console.log("User has been registered");
      // add to the registeredUsers obj
      this.registeredUsers[Usery.username] = Usery;
      return Usery;
    } else if (this.registeredUsers.hasOwnProperty(username) === false && age < 18) {
      return "Too young to create an account";
    } else if (this.registeredUsers.hasOwnProperty(username)) {
      return "Username already exists";
    } else {
      return "Error try again later";
    }
  }

  loginUser(username, password) {
    // check if username and password is on the registeredUsers 
    if (this.registeredUsers.hasOwnProperty(username) && this.registeredUsers[username].password === password) {
      this.registeredUsers[username].login(password);
      console.log("User has been logged in");
    } else if (this.registeredUsers.hasOwnProperty(username) && this.registerUsers[username].password !== password) {
      console.log("Password is incorrect");
    } else if (this.registeredUsers.hasOwnProperty(username) === false) {
      console.log("Username not found");
    } else {
      console.log("Error try again later");
    }
  }

  logoutUser(username) {
    if(this.registeredUsers[username].loggedIn) {
      this.registeredUsers[username].logout();
      console.log("User has been logged out");
    } else if (this.registeredUsers[username].loggedIn === false) {
      console.log("User is not logged in");
    } else {
      console.log("Error try again later");
    }
  }

  createScooter(station) {
    const Scoot = new Scooter(station);
    // add it to the list
    this.stations[station].push(Scoot);
    console.log("Created new scooter");
    return Scoot;
  }

  dockScooter(scooter, station) {
    // add the scooter to the stations list
    // dock it 
  }

}

module.exports = ScooterApp
