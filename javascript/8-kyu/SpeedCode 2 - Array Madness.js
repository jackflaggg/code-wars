// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
	const sumA = a.reduce((acc, elem) => acc + Math.pow(elem, 2),0);
	const sumB = b.reduce((acc, elem) => acc + Math.pow(elem, 3),0);
	return sumA > sumB
}