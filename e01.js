function newArray(array) {
   
    let arrayLength = array.length
      
    for(let i = 0; i < arrayLength;) {
       let invert = array[i];
    
       if(array[i] > array[i+1]){
         array[i] = array[i+1];
         array[i+1] = invert;
         i = 0;
       } else {
         i++
       }
     }
     return array;
   }
    
console.log(newArray([4,6,2,8,5,7,3,1]))
console.log(newArray([14,67,25,89,35,67,36,10]))
console.log(newArray([1,2,1,3,2,3,1,2,3]))