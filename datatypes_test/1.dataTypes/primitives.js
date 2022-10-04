/**
 * Data types : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 *
 * The set of types in the JavaScript language consists of primitive values and objects.
 */

/**
 * 1 Primitive data types
 *  All types except objects define immutable values. There are 7 primitive types.
 */

/**
 * Boolean type: it's the logical data type
 * true | false
 *
 * Useful for boolean conditions: to decide which sections of code to execute.
 *
 * Bibliography: https://developer.mozilla.org/en-US/docs/Glossary/Boolean
 */

const isNight = true;
const areWeInColombia = true;
const amIAnAlien = false;
const isRaining = false;

/**
 * Null type: has exactly one value `null`
 * It's a reference to nothing! usually intentionally. To denote something is unknown or empty
 *
 * fun fact: typeof null returns "object"
 *
 * Bibliography: https://developer.mozilla.org/en-US/docs/Glossary/Null
 */

const happiness = null;

/**
 * Undefined type: A variable that has not been assigned a value has the value `undefined`. unintentionally
 * 
 * Bibliography: https://developer.mozilla.org/en-US/docs/Glossary/undefined
 */

let notDefined;

let alsoNotDefined = undefined;

/**
 * Numeric types
 *  Number type: represents numbers in JS.
 *  BigInt type: Can represent integers with arbitrary precision, but cannot represent decimals.
 *  you cannot mix them in calculations.
 *
 *  NaN: Not a Number. The resulting value of an arithmetic operation that is not a number.
 */

//number & arithmetic operators.
const number = 12;
const negativeNumber = -123.32;
const zero = 0;
const addition = 2 + 2;
const substraction = 4 - 2;
const multiplication = 20 * 10;
const division = 12 / 0;
const remainder = 10 % 3;
const exponential = 2 ** 2;

//BigInt
const bigInt = 3n;
const toBigInt = BigInt(Number.MAX_SAFE_INTEGER);
const maxSafeIntenger = Number.MAX_SAFE_INTEGER;

//NaN
const expectNaN = 'dos' - 2;
const expectNaN2 = 'dos' - 'tres';

/**
 * String type: Use strings for textual data.
 * It's a set of elements denoted by double or single quotes
 *
 * Template literals are literals delimited with backticks ``: Multiline strings
 */

const lowercaseA = 'a';
const upperCaseA = 'A';
const word = 'character';
const phrase = 'Once upon a time...';
const code = '#2302Ex0000 #$!@#!2';
const spaceString = ' ';
const emptyString = '';
const helloWorld = 'hello' + ' world\n'

//concatenation
const concatenation = helloWorld + 'my name is:' + spaceString + upperCaseA;

//Template literals or template strings
const templateLiterals = `hello world
salto
my name is: ${number}`;


/**
 * Symbol type: It's used as the key of an Object
 */

