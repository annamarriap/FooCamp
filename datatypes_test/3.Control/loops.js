/**
 * control structures
 *
 * loops
 *
 * Bibliography: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */

// the classic for
function callFor() {
  for (let i = 0; i < 10; i++) {
    //do somthing...
  }
}

// do while
function callDoWhile() {
  let n = 10;
  do {
    n--;
    //do something;
  } while (n > 0);
}

// while
function callWhile() {
  let n = 10;
  while (n > 0) {
    //do something...

    n--;
  }
}

//Break statement: Use the break statement to terminate a loop
//continue statement: The continue statement can be used to restart a while, do-while, for ...

// for..in
function callForIn(){
    const object = {
        vA: 'a',
        vB: 'b',
        vC: 'c'
    }
    for(variable in object){
        //do something
    }
}

// for..of
function callForOf(){
    const list = [1, 2, 3, 4, 5];

    for(value of list){
        //so something
    }
}
