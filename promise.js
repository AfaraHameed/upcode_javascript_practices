var posts = [
  {
    id: "1",
    name: "afar",
    place: "pkdv",
  },
  {
    id: "2",
    name: "qwer",
    place: "dfdf",
  },
];
var getPost = () => {
  var li = "";
  for (var e of posts) {
    console.log(e.id, e.name, e.place);
  }
};

function addPost(post) {
  return new Promise((resolve, reject) => {
    posts.push(post);
    resolve(post);
  })
    .then((data) => {
      console.log(data);
      getPost();
    })
    .catch(() => {
      console.log("error occured");
    });
}

post = { id: "3", name: "fgh", place: "bbn" };
addPost(post);

var p = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve(posts);

    // reject({
    //   errorcode: 101,
    //   message: "network is not secure",
    // });
  }, 3000);
});

console.log("promise:",p);
p.then(() => {
  console.log("done...");
  console.log("promise after success:",p);
}).catch((error) => {
  console.log("promise rejected:", error);
  console.log("promise after fail:",p);

});


p.then((response)=>{
  console.log("recieved customer2",response);

})