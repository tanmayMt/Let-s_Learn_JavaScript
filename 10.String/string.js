var fn=prompt("Enter first Name");
var ln=prompt("Enter last Name");

var fn = fn+ln;
document.write("Full Name: "+fn);

l=fn.length;
document.write("Length: "+l);
document.write(typeof(l));

var s = "Tanmay";
//       012345
document.write("<br>");
document.write("s.slice(1): ",s.slice(1));
document.write("<br>");
document.write("s.slice(1,4): ",s.slice(1,4));
document.write("<br>");
document.write("s.charAt(1): ",s.charAt(1));
document.write("s.toUpperCase(): ",s.toUpperCase());
