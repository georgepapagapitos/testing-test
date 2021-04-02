const sum = require('./sum');

describe('the sum function', () => {
  test('add 83 + 6 should be 89', () => {
    const result = sum(83, 6);
    expect(result).toBe(89);
  });

  test('should add positive to negative', () => {
    const result = sum(83, -6);
    expect(result).toBe(77);
  });

  test('add two negative numbers', () => {
    const result = sum(-83, -6)
    expect(result).toBe(-89);
  });

  test('should fail if I give it only one argument', () => {
    expect(() => {
      sum(83);
    }).toThrow("You're missing an argument!");
  });

  test('should convert number strings to numbers', () => {
    const result = sum('9', '3');
    expect(result).toBe(12);
  });
});

describe('some other function', () => {

})

