/**
 * Variables: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 *
 * basic building blocks of JavaScript — Variables.
 * 
 * reference: https://justjavascript.com/
 */

// Let's think about a this. Describe step by step the following algorithm.

let a = 1;
let b = a;
a = 2;

// Let's try another one. Describe step by step the following algorithm.

let photo = {
    metadata: {
        date: '2022/08/22',
        title: 'a little cat'
    },
    size: '300x250',
    weight: '30kb'
}

let copy = {
    size: photo.size,
    weight: photo.weight,
    metadata: photo.metadata,
}

copy.metadata.title = 'Copy of ' + photo.metadata.title;


//A variable is a wire.
// Variables are not values.
// Variables point to values.
// Variables can't point to variables, only the values assigned to those variables.

//we can’t really pass variables to functions.

//We pass the current value of the variables to functions.

function double(x) {
    x = x*2;
}

let money = 10;
double(money);
//console.log(money); //?












