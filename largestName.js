/* 
John
Alexis

sixelA
*/

// let nameOne = "John"
// let nameTwo = "Alexis";

// let friendOneLength= nameOne.length;
// let friendTwoLength= nameTwo.length;

// if(friendOneLength > friendTwoLength){
//     console.log(nameOne.split("").reverse().join(""));
// }else{
//     console.log(nameTwo.split("").reverse().join(""))
// }

// function reverseName(nameOne, nameTwo){
//     let friendOneLength= nameOne.length;
//     let friendTwoLength= nameTwo.length;
    
//     if(friendOneLength > friendTwoLength){
//         return nameOne.split("").reverse().join("");
//     }else{
//         return nameTwo.split("").reverse().join("");
//     }
// }

// let result = reverseName("John", "Alexis");
// console.log(result);

// optional way for reversing a string

let str = "Alexis";
// length = 6
// last Index = 6-1=5
// str[5]

// for(let i=0; i<str.length;i++){
//     const element = str[i];
//     console.log(element)
// }
// console.log("----------------------")
// s+i+x+e+l+A =sixelA
// i
// x
// e
// l
// A
// box = ""
// "s" .... box= ""+"s"
// "i" .... box= "s"+"i"
// "x" .... box= "si"+"x"
// let reversedString ="";
// for(let i=str.length-1; i>=0; i--){
//     const element = str[i];
//     // console.log(element)
//     reversedString = reversedString+element;
// }
// console.log(reversedString)
function reverseName(nameOne, nameTwo){
    let friendOneLength= nameOne.length;
    let friendTwoLength= nameTwo.length;
    let largeName = ""
    if(friendOneLength > friendTwoLength){
        largeName = nameOne;
    }else{
       largeName = nameTwo
    }
    let reversedString ="";
    for(let i=str.length-1; i>=0; i--){
        const element = str[i];
        // console.log(element)
        reversedString = reversedString+element;
    }
    return reversedString
}

let result = reverseName("John", "Alexis");
console.log(result);