// Base class: BaseStudent
function BaseStudent() {
    this.SchoolName = "KV"; // New property for BaseStudent
    this.Grade = "10th"; // New property for BaseStudent

    this.Enroll = function () {
        console.log("Student enrolled in school."); // New method for BaseStudent
    };
    this.AttendClass = function () {
        console.log("Attending classes regularly."); // New method for BaseStudent
    };
}

// Derived class: Student
function Student() {
    this.Name = "Test Student"; // New property for Student
    this.RollNo = "001"; // New property for Student

    this.SubmitHomework = function () {
        console.log("Homework has been submitted."); // New method for Student
    };
    this.ParticipateInSports = function () {
        console.log("Participating in sports activities."); // New method for Student
    };
}

// Inherit properties and methods from BaseStudent
Student.prototype = new BaseStudent();

// Create an instance of Student
var student = new Student();

// Modify properties
student.Name = "Test Student New Name";
student.RollNo = "002";
student.SchoolName = "Green Valley High";
student.Grade = "12th";

// Test inherited and own methods
student.Enroll(); // Output: "Student enrolled in school."
student.AttendClass(); // Output: "Attending classes regularly."
student.SubmitHomework(); // Output: "Homework has been submitted."
student.ParticipateInSports(); // Output: "Participating in sports activities."

// Output the student object to see inherited and own properties
console.log(student);