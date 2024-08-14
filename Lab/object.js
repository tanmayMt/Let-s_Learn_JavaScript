const obj1 = {
    first:"bikram",
    last:"shaw"
}
console.log(obj1);

const obj2 = new Object({sub: "mern"})
console.log(obj2);
const oj3 = Object.create({defined_object: true});

function obj4(name, lname, eye){
    this.name=name;
    this.lname=lname;
    this.eye=eye;
    this.show = function(){
        return this.name+this.lname+this.eye
    }
}

const a1 = new obj4("a", "b", "c");
console.log(a1.show());

// nested object

const nested = {
    first:"bikram",
    last:"shaw",
    address:{
        city:"kolkata",
        street:"hh",
        streetDetails:[
            {st1: "st1value"},
            {st2: "st1value2"},
        ],
    }
}


//methods

const nested2 = {
    first: "bikram",
    last: "shaw",
    address: {
        city: "kolkata",
        street: "hh",
        streetDetails:[
            {st1: "st1value"},
            {st2: "st1value2"},
            "simplevalue",
            1,
        ],
        addressShow : function(){
            return this.streetDetails
        }
    },
    data : () =>{
        return this.first + this.last
    }
}


//accessing data from object

//1. for of 

for (const x in nested2.address ){
    console.log(x)
}

for (const x in nested2){
    console.log(x)
}

for (const x of nested2.address.streetDetails){
    console.log(x)
}

for (const x in nested2.address){
    console.log(nested2.address[x])
}

for (const x in nested2){
    console.log(nested2[x])
}

for (const x in nested2.address.streetDetails){
    console.log(nested2.address.streetDetails[x])
}

nested2.address.streetDetails.forEach((index, value, array)=>{
    console.log(' ${this} as ${index} of ${value} = ${array}')
}, '$o')