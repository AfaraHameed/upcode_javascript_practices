//setTimeout

function dummy(message1,message2) {
    console.log("Dummy function called ",message1,message2);
    setTimeout(dummy,1000,"this is","from inside dummy")
}

var timerId = setTimeout(dummy,3000,'hello','hai')
console.log('index');

//check specific condition to cancel setTimeout
var flag = false
if(flag==false){
    clearTimeout(timerId)
}

//using arrow function
setTimeout((n1,n2)=>{
    console.log(n1+n2);
},4000,1,2)