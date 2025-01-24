function add(a: number, b: number): number {
  // Type Guard to check if both are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error("Both parameters must be numbers");
  }
}

// Or using Type Assertion (less safe, use with caution)
function add2(a: any, b: any): number {
  return (a as number) + (b as number);
}

let result = add(1, 2); 
console.log(result); // Output: 3

try {
  let result2 = add(1, "2");
  console.log(result2);
} catch (e) {
  console.error(e.message); // Output: Both parameters must be numbers
}

// Example using Type Assertion (less safe):
let result3 = add2(1, "2");
console.log(result3); // Output: NaN (Not a Number) - This demonstrates the risk of type assertion.