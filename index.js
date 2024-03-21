#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: ("enter first number"),
        type: "number",
        name: "firstnumber" },
    { message: ("enter second number"),
        type: "number",
        name: "secondnumber" },
    {
        message: ("select one of the operators"),
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log(" please select valid operator");
}
;
