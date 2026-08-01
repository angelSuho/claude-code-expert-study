"use strict";
const input = document.getElementById("userInput");
const button = document.getElementById("submitBtn");
const output = document.getElementById("output");
button.addEventListener("click", () => {
    output.textContent = input.value;
});
