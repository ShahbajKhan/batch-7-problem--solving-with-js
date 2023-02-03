

function radianToDegree(radian) {
    if(typeof radian != 'number'){
        return "Provide valid input"
    }
  const PI = 3.14159265359;
  const degree = (radian * (180 / PI)).toFixed(2);
  return degree;
}

function isJavaScriptFile(fileName){
    if(typeof fileName != 'string' || fileName.length == 0){
        return "Provide valid input"
    }
   if(fileName.endsWith('.js')){
    return true;
   }else{
   return false;
   }
   
}

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