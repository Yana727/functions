// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2) {
  if (num1 > num2) {
    return num1
  }
  if (num1 < num2) {
    return num2
  }
}
console.log(max(3, 1))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3)
}
console.log(maxOfThree(1, 2, 3))

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char) {
  if (char === 'a'|| char === 'o' ||char === 'y'|| char ==='e' ||char === 'i' ||char ==='u') {
    return 'it is a vowel'
  } else {
    return 'not a vowel'
  }
}
console.log(isVowel('b'))



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(n1, n2) {
  return n1 + n2
}
console.log(sum(2, 3))


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(n1, n2, n3) {
  return ((n1 + n2 + n3) /3)
}

console.log(avg(1,2,4))

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(words) {
  return words.length
}

console.log(getLength('hello all'))


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(nbr1, nbr2) {
  if (nbr1 < nbr2){
  return 'true'
}
}
console.log(greaterThan(4, 5))


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name){
  return ('Hello, '  + name +  '!')
}
console.log(greet('Yana'))

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib(w1, w2, w3, w4) {
  return ('One ' + w1 + 'fox ' + w2 + 'across ' + w3 + 'field of ' + w4)
}

console.log(madLib('orange ', 'ran ', 'wide ', 'dasies.'))
