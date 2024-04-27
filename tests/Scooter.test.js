const Scooter = require('../src/Scooter');
const User = require("../src/User");

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {
  // tests here!
  let Amanda;
  let scootey;

  beforeEach(() => {
    Amanda = new User("Mandy2600", "8dippinDots", 19);
    scootey = new Scooter("Binghamton Station");  
  })

  // rent method
  test("checkout to User if scooter is charged above 20% and not broken", () =>{
    scootey.charge = 75;
    scootey.rent(Amanda);
    expect(scootey.user).toBe("Mandy2600");
    expect(scootey.station).toBe(null);
  })

  test("throw an error due to uncharged scooter", () => {
    scootey.charge = 15;
    expect(() => {
      scootey.rent(Amanda)
    }).toThrow("This scooter needs charge. Please select another one from dock.");
  })

  test("throw and error due to damanged scooter", () => {
    scootey.isBroken = true;
    expect(() => {
      scootey.rent(Amanda)
    }).toThrow("This scooter is broken. Please select another one from the dock.");
  })
  
  // dock method
  test("return scooter to station and clear user", () => {
    scootey.rent(Amanda);
    scootey.dock("Grayson Sqaure");
    expect(scootey.user).toBe(null);
    expect(scootey.station).toBe("Greyson Sqaure");
  })

  // requestRepair method

  // charge method

})
