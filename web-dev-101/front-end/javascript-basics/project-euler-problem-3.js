/*
Problem 3: Largest Prime Factor
... just solve for numbers smaller than 1,000 and don't worry about making it efficient. 
You won't need to do any crazy math -- think iteration and make the computer do the work. 
Consider it extra credit to make your solution solve for larger numbers in a way that isn't too slow.
*/

// First attempt
var targetNumber = 13195; //The prime factors of 13195 are 5, 7, 13 and 29.

function isPrime(num) {
    document.getElementById("jsfconsole").innerHTML += "<p>Testing Primeness of " + num + "</p>";
	for (var i=2; i<num; i++) { 
        document.getElementById("jsfconsole").innerHTML += "<p>Comparing " + num + " and " + i + "</p>";
		if (num % i == 0) return false; // if the num is divisible by any i smaller than it, it is not prime
	}	
	return true;
}

function largestPrimeFactor(num) {

	var lpf = -1;

	for (var i=2; i <=num; i++) {
		if (num % i == 0) { // if i is a divisor
			if (isPrime(i)) { // if i is prime
				lpf = i;
			}
		}
	}

	return lpf;
}

var startTime = performance.now();
var result = largestPrimeFactor(targetNumber);
var endTime = performance.now();
var runTime = endTime - startTime;

document.getElementById("jsfconsole").innerHTML += "<p>Result: " + result + "</p>";
document.getElementById("jsfconsole").innerHTML += "<p>Runtime: " + runTime + " milliseconds.</p>";

// http://www.mathblog.dk/project-euler-problem-3/