const iterative_gcd = (a: number, b: number) => {
	while (b !== 0) {
		[a, b] = [b, a % b];
	}

	console.log(a);
	return a;
};

iterative_gcd(11, 8);
