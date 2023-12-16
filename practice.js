var student = {
    name: "John",
    age: 25,
    city: "New York"
}

var {name , age , city} = student
console.log(name,age,city);

var a = 'aa'
var b = 'bb'

var st = {a,b}
console.log(st);

var student2 = {...student}
student2.age=30
console.log(student2);

var arr =[1,2,3,4]
var[x,y,...others] = arr
console.log(x,y,others);
var[,,z] = arr
console.log(z);

function dummy(...numbers){
    var sum = 0
    for (var e of numbers){
        sum = sum+e
    }

    return sum
}
console.log(dummy(1,2,3,4,5))