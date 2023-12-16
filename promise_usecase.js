
var productPromise = fetch('https://fakestoreapi.com/products');
/*productPromise.then((response)=>{
    console.log(response);
    response.json().then((productData)=>{
        console.log("productp",productData);
    })
}).catch((error)=>{
    console.log(error);
})*/

//Promise.all

var categoryPromise = fetch('https://fakestoreapi.com/products/categories')

/*
Promise.all([productPromise,categoryPromise]).then((values)=>{
    var productData = values[0]
    var categoriesData= values[1]
    productData.json().then((response)=>{
        console.log("products:",response);
    })
    categoriesData.json().then((response)=>{
        console.log(("categories:",response));
    })
})

*/

//Promise.any

Promise.any([productPromise,categoryPromise]).then((value)=>{
    const first_response = value
    first_response.json().then((response)=>{
        console.log("first response:",response);
    })
})


