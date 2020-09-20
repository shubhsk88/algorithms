function palindromCheck(str) {
  return str.split('').reverse().join('') === str;
}

palindromCheck('kayak');
