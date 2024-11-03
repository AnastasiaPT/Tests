const MultTable = (n) =>{
    const num = n.toString().length;
    var mString = ' ';
    let s = 0;
    while( s< num){
        mString = mString + " ";
        s++;
    }
    
    const maxnum = n*n;
    const mnum = maxnum.toString().length;

    
    for (let k = 1; k <= n; k++){
       mString = mString + PatternNum(k, mnum);
    }
    console.log(mString);  
    
    for (let i = 1; i<=n; i++) {
       mString = PatternNum(i, num);
       for (let k = 1; k <= n; k++){
            mString = mString + PatternNum(k*i, mnum);
     }
     console.log(mString);  
    }
       
    return;    
  }

  const PatternNum = (i, num) => {
    var v = " ";
    const iString =i.toString();
    const len = iString.length;
    let k = 0;
    while( k< num - len){
      v = v + " ";
      k++;
    }
    return v + iString;
  }
  
  MultTable(15);