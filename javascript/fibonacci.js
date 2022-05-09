function fibonacci(no) {
  

	if (no === 0) { return 0 }
	if (no === 1) { return 1 }
	if (no === 2) { return 1 }

	let fib = [0, 1, 2]

	for (let n = 3; n < no; n++) {
		let fib2 = [fib[1], fib[2], (fib[1]+fib[2])]
		fib = fib2
		}
		return fib[2]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
