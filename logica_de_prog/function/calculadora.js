/*function calc(number1, number2, operator) {
let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    
        default:
            alert('')
            break;
    } 
}

calc(1,2,'+');*/

function soma(number1,number2){
    return number1 + number2;
  }
function subtracao(number1,number2){
    return number1 - number2;
  }
function multi(number1,number2){
    return number1 * number2;
  }
function divisao(number1,number2){
    return number1 / number2;
  }
  
  
  function calc(number1, number2, operator) {
  
  
      if (operator === '+') {
          return soma(number1, number2);
          
      }
      if (operator === '-') {
          return subtracao(number1, number2);
          
      }
      if (operator === '*') {
          return multi(number1, number2);
          
      }
      if (operator === '/') {
          return divisao(number1, number2);
          
      }
    
  }
  
  const result = calc(4,2,'/');
  console.log(result);
  //soma(1,2);