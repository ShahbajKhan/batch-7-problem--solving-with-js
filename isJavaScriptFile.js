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


let result = isJavaScriptFile("");
console.log(result);

// return fileName.endsWith('.js')
// lastIndex = length -1---->s
// length -2 --->j
// length -3 ----.

// {if(str[str.length-1] == 's'){
//     if(str[str.length-2] == 'j'){
//         if(str[str.length-3] == '.')
//         return true
//     }
// }
// return false;}