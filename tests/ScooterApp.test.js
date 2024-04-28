const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
const Scooter = require('../src/Scooter')

const scooterApp = new ScooterApp()
// ScooterApp tests here

// register user
describe('registerUser method tests', () => {
  test('Should return instance of User', () => {
    const response = scooterApp.registerUser('Joe Bloggs', 'test123', 21)
    expect(response).toBeInstanceOf(User)
  })
})

describe("login and logout tests", () => {
 test("Should login User", () => {
    scooterApp.loginUser("Alice1", "password1");
    expect(console.log).toHaveBeenCalledWith("User has been logged in");
  })

 test("Should throw password error", () => {
  scooterApp.loginUser("Alice1", "password2");
  expect(console.log).toHaveBeenCalledWith("Password is incorrect");
  })

  test("Should throw username error", () => {
    scooterApp.loginUser("Alice123", "password1");
    expect(console.log).toHaveBeenCalledWith("Username not found");
  })

  test("Should logout user", () => {
    scooterApp.loginUser("Alice1", "password1");
    scooterApp.logout("Alice1");
    expect(console.log).toHaveBeenCalledWith("User has been logged out");
  })

  test("Should throw error for user trying to logout when not logged in", () => {
    scooterApp.logout("Alice1");
    expect(console.log).toHaveBeenCalledWith("User is not logged in");
  })
})

describe("renting and docking tests", () => {
    let usery;
    let scoot;
  beforeEach(() => {
    scooterApp.registerUser('Joe Bloggs', 'test123', 21);
    scooterApp.createScooter("Narnia");
    scooterApp.rentScooter(scoot, usery);
  })

  // rent scooter
  test("Should throw error if scooter is already rented out", () => {
    scooterApp.rentScooter(scoot, usery);
    expect(console.log).toHaveBeenCalledWith("Scooter is currently rented out");
  })

  test("Should rent out scooter", () => {
    expect(console.log).toHaveBeenCalledWith("Scooter is successfully rented");
  })
  // dock scooter

  test("Should dock scooter", () => {
    scooterApp.dockScooter(scoot, "Narnia");
    expect(console.log).toHaveBeenCalledWith("Scooter is docked");
  })

  test("Should throw error if station does not exist", () => {
    scooterApp.dockScooter(scoot, "Old House");
    expect(console.log).toHaveBeenCalledWith("Station does not exist");
  })

  test("Should throw error if scooter is already docked", () => {
    scooterApp.dockScooter(scoot, "Narnia");
    scooterApp.dockScooter(scoot, "Narnia");
    expect(console.log).toHaveBeenCalledWith("Scooter is already docked at the station");
  })

})

