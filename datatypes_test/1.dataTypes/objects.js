/**
 * Data types : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 *
 * The set of types in the JavaScript language consists of primitive values and objects.
 */

/**
 * 2 Objects.
 *
 *  In computer science, an object is a value in memory which is possibly referenced by an identifier.
 *  Collection of properties (key/value pairs).
 *  property values can be values of any type (primitives & objects).
 *
 *  In Javascript "everything" is an Object
 *
 * Functions are regular objects with the additional capability of being callable.
 *
 * a typical object inherits properties (including methods) from Object.prototype,
 * Bibliography:
 */

//creating an object.
const objectLiteral = {};
const object = Object.create({});

/**
 * Object literals: it's a list of zero or more pairs of properties. Syntax: curly braces `{}`
 */

const student = {
  name: '',
  city: '',
  zipCode: 0,
  age: 0,
  deathDate: null,
  isGoodStudent: true,
  greet() {
    console.log('Hi everyone!');
  },
  grades: [5, 3, 4, 4.6, 4.5, 5],
};

/**
 * Functions: they are regular objects with the addiontal capacity of being callable.
 * Fundamental building blocks in JS.
 *
 * It performs a sequence of expressions or tasks.
 */

function saySomething(something) {
  console.log(`say ${something}`);
}

const myFunction = () => {
  console.log('hello');
  console.log('world');
};
// arrow functions: introduced in ES6
const sayWharever = (wharever) => console.log(`say ${wharever}`);

//A function with a return value

function sumFunction(a, b) {
  console.log('first value: ', a);
  console.log('second value: ', b);
  return a + b;
}

/**
 * Arrays: A collection of elements.
 */

const colors = ['black', 'white', 'red', 'yellow'];
const whatever = ['black', 23, undefined, { color: 'red' }, colors];

/**
 * prototypes: The prototype is the mechanism that enables inheritance in Javascript.
 *
 * Object.getPrototypeOf(object);
 */

const humanPrototype = {
  name: '',
  stagedName: '',
  height: 0,
  isGood: undefined,
  greet() {
    console.log('Hi everyone!');
  },
  sayGoodbye() {
    console.log('bye everyone!');
  },
};

//Using Object.create
const superman = Object.create(humanPrototype);

superman.name = 'clark kent';
superman.isGood = true;
superman.superpower = 'invencible';
superman.fly = function () {
  console.log('Now I can fly!');
};

//Using constructor

function Person(name, stagedName, height, isGood) {
  this.name = name;
  this.stagedName = stagedName;
  this.height = height;
  this.isGood = isGood;
}

Person.prototype = humanPrototype;

const batman = new Person('Bruce Wayne', 'Batman', '1.90', true);
