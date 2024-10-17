// src/calculator.js
function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0][2];
    numbers = parts[1];
  }

  const sanitizedNumbers = numbers.replace(/\n/g, delimiter);
  const numArray = sanitizedNumbers.split(delimiter).map(Number);

  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, current) => sum + current, 0);
}

module.exports = { add };
