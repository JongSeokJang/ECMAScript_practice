let str = "0123";
let obj = {number : 1};
let arr = Array.from(str, function(value){
  console.log("in function: this.number=>", this.number);
  console.log("in function: value=>", value);
  return parseInt(value) + this.number;
},obj);


console.log(arr);


let arr1 = Array(3) ;  // 배열 공간을 3개 만드는 것. 
let arr2 = Array.of(3);  // 배열을 하나 만들고 해당 공간에 3 이라는 값을 할당.

console.log(arr1, arr1[0], arr1.length);
console.log(arr2, arr2[0], arr2.length);

let fill_arr1 = [1,2,3,4]
let fill_arr2 = [1,2,3,4]
let fill_arr3 = [1,2,3,4]
let fill_arr4 = [1,2,3,4]
let fill_arr5 = [1,2,3,4]


fill_arr1.fill(5);
fill_arr2.fill(5, 1, 2);
fill_arr3.fill(5, 1, 3);
fill_arr4.fill(5, -3, 2);
fill_arr5.fill(5, 0, -2);

console.log(fill_arr1);
console.log(fill_arr2);
console.log(fill_arr3);
console.log(fill_arr4);
console.log(fill_arr5);


let x = 12;
var arr1 = [11,12,13];
var result = arr1.find(function(Value, index, array){
  
})
