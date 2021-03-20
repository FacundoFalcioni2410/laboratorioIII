"use strict";
var isPalindrome = function (string) {
    return string.replace(/\s/g, '').toLowerCase().split('').reverse().join('') === string.replace(/\s/g, '').toLowerCase();
};
console.log(isPalindrome("level"));
//# sourceMappingURL=app.js.map