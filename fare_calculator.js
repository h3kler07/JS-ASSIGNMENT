let base = Number(prompt("Enter the base fare:"));
let distance = Number(prompt("Enter the distance:"));
let fare = base + 7 * distance;

let minutes_late = Number(prompt("Enter the minutes late:"));
let seed = Number(prompt("Enter the seed:"));
if (minutes_late > 15) {
    fare += 20;
}
if (distance > 10) {
    fare += 0.1*fare;
}
if (seed % 2 === 0) {
    fare += seed;
}
else {
    fare -= seed;
}

fare = Math.ceil(fare / 5) * 5;
alert("The fare is: " + fare);