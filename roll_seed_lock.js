let n = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed (0-9):"));

let current = n;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

if (current >= 100 && current <= 999) {

    let numStr = current.toString();

    let middleDigit = Number(numStr[1]);

    if (middleDigit === seed) {
        alert("YES " + current);
    } else {
        alert("NO " + current);
    }

} else {
    alert("NO " + current);
}