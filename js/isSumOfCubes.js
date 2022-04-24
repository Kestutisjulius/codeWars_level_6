function isSumOfCubes(s){
    let n = ''; let temp = 0; let tempX = 0;
    let nArr = [];
    for(let i = 0; i < s.length; i++){

        temp = +s[i];
        tempX = +s[i+1];

        if(typeof temp == 'number') {
            n += temp;
        }
        if(typeof tempX != 'number'){
            nArr.push(n);
            n = '';
        }

    }
    return n;
  }

  console.log(isSumOfCubes('aqdf&0#1xyz!22[153(777.777'));