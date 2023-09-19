import Calculator from '../files/1_calculator1'

let calculator;

beforeAll(() => {
  calculator = new Calculator
});

// describe what you are testing
describe('validateInputs', () => {
  // describe context in which you are testing
  describe('when one of the arguments is not a number', () => {
    // says what happens
    it('throws a TypeError', () => {
      expect(() => { calculator.validateInputs(1, '8 and a half') }).toThrow('both arguments must be numbers')
      expect(() => { calculator.validateInputs(1, '8 and a half') }).toThrow(TypeError)
    })
  })

  // I would consider this test less important, but it's nice to have it
  describe('when both arguments are numbers', () => {
    it('does not throw any errors', () => {
      // why am I using general error all of a sugged?
      expect(() => calculator.validateInputs(4, -5)).not.toThrow(Error)
    })
  })
})

describe('divide()', () => {
  // the default happy path does not need to be wrapped in a describe block
  // would you prefer to have it wrapped still? why/why not?
  it('returns the result of dividing one number by the other', () => {
    expect(calculator.divide(1, 2)).toBe(0.5)
  });

  // be specific when describing the context
  describe('when the denominator is zero', () => {
    it('raises an error', () => {
      // test specific errors
      expect(() => calculator.divide(1, 0)).toThrow(RangeError)
    });
  })

  // exercies: change divide() to return NaN in case of division by zero and update tests
})

describe('sum()', () => {
  // this is getting a bit long, huh?
  // what is the alternative?
  it('returns sum of the two numbers', () => {
    // positive numbers
    expect(calculator.sum(1, 8)).toBe(9)

    // negative numbers
    expect(calculator.sum(-1, -8)).toBe(-9)

    // positive and negative number
    expect(calculator.sum(1, -8)).toBe(-7)

    // negative and positive number
    expect(calculator.sum(-1, 8)).toBe(7)

    // positive number and 0
    expect(calculator.sum(1, 0)).toBe(1)
  })

  // what happens when we try to pass strings that are valid numbers?
})

// I would like to move const `calculator = new Calculator()` to beforeAll(), how can I do that?