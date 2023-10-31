import CONSTANTS from "../Constants/Constants.js";
class Validation {
  isValidCarName(carNameString) {
    const carNames = carNameString.split(",");
    let isNameTooLong = false;

    carNames.forEach((carName) => {
      if (carName.length > CONSTANTS.ERROR.MAXNAMELENGTH) {
        isNameTooLong = true;
      }
    });

    if (isNameTooLong) {
      throw new Error(CONSTANTS.ERROR.NAMETOOLONG);
    }
  }

  isSameCarName(carNameString) {
    const carNames = carNameString.split(",");
    const carNameNum = carNames.length;
    const isSameName = carNameNum !== new Set(carNames).size;

    if (isSameName) {
      throw new Error(CONSTANTS.ERROR.SAMECARNAME);
    }
  }

  isValidTrialNumber(trialNumber) {
    let isNumber = isNaN(trialNumber);
    if (isNumber) {
      throw new Error(CONSTANTS.ERROR.ISNUMBER);
    }
  }
}
export default Validation;
