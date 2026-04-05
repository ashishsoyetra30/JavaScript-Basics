const myName = "Ashish"
const age = 25

// console.log(name + " is " + age + " years old") bad/old way to write not good
// string interpolation

console.log(`Hello my name is ${myName} and I am ${age} years old.`)

/*
1. Extract

slice(start, end) / substring(start, end): Get a portion.

split(separator): Cut into an Array.

2. Search

includes(val): True if found.

indexOf(val) / lastIndexOf(val): Get index position.

startsWith(val) / endsWith(val): Check edges.

3. Modify (Returns New String)

replace(x, y) / replaceAll(x, y): Swap values.

toLowerCase() / toUpperCase(): Change case.

trim(): Remove start/end spaces.

padStart(len, str) / padEnd(len, str): Add filler to reach a length.

4. Access

charAt(index): Get character.

charCodeAt(index): Get UTF-16 code.
*/