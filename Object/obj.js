// // object program example
// // what is Object?
// // How to create an object?
// // How to access object properties?
// // Constructor, this keyword
// // function inside constructor

// // declaring variables and using them
// var name = "Anisul Islam";
// var age = 27;
// var cgpa = 3.92;
// var lang = ["Bengali", "English"];

// // declaring objects -> object is one type of variable that can store differnt types of variables
// var student1 = {
//     // property : value
//     name: "Anisul Islam",
//     age: 27,
//     cgpa: 3.92,
//     lang: ["Bengali", "English"],
// }

// var student2 = {
//     // property : value
//     name: "Rokib",
//     age: 28,
//     cgpa: 2.92,
//     lang: ["Hindi", "Bengali"],
// }

// var student3 = {
//     // property : value
//     name: "Sweety",
//     age: 25,
//     cgpa: 4.92,
//     lang: ["Bengali", "Urdu"],
// }
// // printing object property's value
// // object properties can be accessed in two ways: objectName.propertyName or objectName["propertyName"]
// console.log(student1.name);
// console.log(student1[name]);
// console.log(student1);



// console.log("using constructor");
// adding constructor and simplifying the task

function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    // adding function inside the constructor
    this.display = function () {
        document.write(this.name);
        document.write(this.age);
        document.write(this.lang,"<br>");
    }
    
}

var s1 = new Student("Anisul", 27, 3.92, ["Bengali", "English"]);
var s2 = new Student("Rabi", 23, 4.92, ["Bengali", "Hiindi"]);
var s3 = new Student("Milon", 29, 4.68, ["Bengali", "Hindi"]);

s1.display();
s2.display();
