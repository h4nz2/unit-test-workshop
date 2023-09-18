// create a more complicated case where setup is needed(creating objects, mocks etc.)
export default class Calculator {
  #numberA
  #numberB

  constructor(numberA, numberB) {
    if (isNaN(numberA) || isNaN(numberB)) {
      throw new TypeError('both arguments must be numbers')
    }

    this.#numberA = numberA
    this.#numberB = numberB
  }

  divide() {
    if (this.#numberB == 0) {
      throw new RangeError('denominator cannot be zero')
    }

    return this.#numberA / this.#numberB
  }

  sum() {
    return this.#numberA + this.#numberB
  }
}