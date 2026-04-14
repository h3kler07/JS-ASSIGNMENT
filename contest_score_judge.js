let a = Number(prompt("Enter number of correct answers:"));
let b = Number(prompt("Enter number of partially correct answers:"));
let c = Number(prompt("Enter number of incorrect answers:"));
let score = 3*a + b-2*c;
if (score < 0) {
    score = 0;
}
if (a+b+c >50) {
    score -= 10;
}
if (score>=60){
    alert("PASS with score:" + score);
}
else {
    alert("FAIL with score:" + score);
}

