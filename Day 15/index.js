function isPalindrome(str){
    for (let i = 0; i <= str.length; i++) {
        for (let j = str.length - 1; j >= 0; j--) {
           return str[i] === str[j] ? true : false;
        }
    }
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));



const palindromeList = document.getElementById("palindrome-list");

const splitAndJoin = palindromeList.innerText.split(/[\s,]+/).join("").toLowerCase();

console.log(splitAndJoin);
console.log(isPalindrome(splitAndJoin));