const fn = require("./fn");

test('121', () => {
    expect(fn.isPerfectNumber(121)).toBeFalsy();
});
test('486', () => {
    expect(fn.isPerfectNumber(486)).toBeFalsy();
});
test('496', () => {
    expect(fn.isPerfectNumber(496)).toBeTruthy();
});
test('512', () => {
    expect(fn.isPerfectNumber(512)).toBeFalsy();
});