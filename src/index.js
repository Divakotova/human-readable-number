module.exports = function toReadable (num) {
     let i = '', rank = ['','thousand','million','billion','trillion','quadrillion','quintillion'];
  let numArray = num.toString().split(/(?=(?:\d{3})+$)/, 7);  
    if (numArray == '' || numArray == '0') return 'zero'; 
      if (numArray[0].length == 1) numArray[0] = '00'+ numArray[0];
    if (numArray[0].length == 2) numArray[0] = '0'+ numArray[0];
    for (var j = (numArray.length - 1); j >= 0; j--) { 
      if (numArray[j] != '000') {
        i = t(numArray[j]) + (rank[numArray.length - 1 - j] = 0 ?  '' : ' ' + rank[numArray.length - 1 - j]) + i;
      }
    }
    function t(numArray) {
      let numTitle = [
  ['',' one',' two',' three',' four',' five',' six',' seven',' eight',' nine'],
  [' ten',' eleven',' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen'],
  ['','',' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety'],
  [' hundred'],
  ];
      return (numArray[0] != 0 ? numTitle[0][numArray[0]] + numTitle[3] : '') + (numArray[1] == 1 ? numTitle[1][numArray[2]] : numTitle[2][numArray[1]] + numTitle[0][numArray[2]]);
    }
    return i.trim();
  }
  var toReadable = require('./index.js')
  console.log(toReadable(105))
