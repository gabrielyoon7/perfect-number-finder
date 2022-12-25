const fn = require("./fn");
describe('1번 문제', () => {
    test('가장 작은 완전수', () => {
        expect(fn.findSmallestPerfectNumber()).toBe(6);
    });
});
describe('2번 문제', () => {
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
});
describe('3번 문제', () => {
    test('1번째 완전수', () => {
        expect(fn.findPerfectNumberOfK(1)).toBe(6);
    });
    test('2번째 완전수', () => {
        expect(fn.findPerfectNumberOfK(2)).toBe(28);
    });
    test('3번째 완전수', () => {
        expect(fn.findPerfectNumberOfK(3)).toBe(496);
    });
    test('4번째 완전수', () => {
        expect(fn.findPerfectNumberOfK(4)).toBe(8128);
    });
});
