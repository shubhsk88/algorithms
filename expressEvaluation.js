function expression(str) {
  let operator = [];
  let operand = [];
  for (let i = 0; i < str.length; i++) {
    console.log(operator, operand);
    if (!operatorCheck(str[i])) {
      operand.push(str[i]);
    } else {
      while (
        operator.length !== 0 &&
        precedence(peek(operator)) >= precedence(str[i])
      ) {
        process(operator, operand);
      }
      operator.push(str[i]);
    }
  }
  while (operator.length !== 0) {
    process(operator, operand);
  }
  return operand;
}

function operatorCheck(s) {
  if (s === '+' || s === '-' || s === '/' || s === 'x') return true;
  return false;
}

function precedence(s) {
  if (s === '+' || s === '-') return 1;
  else return 2;
}

function peek(arr) {
  return arr[arr.length - 1];
}

function process(operator, operand) {
  let operation = {
    '+': (a, b) => Number(a) + Number(b),
    '-': (a, b) => Number(a) - Number(b),
    'x': (a, b) => Number(a) * Number(b),
    '/': (a, b) => Number(a) / Number(b),
  };

  let x = operand.pop();
  let y = operand.pop();
  let sign = operator.pop();
  let result = operation[sign](y,x);

  operand.push(result.toString());
}

console.log(expression('2+4-2'));
