var a,b;
a=10;
b=30;
sum=a+b;
console.log("sum= "+sum);
document.writeln("sum= "+sum);

var x = "20";
document.writeln(typeof(toString(x)));
document.writeln(typeof(parseInt(32.4)));
document.writeln(typeof(parseFloat(32)));
document.writeln(typeof(parseInt(true)));

// number method ->toFixed and toPrecision
var n,m;
n=2.567894;
//return type of toFixed and toPrecision is string
document.write("<br>n.toFixed(): ",n.toFixed());  // 3
document.write("<br>n.toFixed(1): ",n.toFixed(1)); // 2.6
document.write("<br>n.toFixed(2): ",n.toFixed(2)); //  2.57
document.write("<br>n.n.toPrecision(3): ",n.toPrecision(3));// 2.57
document.write("<br>n.n.toPrecision(4): ",n.toPrecision(4)); //2.568
document.write("<br>");

// In JavaScript, .toFixed() is a method that is used to format a 
//number with a fixed number of decimal places. In this case, 
//2 is passed as an argument to specify that the number should be 
//rounded to 2 decimal places.

//toPrecision(3) is a method called on the variable n. The number 
//inside the parentheses (in this case, 3) specifies the desired 
//precision or the number of significant digits to be displayed.