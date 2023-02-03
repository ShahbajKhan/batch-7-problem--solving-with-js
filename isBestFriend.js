/* 
{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }
 */
// true
/* 
{ name: "abul", friend: "kabul" },
{ name: "kabul", friend: "sabul" }
*/
// false
function isBestFriend(objectOne, objectTwo) {
  if (
    objectOne.name == objectTwo.friend &&
    objectTwo.name == objectOne.friend
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(
  isBestFriend({ name: "doe", friend: "alex" }, { name: "john", friend: "doe" })
);
