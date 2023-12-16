//object destructure
var students = {
    name:"afara",
    age:30,
    course:{
        duration:6,
        type:"web development"
    }
}

var {name,age,course:{duration}} = students
console.log(name,age,duration);

//object literal enhancement


var productName = "iphone"
var price = 50000

var product = {
    productName,
    price
}
console.log(product);


var cls = {
    name:'sslc',
    students:20,
    teacher:'asddf'
}
var { name , students , teacher} = cls
console.log(name,students,teacher);

var a = 10
var b = 20
var letters = {
    a,
    b
}
console.log(letters);

//array destructuring

let rankholders = ['a','b','c','d']
let [firstRankHolder,secondRankHolder , ...others]=rankholders

 //to get only third element
let [,,thirdRankHolder]=rankholders
console.log(thirdRankHolder);
 
console.log(firstRankHolder,secondRankHolder,others);

