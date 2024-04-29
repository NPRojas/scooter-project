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

const logSpy = jest.spyOn(console, "log");

describe("login and logout tests", () => {
 test("Should login User", () => {
    scooterApp.loginUser("Alice1", "password1");
    expect(logSpy).toHaveBeenCalledWith("User has been logged in");
  })

 test("Should throw password error", () => {
  scooterApp.loginUser("Alice1", "password2");
  expect(logSpy).toHaveBeenCalledWith("Password is incorrect");
  })

  test("Should throw username error", () => {
    scooterApp.loginUser("Alice123", "password1");
    expect(logSpy).toHaveBeenCalledWith("Username not found");
  })

  test("Should logout user", () => {
    scooterApp.loginUser("Alice1", "password1");
    scooterApp.logoutUser("Alice1");
    expect(logSpy).toHaveBeenCalledWith("User has been logged out");
  })

  test("Should throw error for user trying to logout when not logged in", () => {
    scooterApp.logoutUser("Alice1");
    expect(logSpy).toHaveBeenCalledWith("User is not logged in");
  })
})

describe("renting and docking tests", () => {
    let usery;
    let scoot;
  beforeEach(() => {
    usery = scooterApp.registerUser('Joe Bloggs', 'test123', 21);
    scoot = scooterApp.createScooter("Narnia");
    scooterApp.rentScooter(scoot, usery);
   
  })
  // rent scooter
  test("Should throw error if scooter is already rented out", () => {
    scooterApp.rentScooter(scoot, usery);
    expect(logSpy).toHaveBeenCalledWith("Scooter is currently rented out");
  })

  test("Should rent out scooter", () => {
    expect(logSpy).toHaveBeenCalledWith("Scooter is successfully rented");
  })
  // dock scooter

  test("Should dock scooter", () => {
    scooterApp.dockScooter(scoot, "Narnia");
    expect(logSpy).toHaveBeenCalledWith("Scooter is docked");
  })

  test("Should throw error if station does not exist", () => {
    scooterApp.dockScooter(scoot, "Old House");
    expect(logSpy).toHaveBeenCalledWith("Station does not exist");
  })

  test("Should throw error if scooter is already docked", () => {
    scooterApp.dockScooter(scoot, "Narnia");
    scooterApp.dockScooter(scoot, "Narnia");
    expect(logSpy).toHaveBeenCalledWith("Scooter is already docked at the station");
  })

})

