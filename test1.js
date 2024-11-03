const PluralComp = (num) =>{
  var lastNumber = num - Math.trunc(num/10)*10;
  var lastNumber2 = num - Math.trunc(num/100)*100;
  let MWord = ' компьютеров'
    
  if(lastNumber2 == 11 || lastNumber2 == 12 || lastNumber2 == 13 || lastNumber2 == 14) {
    return num + MWord;
  }

  if(lastNumber == 1) {
    let MWord = ' компьютер'
    return num + MWord;
  }
  if(lastNumber == 2 || lastNumber == 3 || lastNumber == 4) {
    let MWord = ' компьютера'
    return num + MWord;
  }

  return num + MWord;
}


for (let i = 1090; i< 1125; i++) {
  console.log(PluralComp(i));
}