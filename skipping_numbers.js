let n = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

let limit = seed + 2;

let sum = 0;
let m = 0;

while (sum < n) {
    m++;

    if (m % limit !== 0) {
        sum += m;
    }
}

alert("m = " + m + ", sum = " + sum);