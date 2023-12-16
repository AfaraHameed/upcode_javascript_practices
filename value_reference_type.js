/*var name = "upcode"
var cname = name
cname = "kiebot"
console.log(cname,name);

var students = {
    "name": "afara",
    "place":"pok",
    "date":"1/2/2020"
}

var toppers = students
toppers.date = "2/3/2023"
console.log('toppers:',toppers);
console.log('students:',students);*/

class Students {
  name = "";
  place = "";
  age = "";
  marks = [];
  constructor(name, place, age, marks) {
    this.name = name;
    this.place = place;
    this.age = age;
    this.marks = marks;
  }
  getAverage = () => {
    let sum = 0;
    for (var e of this.marks) {
      sum = sum + e;
    }
    return sum / this.marks.length;
  };
  highScore = () => {
    let max  = this.marks[0]
    for (var e of this.marks){
        if (e > max)
        max = e
    }
    return max
  }
}

var s1 = new Students("afara", "pkdv", 30, [80, 81, 80]);
console.log(s1.getAverage());
console.log(s1.highScore());

//spread operator

var weakelyMeating1={
  date:'1/2/2020',
  topic:'backend',
  students:['afara','pok','pkdv'],
}
var weakelyMeating2={...weakelyMeating1}
weakelyMeating2.date = '30/12/20203'

console.log('1',weakelyMeating1);
console.log('2',weakelyMeating2);

var studens1=['a','b','c']
var students2 = [...studens1]
students2.push('d')
console.log(studens1);
console.log(students2);

//rest operator

var addNumbers = (...numbers) => {
  var sum = 0;
  for (let e of numbers){
    sum = sum + e;
  }
  return sum
}

console.log('total:',addNumbers(12,2,3,4,5));