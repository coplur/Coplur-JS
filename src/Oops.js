"use strict";

// OOP: Inheritance

function BaseStudent() {
    this.uniform = "";
    this.reportCard = "";

    this.isRegistered = function() {
        console.log("Fees submitted");
    };
}

function Student() {
    this.name = "";
    this.rollNo = "";

    this.passed = function() {
        console.log("Student has passed the previous class");
    };
}

Student.prototype = new BaseStudent();

function demonstrateInheritance() {
    var student = new Student();
    student.name = "Testname";
    student.rollNo = "125";
    student.uniform = "Yes";
    student.isRegistered();

    console.log(student);
}

// OOP: Abstraction

function BaseCar() {
    var engineType = "";
    var bodyType = "TestBodyType";

    var isSafe = function() {
        console.log("It is safe");
    };

    var hasAirbags = function() {
        console.log("Yes to airbags");
    };

    return {
        engineType: engineType,
        hasAirbags: hasAirbags
    };
}

function demonstrateAbstraction() {
    var baseCar = new BaseCar();
    baseCar.engineType = "Volvo";
    baseCar.hasAirbags();
    console.log(baseCar);
}

// Combine all OOP examples

function demonstrateOOP() {
    console.log("Demonstrating Inheritance:");
    demonstrateInheritance();

    console.log("Demonstrating Abstraction:");
    demonstrateAbstraction();
}
