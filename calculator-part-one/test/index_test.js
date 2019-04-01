const assert = require('assert');
const Calculate =  require('../index.js')


describe('Calculate', () => {
  describe('.add', () => {
    it('returns the value of two numbers added together', () => {
      //setup
          const num1 = 2;
          const num2 = 4;
          const expectededSum = 6;
      //exercise
          const actualSum = Calculate.add(num1, num2);
      //verify
          assert.equal(actualSum, expectededSum);
    })
  })

  describe('.subtract', () => {
    it('returns the difference of the first number minus the second number', () => {
      //Setup
        const input1 = 4;
        const input2 = 6;
        const expected = 2;
      //Exercise
        const result = Calculate.subtract(input1,input2);
      //Verify
        assert.equal(result, expected);
    })
  })

  describe('.multiply', () => {
    it('returns the product of two numbers', () => {
      //Setup
        const input1 = 2;
        const input2 = 3;
        const expected = 6;
      //Exercise
        const result = Calculate.multiply(input1, input2);
      //Verify
        assert.equal(result, expected);
    })
  })

  describe('.divide', () => {
    it('returns the first number divided by the second number', () => {
      //setup
      const dividend = 10;
      const divisor = 2;
      const expected = 5
      //exercise
      const result = Calculate.divide(dividend, divisor);
      //verify
      assert.equal(result, expected);
    })

    it('throws an error when the divisor is 0', () => {
      //setup
      const dividend = 10;
      const divisor = 0;
      const expected = Error;
      //exercise
      const result = () => { Calculate.divide(dividend, divisor) }
      //verify
      assert.throws(result, expected);
    })
  })

  describe('.absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
      //Setup
        const inputValue = -5;
        const expectedValue = 5;
      //exercise
        const result = Calculate.absoluteValue(inputValue);
      //verify
        assert.equal(result, expectedValue);
    })
  })
})