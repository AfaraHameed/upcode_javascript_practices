var s = {
    name : "afara",
    age : 30 ,
    address : {
        city:"calicut",
        pin : 674477,
        district : "kerala"
    },
    greet:function(){
        console.log("Hello my name is "+this.name);
    }
}

console.log(s);
console.log(s.name);
console.log(typeof(s));
console.log(s.address);
s.greet();