function highestGlobalMinimum(firstArr, secondArr) {
    var tempFirstArr = 0;
    var tempSecondArr = 0;
    
    for (var i=0; i<=firstArr.length-1; i++){
      if (i===0){
        tempFirstArr = firstArr[i];
      }else{
        if(firstArr[i]<tempFirstArr){
          tempFirstArr = firstArr[i];
        }
      }
    }
    
    for (var j=0; j<=secondArr.length-1; j++){
      if (j===0){
        tempSecondArr = secondArr[j];
      }else{
        if(secondArr[j]<tempSecondArr){
          tempSecondArr = secondArr[j];
        }
      }
    }
    
    if(tempFirstArr>tempSecondArr){
      return tempFirstArr;
    }else{
      return tempSecondArr;
    }
    
    
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5