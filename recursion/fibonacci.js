function f(n) {
  let arr = [0, 1];
  if (n <= 0) return "errie";
  if (n === 1) return [0];
  if (n === 2) return arr;
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}
console.log(f(-2)); // returns "errie"
console.log(f(1)); // returns [0]
console.log(f(2)); // returns [0, 1]
console.log(f(3)); // returns [0, 1, 1]
console.log(f(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]

//recursive version

function recf(n) {
  if (n <= 0) return "error";
  else if (n === 1) return [0];
  else if (n === 2) return [0,1];
  else {
    let arr = recf(n - 1);
    return [...arr, arr[n-2] + arr[n - 3]];
  }
}
console.log(recf(-2)); // returns "errie"
console.log(recf(1)); // returns [0]
console.log(recf(2)); // returns [0, 1]
console.log(recf(3)); // returns [0, 1, 1]
console.log(recf(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]

//ternary version
const fibsRecurse = (n) => {
	return n <= 0
		? "Please enter a valid number of elements to be given an answer."
		: n === 1
		? [0]
		: n === 2
		? [0, 1]
		: [...fibsRecurse(n - 1), fibsRecurse(n - 1)[n - 2] + fibsRecurse(n - 1)[n - 3]];
};