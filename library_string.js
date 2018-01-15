
console.log("hi".repeat(6));

var str = "hi, I'm developer";
console.log(str.includes("I'm",4));

console.log(str.startsWith("hi",2));


let str1 = `hihihi!!!`;
let str2 = "hihihi!!!";


console.log( str1 === str2 )

let a = 20;
let b = 10;

let c = "javascript";
let str3 = `i\'m ${a+b} year\'s old and like ${c}`;

console.log(str3);



let tag = function(strings, ...values)
{
  let result = "";
  console.log("[in tag1], string: ", strings)
  console.log("[in tag2], values: ", values)
  for (let i = 0; i < strings.length; i++){
    result += strings[i];
    if( i < values.length){
      result += values[i];
    }
  }
  return result;
};

let a1 = 20;
let b1 = 10;
let c1 = "javascript";

let str4 = tag `i'm ${a1+b1} year's old like ${c1}`
let str5 = tag(str3)
console.log(str4)
console.log(str5);


console.log(`1
2
3`);
console.log("1\n2\n3");
/* Error
console.log("1
  2
  3");
  */




