const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  // test password
  test("password should be a string", () => {
    expect(typeof user.password).toBe('string');
  })
  // test age
  test("age should be number", () => {
    expect(typeof user.age).toBe('number');
  })
})

describe("User login/logout test", () => {
  
  // test login
  test("login User if password is correct", () => {
    user.login("test123");
    expect(user.loggedIn).toBe(true);
  })

  // test logout
  test("logs the User out", () => {
    user.logout();
    expect(user.loggedIn).toBe(false);
  })

})


