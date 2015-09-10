// First Attempt

var startTime = performance.now();

var fib = 1;
var fib1 = 1;
var fib2 = 0;
var runningTotal = 0;
var limit = 4000000;

while (fib < limit) {
    if (fib % 2 == 0) {
        runningTotal += fib;
    }
    
    fib2 = fib1;
    fib1 = fib;
    fib = fib1 + fib2;
    
}

var endTime = performance.now();
var runTime = endTime - startTime;

document.getElementById("jsfconsole").innerHTML += "<p>End value for runningTotal: " + runningTotal + "</p>";
document.getElementById("jsfconsole").innerHTML += "<p>Runtime: " + runTime + " milliseconds.</p>";

// Second Attempt - Only loop through each 3rd number (the even ones)

var startTime = performance.now();

var even = 2;
var odd1 = 1;
var odd2 = 0;
var runningTotal = 0;
var limit = 4000000;

while (even < limit) {

    runningTotal += even;
    
    odd2 = odd1 + even;
    odd1 = odd2 + even;
    even = odd1 + odd2;
    
}

var endTime = performance.now();
var runTime = endTime - startTime;

document.getElementById("jsfconsole").innerHTML += "<p>End value for runningTotal: " + runningTotal + "</p>";
document.getElementById("jsfconsole").innerHTML += "<p>Runtime: " + runTime + " milliseconds.</p>";

// Third attempt - Only loop through each 3rd number (the even ones)

/*
from: http://codereview.stackexchange.com/a/77130
The series of only the even numbers is :

0, 2, 8, 34, 144, 610, 2584, 10946, 46368, 196418, 832040, 3524578, ...
So starting with 0 and 2 the next element is always 4 times the preceding one plus the one before that :

34 = 8*4 +2
144 = 34*4 + 8
...
*/

var startTime = performance.now();

var current = 2;
var prev = 0;
var prevprev = 0;
var runningTotal = 0;
var limit = 4000000;

while (current < limit) {
    runningTotal += current;

    prevprev = prev;
    prev = current;

    // There is a performance increase by using +prev four times instead of prev*4. Why?
    current = prev + prev + prev + prev + prevprev;
    
}

var endTime = performance.now();
var runTime = endTime - startTime;

document.getElementById("jsfconsole").innerHTML += "<p>End value for runningTotal: " + runningTotal + "</p>";
document.getElementById("jsfconsole").innerHTML += "<p>Runtime: " + runTime + " milliseconds.</p>";

/* 
Notes:

In depth analysis and a good read:
http://codereview.stackexchange.com/a/77129
