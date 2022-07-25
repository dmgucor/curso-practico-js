//Code for square
console.group("Squares");

function perimeterSquare(side) {
  return side * 4;
}

function areaSquare(side) {
  return side * side;
}
console.groupEnd();

//Code for triangle
console.group("Triangles");

function perimeterTriangle(side1, side2, base) {
  return side1 + side2 + base;
}

function areaTriangle(base, height) {
  return (base * height) / 2;
}

console.groupEnd();

//Code for circle
console.group("Circles");

function diamaterCircle(radius) {
  return radius * 2;
}

function perimeterCircle(radius) {
  return Math.PI * diamaterCircle(radius);
}

function areaCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

console.groupEnd();

//Interact with HTML

function calculatePerimeterSquare() {
  const input = document.getElementById("inputSquare");
  const value = input.value;

  const perimeter = perimeterSquare(value);
  alert(perimeter);
}

function calculateAreaSquare() {
  const input = document.getElementById("inputSquare");
  const value = input.value;

  const area = areaSquare(value);
  alert(area);
}

function calculatePerimeterTriangle() {
  const inputSide1 = document.getElementById("inputTriangleSide1");
  const inputSide2 = document.getElementById("inputTriangleSide2");
  const inputBase = document.getElementById("inputTriangleBase");
  const inputHeight = document.getElementById("inputTriangleHeight");

  const perimeter = perimeterTriangle(
    inputSide1.value,
    inputSide2.value,
    inputBase.value,
    inputHeight.value
  );
  alert(perimeter);
}

function calculateAreaTriangle() {
  const inputBase = document.getElementById("inputTriangleBase");
  const inputHeight = document.getElementById("inputTriangleHeight");

  const area = areaTriangle(inputBase.value, inputHeight.value);
  alert(area);
}

function calculatePerimeterCircle() {
  const input = document.getElementById("inputCircle");
  const value = input.value;

  const perimeter = perimeterCircle(value);
  alert(perimeter);
}

function calculateAreaCircle() {
  const input = document.getElementById("inputCircle");
  const value = input.value;

  const area = areaCircle(value);
  alert(area);
}

function getIsoscelesTriangleHeight(sideA, sideB, base) {
  if (sideA !== sideB) {
    console.log("not an isosceles triangle");
    return;
  }

  let height = Math.sqrt(Math.pow(sideA, 2) - Math.pow(base / 2, 2));
  return height;
}
