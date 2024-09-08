// closures.js
"use strict";

// Example: JavaScript Closures
function demonstrateClosures() {
    function clickCounter() {
        let clickCount = 0;

        function increment() {
            clickCount++;
            alert(clickCount);
        }

        return {
            increment
        };
    }

    alert("First Counter Context");
    let firstCounter = clickCounter();
    firstCounter.increment();
    firstCounter.increment();
    firstCounter.increment();

    alert("Second Counter Context");
    let secondCounter = clickCounter();
    secondCounter.increment();
    secondCounter.increment();
    secondCounter.increment();
}
