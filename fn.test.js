const fn = require("./fn");

test('2더하기 3은 5야.', () => {
    expect(fn.add(2, 3)).toEqual(5);
});

test('ㅇㅇ', () => {
    // expect(fn.isPerfectNumber(28)).toBeFalsy();
    expect(fn.isPerfectNumber(28)).toBeTruthy();
});