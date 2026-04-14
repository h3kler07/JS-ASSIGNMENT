# JS-ASSIGNMENT
JS assignment FWD

Approach and Complexity

- contest_score_judge.js: computes a weighted score from correct, partial, and incorrect answers, then applies penalties and branch logic to decide pass/fail. Uses constant arithmetic and condition checks. Complexity: O(1).
- digit_gatekeeper.js: loops from L to R, filters numbers divisible by K, skips values containing digit 0, sums digit characters, and uses a prime test on the sum. Complexity: O((R-L) * sqrt(n)).
- fare_calculator.js: calculates a fare with a base rate, distance-based increment, late fee, and seed modifier, then rounds up to the next multiple of 5. Uses simple math and conditional branching. Complexity: O(1).
- mirror_corridor.js: increments from n until it finds a number divisible by k whose string form is a palindrome. Uses a loop with digit reversal and modulo testing. Complexity: O(M * d), where M is the search range and d is digit count.
- roll_seed_lock.js: applies three iterative transformations based on even/odd state and a seed, then checks the middle digit of the resulting 3-digit number. Complexity: O(1).
- skipping_numbers.js: loops from 1 upward, accumulates values while skipping multiples of (seed + 2), and stops once the sum reaches n. Complexity: O(m), where m is the number of iterations.
