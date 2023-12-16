const promise1 = 20
const promise2 = Promise.resolve(30)
// const promise3 = setTimeout(()=>{
//     console.log("hai");
// },2000)
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,'foo')
})
Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log(error);
})