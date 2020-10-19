function newArray(array) {
    
    let arrayLength = array.length;       
    let invert, i, j;                  
    
    for(i = 1; i < arrayLength; i++) {
      invert = array[i]
      j = i - 1
      while (j >= 0 && array[j] > invert) {
        array[j+1] = array[j]
        j--
      }
      array[j+1] = invert
    }
    return array
  }

console.log(newArray([4,6,2,8,5,7,3,1]))
console.log(newArray([14,67,25,89,35,67,36,10]))
console.log(newArray([1,2,1,3,2,3,1,2,3]))