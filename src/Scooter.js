class Scooter {
  // scooter code here
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    // UNSURE OF WHAT THIS IS FOR
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge > 20 && this.isBroken == false) {
      this.user = user.username;
      this.station = null;
    } else if (this.isBroken == true) {
      return "This scooter is broken. Please select another one from the dock.";
    } else if (this.charge <= 20) {
      return "This scooter needs charge. Please select another one from dock.";
    } else {
      return "Unknown error. Please redock scooter and select another one from the dock.";
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }
}


module.exports = Scooter
