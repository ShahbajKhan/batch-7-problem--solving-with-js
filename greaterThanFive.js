/* 
ইনপুটঃ [-1,2,-3,4,5,6,-7,8,-9,10]

আউটপুটঃ 3

*/

// let num = 4;

// if (num > 5) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// let numbers = [-1,2,-3,4,5,6,-7,8,-9,10];
// let count = 0;

// for(let i= 0; i< numbers.length; i++){
//     const element = numbers[i];
//     // console.log(element)
//     if(element > 5){
//         // console.log("YES");
//         count = count +1;
//     }
//     else{
//         // console.log("NO");
//     }
// }
// console.log(count);

function greaterThanFive(numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 5) {
        count =count +1
    }
    // count++;
    // count =count +1
    // count+=1
  }
  return count;
}

let result = greaterThanFive([-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]);
console.log(result);
