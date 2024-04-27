const Scooter = require('../src/Scooter')

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

  // rent method
  test("checkout to User if scooter is charged above 20% and not broken", () =>{
    const scootey = new Scooter("Binghamton Station");
    scootey.charge = 75;
    scootey.isBroken = false;
  })
  // dock method

  // requestRepair method

  // charge method

})
