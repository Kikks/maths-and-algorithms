const gcd = (a: number, b: number) => {
	if (b === 0) {
		console.log(`The GCD is ${a}`);
		return a;
	}

	return gcd(b, a % b);
};

gcd(8, 11);
