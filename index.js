"use strict";
const validateISBN10 = (isbn) => {
    if (typeof isbn !== 'string' || isbn.length === 0) {
        return false;
    }
    const isbnDigits = isbn.replace(/\s/g, '').split('').map(Number);
    if (isbnDigits.length !== 10) {
        return false;
    }
    const lastDigit = isbnDigits.pop();
    if (typeof lastDigit !== 'number' &&
        (typeof lastDigit !== 'string' || lastDigit !== 'X')) {
        return false;
    }
    const sum = isbnDigits.reduce((acc, digit, index) => acc + digit * (index + 1), 0);
    return sum % 11 === (isNaN(lastDigit) ? 10 : lastDigit);
};
// Test
const value1 = "1112223339";
const value2 = "111222333";
const value3 = "1112223339X";
const value4 = "1234554321";
const value5 = "1234512345";
const value6 = "048665088X";
const value7 = "X123456788";
const value = [value1, value2, value3, value4, value5, value6, value7];
for (let i = 0; i < value.length; i++) {
    const isValidISBN = validateISBN10(value[i]);
    console.log(`Is ISBN (${value[i]})valid? ${isValidISBN}`);
}
