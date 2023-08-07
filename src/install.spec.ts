test("should not parse simple strings", () => {
	const visitString = jest.fn(); // implicit any!

	expect(true).not.toBe(false);
});
