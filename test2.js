const findOD = (mass) =>{
    var massOD = [];
    var minNum = mass[0];
    for (const item of mass) {
        if(item < minNum) {
          minNum = item; 
        }
      }
    for (let i = 2; i < minNum; i++) {
        const checkOD = mass.reduce((totalCheck, item) => {
            totalCheck *= ((item%i === 0) ? 1 : 0);
            return totalCheck;
        }, 1);
        if(checkOD) massOD.push(i);
    }
    
    return massOD;    
  }
  

  console.log(findOD([30, 13]));