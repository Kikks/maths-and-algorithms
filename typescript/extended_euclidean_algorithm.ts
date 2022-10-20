import * as readline from "readline-sync";

const extendedEuclideanAlgorithm = (a: number, b: number) => {
	if (b === 0) return [a, 1, 0];

	const [gcd, x1, y1] = extendedEuclideanAlgorithm(b, a % b);
	const x = y1;
	const y = x1 - Math.floor(a / b) * y1;
	return [gcd, x, y];
};

const getInverse = (number: number, modulo: number) => {
	if (number < 0 || modulo < 0) return "Please supply only positive numbers";
	if (isNaN(number) || isNaN(modulo)) return "You must supply only numbers";

	const [, x] = extendedEuclideanAlgorithm(number, modulo);

	return `The inverse of ${number} mod ${modulo} is: ${x < 0 ? x + modulo : x}`;
};

console.log(
	getInverse(
		Number(
			readline.question("What number would you like to find the inverse of? ")
		),
		Number(readline.question("What modulus will you be working in? "))
	)
);
