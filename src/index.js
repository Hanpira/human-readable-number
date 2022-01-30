module.exports = function toReadable (number) {
  /* add variables as array:
  1) 'numInWords' from 0 to 9 (each number has it's own name and doesn't repeat);
  2) 'teenInWords' from 10 to 19 (same as p.1);
  2) 'decInWords' decimals from 20 to 90 (each number can repeat in complex numbers);
  3) if tested number has hundreds or thousands => adding 'hundred' or 'thousand' in cycle;
  4) we can add million, etc if needed by using same construction as described in p.3.
  */
  var numInWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  var teenInWords = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var decInWords = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var wordsComplexNumbers = '';

    if (number >= 0 && number <= 9) {
        return numInWords[number]; // number to words 0-9
    } else if (number >=10 && number <=19) {
        return teenInWords[number-10]; //number to words 10-19
    } else if (number /10 && (number % 10 == 0) && number > 10 && number < 100) {
        wordsComplexNumbers = decInWords[Math.floor(number/10) - 2];
        return wordsComplexNumbers; //numbers to words => 20, 30, 60 etc.
    } else if (number / 10 && number >10 && number <100) {
        wordsComplexNumbers = decInWords[Math.floor(number/10) - 2] + ' ' + numInWords[Math.floor(number%10)];
        return wordsComplexNumbers; //numbers to words => 23, 67, 99 etc.
    } else if (number / 100 && (number % 100 == 0)) {
        wordsComplexNumbers = numInWords[Math.floor(number / 100)] + ' hundred';
        return wordsComplexNumbers; // 100, 200, 300, etc.
    } else if (number / 100 && (number%100 >=10 && number%100 <=19)) {
        wordsComplexNumbers = numInWords[Math.floor(number / 100)] + ' hundred ' + teenInWords[(Math.floor(number % 100) - 10)];
        return wordsComplexNumbers; //numbers to words > 100 (exm 111, 419)
    } else if (number / 100 && (number % 10 == 0)) {
        wordsComplexNumbers = numInWords[Math.floor(number / 100)] + ' hundred ' + decInWords[Math.floor(number%100/10 - 2)];
        return wordsComplexNumbers; // numbers to words => 990, 880 etc
    } else if (number / 100 && (number%100 < 10)) {
        wordsComplexNumbers = numInWords[Math.floor(number / 100)] + ' hundred ' + numInWords[Math.floor(number%10)];
        return wordsComplexNumbers; // numbers to words => 708, 907 etc
    } else if (number / 100 && (number%100 > 19)) {
        wordsComplexNumbers = numInWords[Math.floor(number / 100)] + ' hundred ' + decInWords[Math.floor(number%100/10 - 2)] + ' ' + numInWords[Math.floor(number%10)];
        return wordsComplexNumbers; // numbers to words => 678, 987 etc
    }
}
