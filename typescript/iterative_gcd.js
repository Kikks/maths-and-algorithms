var iterative_gcd = function (a, b) {
    var _a;
    while (b !== 0) {
        _a = [b, a % b], a = _a[0], b = _a[1];
    }
    console.log(a);
    return a;
};
iterative_gcd(11, 8);
