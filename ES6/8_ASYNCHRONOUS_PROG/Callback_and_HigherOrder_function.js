console.clear();
// Callback function and Higher order function
// Using callback we can make our code non blocking
const printSquare = (x) => {
  console.log(`The square is ${x * x}`);
};

// const square = printSquare;
// square(10);


// When a function "higherOrderFunction" recives another function "callback" as an argument, then that function is called Higher order function.
// And the function "callback" which is recived as argument in a function "higherOrderFunction" is called Callback function.
const higherOrderFunction = (y, callback) => { 
  callback(y);
};

// higherOrderFunction(5, square);   
higherOrderFunction(5, printSquare);  