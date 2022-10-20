"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var extendedEuclideanAlgorithm = function (a, b) {
    if (b === 0)
        return [a, 1, 0];
    var _a = extendedEuclideanAlgorithm(b, a % b), gcd = _a[0], x1 = _a[1], y1 = _a[2];
    var x = y1;
    var y = x1 - Math.floor(a / b) * y1;
    return [gcd, x, y];
};
var getInverse = function (number, modulo) {
    if (number < 0 || modulo < 0)
        return "Please supply only positive numbers";
    if (isNaN(number) || isNaN(modulo))
        return "You must supply only numbers";
    var _a = extendedEuclideanAlgorithm(number, modulo), x = _a[1];
    return "The inverse of ".concat(number, " mod ").concat(modulo, " is: ").concat(x < 0 ? x + modulo : x);
};
console.log(getInverse(Number(readline.question("What number would you like to find the inverse of? ")), Number(readline.question("What modulus will you be working in? "))));
