const input = document.getElementById("userInput") as HTMLInputElement;
const button = document.getElementById("submitBtn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

button.addEventListener("click", () => {
  output.textContent = input.value;
});
