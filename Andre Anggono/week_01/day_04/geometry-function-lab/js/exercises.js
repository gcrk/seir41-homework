// Part 1 - Rectangle
const rectangleA = {
	length: 4,
	width: 4
};

const isSquare = function (rectangle) {
	return rectangle.length === rectangle.width;
};

const areaRectangle = function (rectangle) {
	return rectangle.length * rectangle.width;
};

const perimeter = function (rectangle) {
	return 2 * (rectangle.length + rectangle.width);
};

// Part 2, Triangle
const triangleA = {
	sideA: 3,
	sideB: 4,
	sideC: 4
};

const isEquilateral = function (triangle) {
	return triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC;
};

const isIsosceles = function (triangle) {
	return triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC;
};

const areaTriangle = function (triangle) {
	//return 0.5 * triangle.sideC  * Math.sin()

	// find height of triangle - height = square Root ( C**2 - (0.5 * A)**2)
	const height = Math.sqrt(triangle.sideC ** 2 - (triangle.sideA / 2) ** 2);

	// area = 0.5 * base * height
	return (0.5 * triangle.sideA * height).toFixed(2);
};

const isObtuse = function (triangle) {
	// c**2 > a**2 + b**2
	return triangle.sideC ** 2 > triangle.sideA ** 2 + triangle.sideB ** 2;
};
