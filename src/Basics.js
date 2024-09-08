"use strict";

// Example: Variable Declarations and Scopes
function demonstrateVariableScopes() {
    let greetingMessage = "Hello";
    let isFlag = false;
    let itemCount = 10;
    let uninitializedValue = null;

    console.log(greetingMessage, isFlag, itemCount, uninitializedValue);

    function testBlockScope() {
        let comparisonValue = 7;
        if (comparisonValue === 7) {
            let blockScopedVariable = 10;
            console.log("Inside block scope, blockScopedVariable =", blockScopedVariable);
        }
        // console.log(blockScopedVariable); // Uncommenting this will cause an error due to block scope.
    }

    testBlockScope();
}

// Example: Object Literal
function demonstrateObjectLiteral() {
    let user = {
        name: "Test Name",
        gender: "Non-binary",
        age: 20
    };

    console.log(typeof user.name, typeof user.age);
}

// Example: Object Using Constructor
function UserConstructor() {
    this.name = "Constructor Example Name";
    this.email = "example@example.com";
}

function demonstrateObjectConstructor() {
    let userObject = new UserConstructor();
    console.log(userObject);
}


// The 'this' keyword
function demonstrateThis() {
    console.log(this); // 'this' refers to the window object in this context

    var array = [];
    array.push("Hello");
    array.push("Hey");
    array.push("NewElement");

    console.log(typeof array);

    function DoSomething() {
        this.name = "Test";
        console.log(this);
    }

    var object = new DoSomething();
}
