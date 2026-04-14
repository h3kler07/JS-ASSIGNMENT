let n = Number(prompt("Enter n:"));
let k = Number(prompt("Enter k:"));

function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}

let answer = -1;

for (let x = 0; x <= 100000; x++) {
    let num = n + x;

    if (num % k === 0 && isPalindrome(num)) {
        answer = x;
        break;
    }
}

alert(answer);