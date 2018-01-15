function myFuntcion(...args)
{
  console.log(args[1]);
  console.log(args);

}

myFuntcion(1,2,3,4,5);


let myArray = [1,2,4];
let a, b, c;
[a,b,c] = myArray;

console.log(a,b,c)


let object = {"name" : "종석", "age" : 27};
let name, age;
({name, age} = object);

console.log(name, age);

let object1 = {"name" : "종석", "age" : 27};
let x, y;
({name : x, age : y} = object1);

console.log(x, y)

//var circleArea = function(pi, r){
//  var area = pi * r * r;
//  return area;
//}

let circleArea = (pi, r) => {
  let area = pi * r * r;
  return area;
}

let result = circleArea(3,14, 3);
console.log(result)


var object3 = {
  f1 : function(){
    console.log(this);
    var f2 = function(){
      console.log(this);
    }
    f2();
    setTimeout(f2, 1000);
  }
}
object3.f1();


