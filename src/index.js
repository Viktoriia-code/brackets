module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let current;
  for (let i = 0; i < str.length; i++) {
    current = str[i];
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (current==bracketsConfig[j][0]) {
        if((stack.indexOf('|')!==-1)&&current=='|'){stack.pop()}
        else if((stack.indexOf('7')!==-1)&&current=='7'){stack.pop()}
        else if((stack.indexOf('8')!==-1)&&current=='8'){stack.pop()}
        else{stack.push(current);}
      } else if (current==bracketsConfig[j][1]) {
        if(stack.indexOf(bracketsConfig[j][0])==-1){return false};
        stack.pop();
      }
    }
  }
  if (stack.length==0) {return true} else {return false}
}
