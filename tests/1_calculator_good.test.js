import Calculator from '../files/1_calculator'

// describe what you are testing
describe('contructor', () => {
  // describe context in which you are testing
  describe('when one of the arguments is not a number', () => {
    // says what happens
    it('throws a TypeError', () => {
      // just does not allow easy checking of both error type and error message :-(
      expect(() => { new Calculator(1, '8 and a half') }).toThrow('both arguments must be numbers')
      expect(() => { new Calculator(1, '8 and a half') }).toThrow(TypeError)
    })
  })

  // I would consider this test less important, but it's nice to have it
  describe('when both arguments are numbers', () => {
    it('creates a new instance', () => {
      expect(new Calculator(4, -5)).toBeInstanceOf(Calculator)
    })
  })
})

describe('divide()', () => {
  // the default happy path does not need to be wrapped in a describe block
  // would you prefer to have it wrapped still? why/why not?
  it('returns the result of dividing one number by the other', () => {
    const calculator = new Calculator(1, 2)
    expect(calculator.divide()).toBe(0.5)
  });

  // be specific when describing the context
  describe('when the denominator is zero', () => {
    it('raises an error', () => {
      const calculator = new Calculator(1, 0)
      // test specific errors
      expect(() => calculator.divide()).toThrow(RangeError)
    });
  })

  // exercies: change divide() to return NaN in case of division by zero and update tests
})

describe('sum()', () => {
  // this is getting a bit long, huh?
  // what is the alternative?
  it('returns sum of the two numbers', () => {
    // positive numbers
    let calculator = new Calculator(1, 8)
    expect(calculator.sum()).toBe(9)

    // negative numbers
    calculator = new Calculator(-1, -8)
    expect(calculator.sum()).toBe(-9)

    // positive and negative number
    calculator = new Calculator(1, -8)
    expect(calculator.sum()).toBe(-7)

    // negative and positive number
    calculator = new Calculator(-1, 8)
    expect(calculator.sum()).toBe(7)

    // positive number and 0
    calculator = new Calculator(1, 0)
    expect(calculator.sum()).toBe(1)
  })

  // what happens when we try to pass strings that are valid numbers?
})

// I would like to move const `calculator = new Calculator()` to beforeAll(), how can I do that?