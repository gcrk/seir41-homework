console.log("Geometry Function Lab");
// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const rectangleA = {
  length:4,
  width:20
}
//isSquare or not:
const isSquare = function(rectangle){
  if (rectangle.length === rectangle.width){
    return "Square";
  }else {
    return "Not a Square";
  }
};
console.log(isSquare(rectangleA));

// Area of a rectangle:
const area = function(length,width){
  return rectangleA.width * rectangleA.length;
}
console.log(area(rectangleA));

// Perimeter:

const perimeter = function(length,width){
  return 2*(rectangleA.width + rectangleA.length);

}
console.log(perimeter(rectangleA));


// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 6
};

const isEquilateral = function(triangle){
  if (triangle.sideA === triangle.sideB && triangle.sideC === triangle.sideA){
    return "It's a equilateral triangle";
  }else{
    return "It's not a equilateral triangle";
  }
};
console.log(isEquilateral(triangleA));

// isIsosceles or not:

const isIsosceles = function(triangle){
  if(triangle.sideA === triangle.sideB||triangle.sideA === triangle.sideC||triangle.sideC === triangle.sideB){
    return "It's a Isosceles triangle";
  }else{
    return "It's not a Isosceles triangle"
  }
};
console.log(isIsosceles(triangleA));

// Area of a triangle:

const AreaOfTriangle =function(triangle){
  const p = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
  const area = Math.sqrt(p*(p-triangle.sideA)*(p-triangle.sideB)*(p-triangle.sideC));
  return area;

};
console.log(AreaOfTriangle(triangleA));

// isObtuse:

const isObtuse = function(triangle){
  if(triangle.sideA !== triangle.sideB && triangle.sideA !== triangle.sideC){
    return true;
  }else {
    return false;
  }
};
console.log( isObtuse(triangleA));

// The Cash Register:

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

let items = Object.values(cartForParty).map((i) => Number(i)); //converts objects into array and string value to numbers
console.log(items);
const cashRegister = function(cartForParty){
  let total = 0;
for (i = 0; i < items.length; i++){
     total = total + items[i];
}
console.log(total)
};
cashRegister(cartForParty);

// Credit Card Validation:


var sum=0;
function validateCreditCard(number){
var numberForCal=number.replace(/-/g,'');   //removing '-' from number
console.log(numberForCal);
if(numberForCal.length===16){     //checking whether length is equal to 16
     if(numberForCal.match(/^\d+$/)!== null){   //checking whether all are digits if null number contains characters other than digits
         if(numberForCal%2===0){  //checking whether last digit is even
           var numberTrial=numberForCal;
           while (numberTrial) {
           sum +=  numberTrial% 10;
           numberTrial = Math.floor(numberTrial / 10);
          }
          if(sum>16){  //checking whether sum of digits is greater than 16
             var first = numberForCal%10;
             while (numberForCal) {  //checking whether number contains same digit like 1111 if not return true means valid credit
               if (numberForCal % 10 !== first)
                 return true;
                 numberForCal = Math.floor(numberForCal / 10);
             }
             console.log("only one type of number");
             return false;
          }
          else{
              console.log("sum is not greater than 16");
          }

        }
        else{
        console.log("last digit should be even");
        }
    }
    else{
        console.log("invalid characters");
    }

}
else{
  console.log("enter 16 digit number");
 }
}
validateCreditCard('AA11-1111-1111-9997');
