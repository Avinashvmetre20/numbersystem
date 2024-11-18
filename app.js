const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let k=0;
  let sum =0;
  let min = Infinity;
  let max = -Infinity
  let primeArray = [];
  for(let i=0;i<numbers.length;i++){
    let count =0;
    for(let j=2;j<numbers[i];j++){
        if(numbers[i]%j==0){
            count ++;
            break;
        }
    }
    if(count == 0){
        primeArray[k] = numbers[i];
        k++;
    }
  }
 for(let i=0;i<primeArray.length;i++){
    if(primeArray[i]<min){
        min=primeArray[i];
    }
    if(primeArray[i]>max){
        max = primeArray[i];
    }
    sum +=primeArray[i];
 }
  console.log(primeArray);
  console.log("Min: " +min);
  console.log("max: "+ max);
  console.log("sum :"+sum);
