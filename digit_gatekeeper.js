function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function countValid(L, R, K) {
    let count = 0;

    for (let x = L; x <= R; x++) {

        if (x % K !== 0){
            continue;
        }

        let numStr = x.toString();

        if (numStr.includes('0')){
            continue;
        }

        let sum = 0;
        for (let i of numStr) {
            sum += Number(i);
        }

        if (isPrime(sum)) {
            count++;
        }
    }

    return count;
}

let l = prompt("Enter the value of L:");
let r = prompt("Enter the value of R:");
let k = prompt("Enter the value of K:");
let result = countValid(Number(l), Number(r), Number(k));
console.log("The count of valid integers is: " + result);