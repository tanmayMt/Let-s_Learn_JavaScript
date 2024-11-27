var m = parseInt(prompt("Enter the total marks"))

// if(m >= 80)
//     document.write("A");
// else if(m >= 60)
//     document.write("B");
//     else if(m >= 40)
//         document.write("C");
//         else
//             document.write("D");

if(m >= 80 && m <= 100)
    document.write("A");
else if(m >= 60 && m <= 80)
    document.write("B");
else if(m >= 40)
    document.write("C");
else
    document.write("D");