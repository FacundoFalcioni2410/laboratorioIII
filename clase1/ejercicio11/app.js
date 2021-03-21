"use strict";
var isPalindrome = function (string) {
    var arr = [];
    var buffer;
    string = string.replace(/\s/g, '').replace(',', '').replace('.', '').replace('\'', '');
    string = string.toLowerCase();
    arr = string.split('');
    arr = arr.reverse();
    buffer = arr.join('');
    return string === buffer;
    //return string.replace(/\s/g,'').toLowerCase().split('').reverse().join('') === string.replace(/\s/g,'').toLowerCase();
};
console.log(isPalindrome("Madam, I'm Adam"));
//# sourceMappingURL=app.js.map