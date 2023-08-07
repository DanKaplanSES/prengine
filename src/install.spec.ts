export {};

test("should not parse simple strings", () => {
  function fn(s) { // NO ERROR: Parameter 's' implicitly has an 'any' type.
    console.log(s.subtr(3));
  }
  fn(42);

  expect(true).not.toBe(false);
});
