console.clear();
// Callback function and Higher order function
// Using callback we can make our code non blocking
const printSquare = (x) => {
  console.log(`The square is ${x * x}`);
};

const square = printSquare;
square(10);