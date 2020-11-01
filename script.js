//Convert any text to whale language! 

let input = 'Hi, Human!';
let arr2  = input.split("");
let vowels= ["a","e","i","o","u"];
// console.log(arr );
let resultArray =[];
function vowelFinder(arr){
  for (let i=0; i<arr.length; i++){
     for(let j=0; j<vowels.length; j++){
     //console.log(vowels[j])
      if(arr[i]===vowels[j]){
        resultArray.push(arr[i])
       }
     }
  }return arr;
}
vowelFinder(arr2);
console.log(resultArray)



/* //Convert any text to whale language! 
​
let input = 'Hi, Human!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
​
function whale(inputStr) {
  let result = [];
​
  for(let i=0; i< inputStr.length; i++) {
    for(let j=0; j< vowels.length; j++) {
      if(inputStr[i].toLowerCase() === vowels[j]) {
        result.push(inputStr[i]);
      }
    }
  }
​
  let resultArr = [];
  for(let i=0; i< result.length; i++) {
    if(result[i] === "u") {
      resultArr.push("u", "u");
    } else if(result[i] === "e") {
      resultArr.push("e", "e");
    } else {
      resultArr.push(result[i]);
    }
  }
​
  console.log(resultArr);
​
​
  let str = "";
  for(let a =0; a < resultArr.length; a++) {
    str = str + resultArr[a].toUpperCase();
  }
  console.log(str);
}
​
whale(input);
whale("turpentine and turtles");
whale("a whale of a deal!"); */