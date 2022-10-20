var gcd = function (a, b) {
    if (b === 0) {
        console.log("The GCD is ".concat(a));
        return a;
    }
    return gcd(b, a % b);
};
gcd(8, 11);
