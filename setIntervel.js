setInterval((message1,message2)=>{
    console.log(message1,message2);
},3000,"hai","upcode")

setTimeout((m1,m2)=> {
    console.log(m1,m2);
},1000,'afar','afaf')

var dummy = ()=>{
    console.log('dummy function');
}
setTimeout(dummy)
console.log("hai");
console.log("hello");

