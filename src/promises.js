// callbacks-promises.js
"use strict";

// Callbacks
function makePizza(callback) {
    console.log("Making pizza");
    setTimeout(function() {
        console.log("Pizza is ready!");
        callback(); // Call the callback function when done
    }, 5000); // 5 seconds delay
}

function eatPizza() {
    console.log("Eating pizza");
}

function demonstrateCallbacks() {
    makePizza(eatPizza);
}

// Promises
function makeDinner() {
    console.log("Making dinner...");
    // Create a new Promise
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const isDinnerReady = true;
            if (isDinnerReady) {
                resolve("Here's your dinner!");
            } else {
                reject("Sorry, we're out of ingredients!");
            }
        }, 2000); // 2 seconds delay
    });
}

function demonstratePromises() {
    makeDinner()
        .then(function(result) {
            console.log(result);
        })
        .catch(function(error) {
            console.log(error);
        });
}
