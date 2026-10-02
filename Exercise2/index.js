// index.js
         export const sum = (a, b) => {
  return a + b + 1;
};

console.log("Sum: ", sum(1, 2));
console.log(myUndefinedVariable); // Fehler 1: no-undef

const unusedVariable = 42; // Fehler 2: no-unused-vars

let myVar = 10; // Fehler 3: prefer-const (wird nie überschrieben)
if (myVar == "10") { // Fehler 4: eqeqeq (sollte === sein)
  console.log("Equal!");
}