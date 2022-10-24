const compareArrays = (a, b) => {
    if (a.length !== b.length) return false;
    else { 
      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
  };
  
  let array1 = [21, null, 33];
  let array2 = [21, 22, 23];
  let array3 = [21, undefined, 33];
  let array4 = [21, 22, 23];
  
  console.log(compareArrays(array1, array2)); //false
  console.log(compareArrays(array1, array3)); //false
  console.log(compareArrays(array2, array4)); //true