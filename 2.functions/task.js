// Задание 1
  function getArrayParams(arr) {
    
   let min = arr[0];
   let max = [array.length - 1];
   let sum = 0;
  amount = 0;
    for (let i = 0; i < arr.length; i++) {
     
  
      if (arr[i] > max) {
        max = arr[i];
      }
  
      if (arr[i] < min) {
        min = arr[i];
      }
      sum += arr[i];
      amount++;
    }
   
    avg = Number((sum/amount).toFixed(2));
    return { min: min, max: max, avg: avg };
  }
  


  

// Задание 2
function worker(arr) {
  let sum = 0;
  for (i=0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0

   for (k=0; k < arrOfArr.length ; k++){
    if (worker (arrOfArr[k]) > max){
      max = worker (arrOfArr[k]) 
    }
  }
  return max;
}




// Задание 3
function worker2(arr) {
  let min1, max1, difference
  min1 = arr[0];
  max1 = min1;
    
  for (f=0; f < arr.length; ++f){
    if (arr[f] > max1) {
      max1 = arr[f];
    }
    if (arr[f] < min1) {
      min1 = arr[f];
    }
    difference = Math.abs(min1 - max1)
  }
  return difference;
}
