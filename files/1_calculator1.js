export default class Calculator {
  // throwing an error might not be the best solution, but that is ok for our example
  validateInputs(numberA, numberB) {
    if (isNaN(numberA) || isNaN(numberB)) {
      throw new TypeError('both arguments must be numbers')
    }
  }

  divide(nominator, denominator) {
    this.validateInputs(nominator, denominator)

    if (denominator == 0) {
      throw new RangeError('denominator cannot be zero')
    }

    return nominator / denominator
  }

  sum(numberA, numberB) {
    this.validateInputs(numberA, numberB)

    return numberA + numberB
  }
}