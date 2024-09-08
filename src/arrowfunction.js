// arrow-functions.js
"use strict";

// Arrow Functions
function demonstrateArrowFunctions() {
    var add = (x, y) => {
        console.log(x + y);
    };

    this.currentContext = "Global";

    function DoAnything() {
        console.log(this.currentContext);
    }

    function DoSomething() {
        this.currentContext = "TestName";
        var y = () => {
            console.log(this.currentContext);
        };
        y();
    }

    var obj = new DoSomething();
}
