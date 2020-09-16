var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let arr = [],
    buffer = new Array(digits.length).fill('');
  helper(digits, buffer, 0, 0, arr);
  return arr;
};

function getLetters(s) {
  let result = [];
  switch (s) {
    case '2':
      result = ['a', 'b', 'c'];

      break;
    case '3':
      result = ['d', 'e', 'f'];
      break;
    case '4':
      result = ['g', 'h', 'i'];
      break;
    case '5':
      result = ['j', 'k', 'l'];
      break;
    case '6':
      result = ['m', 'n', 'o'];
      break;
    case '7':
      result = ['p', 'q', 'r', 's'];
      break;

    case '8':
      result = ['t', 'u', 'v'];
      break;
    case '9':
      result = ['w', 'x', 'y', 'z'];
      break;

    default:
      result = [];
      break;
  }
  return result;
}

function helper(str, buffer, nextIdx, bufferIdx, arr) {
  if (bufferIdx === buffer.length || nextIdx === str.length) {
    arr.push(buffer.join(''));
    return;
  }
  let letters = getLetters(str[nextIdx]);
  if (letters.length === 0) helper(str, buffer, nextIdx + 1, bufferIdx, arr);
  for (const letter of letters) {
    buffer[bufferIdx] = letter;
    helper(str, buffer, nextIdx + 1, bufferIdx + 1, arr);
  }
}
