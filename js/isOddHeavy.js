

function isOddHeavy(n){
    let sumOdd = 0; let countOdd = 0;
    let sumEven = 0; let countEven = 0;
    if(n.length === 0){
        return false;
    }
    for (let i = 0; i < n.length; i++) {
        if(n[i] % 2 === 0){
            sumEven += n[i];
            countEven ++;
        } else {
            sumOdd += n[i];
            countOdd ++;
        }
    }
    if(sumOdd > sumEven){
        return true;
    } else if (sumOdd < sumEven) {
        return false;
    } else if (countEven < countOdd){
        return true
    } else {
        return false;
    }
  }


  console.log(isOddHeavy( [11,4,9,2,3,10]));