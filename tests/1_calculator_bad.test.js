import Calculator from '../files/1_calculator'

// there are no groups in the tests

// just adding the name of the function is not enough
test('divide', () => {
  const calculator = new Calculator(1, 2)
  expect(calculator.divide()).toBe(1 / 2)
});

// exercies: change divide() to return NaN in case of division by zero and update tests

it('sum', () => {
  const calculator = new Calculator(1, 8)
  expect(calculator.sum()).toBe(1 + 8)
})

it('sum negative', () => {
  const calculator = new Calculator(1, -8)
  expect(calculator.sum()).toBe(1 - 8)
})

// test specific errors
test('Error', () => {
  expect(() => { new Calculator(1, '8 and a half') }).toThrow(Error)
})

// be specific in what happens and under what conditions
test('divide numberB zero', () => {
 const calculator = new Calculator(1, 0)
 // test specific errors
 // wanna guess what error is thrown here?
 expect(calculator.divide).toThrow(Error)
});
