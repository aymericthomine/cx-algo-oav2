function newArray(array) {
    
    for(let i = 0; i < array.length; i++) {
      let min = i; 
      for(let j = i+1; j < array.length; j++) {
        if(array[j] < array[min]){
         min = j; 
        }
      }
      let invert = array[i];
      array[i] = array[min];
      array[min] = invert;
    }
    return array;
  };

console.log(newArray([4,6,2,8,5,7,3,1]))
console.log(newArray([14,67,25,89,35,67,36,10]))
console.log(newArray([1,2,1,3,2,3,1,2,3]))