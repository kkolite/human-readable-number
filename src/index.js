module.exports = function toReadable (number) {
  let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let ten = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let one_ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'] 
  let hundred = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
  let result = '';

  let str = String(number);
  
  if (str.length == 1) {
    result = one[str];
  }
  else if (str.length == 2 && str[0] == 1) {
    result = one_ten[str[1]];
  }
  else if (str.length == 2 && str[0] != 1 && str[1] != 0) {
    result = ten[str[0]] + ' ' + one[str[1]];
  }
  else if (str.length == 2 && str[1] == 0) {
    result = ten[str[0]];
  }
  else if (str.length == 3 && str[2] != 0 && str[1] != 1 && str[1] != 0) { 
    result = hundred[str[0]] + ' ' + ten[str[1]] + ' ' + one[str[2]];
  }
  else if (str.length == 3 && str[2] != 0 && str[1] == 0) {
    result = hundred[str[0]] + ' ' + one[str[2]];
  }
  else if (str.length == 3 && str[1] == 1) {
    result = hundred[str[0]] + ' ' + one_ten[str[2]];
  }
  else if (str.length ==3 && str[1] == 0 && str [2] == 0) {
    result = hundred[str[0]];
  }
  else {
    result = hundred[str[0]] + ' ' + ten[str[1]];
}

  return result
}
