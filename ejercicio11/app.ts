const isPalindrome = (string: string) =>{
    return string.replace(/\s/g,'').toLowerCase().split('').reverse().join('') === string.replace(/\s/g,'').toLowerCase();
}

console.log(isPalindrome("level"));