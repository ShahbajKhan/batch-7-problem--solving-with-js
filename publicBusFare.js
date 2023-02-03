/* 
50
55
112
235
365



0
1250
250
500
1000

*/
// for 50
/* 50----1
50----0 */
// for 55
/* 50----1 
 55 ----(55%50)===5
 so, 5 *250 = 1250

*/
// for 365
/* 365 ---> 50----1
        365 --- (365 % 50) == 15

        11 ----- 1 micro
        15 ------ (15%11) == 4

        4*250 ===1000 */

function publicBusFare(participants) {
  if (typeof participants != "number" || participants < 50) {
    return "Provide valid participants...";
  }
  let busSeatCapacity = 50;
  let microSeatCapacity = 11;

  let remaining = 0;
  // After calculating the amount of people who can travel by our bus
  // the value of remaining will be:-
  remaining = participants % busSeatCapacity;
// if(remaining >=11){

    // remaining = remaining % microSeatCapacity;
// }
  // After calculating the amount of people who can travel by our microbus
  // the value of remaining will be:-
  remaining = remaining % microSeatCapacity;
  
// Now calculate the total cost of public bus
  let costOfPublicBus = remaining * 250
  return costOfPublicBus;
}
console.log(publicBusFare(49));
