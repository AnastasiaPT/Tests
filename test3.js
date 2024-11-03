const findSimpleNum = (a,b) =>{
    var massSimpleNum = [];
    if ( a > b) {
        const t = a;
        a = b;
        b = t;
    }

    for (let i = a; i <= b; i++) {
        var check = 0;
        
        for (let k = 2; k < i; k++){
            if( i % k === 0) {
                check++;}
        }

        if(check===0) massSimpleNum.push(i);
    }
    
    return massSimpleNum;    
  }
  

  console.log(findSimpleNum(11, 37));