/**
 * control structures
 *
 * if... else if... else
 *
 * Bibliography: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 */

function simpleConditionals(condition) {
  if (condition) {
    console.log('the condition value is truthy');
  } else {
    console.log('the condition value is falsy');
  }
}

function multipleConditionals() {
  const firstCondition = true;
  const secondCondition = false;
  const thirdCondition = true;

  //validates conditions one at the time.
  if (firstCondition) {
    console.log('executes first condition block');
  } else if (secondCondition) {
    console.log('executes second condition block');
  } else if (thirdCondition) {
    console.log('executes thrid condition block');
  }
}

function nestingConditionals() {
  const firstCondition = true;
  const secondCondition = true;
  const thirdCondition = true;
  const fourthCondition = false;

  if (firstCondition) {
    if (secondCondition) {
      if (thirdCondition) {
        if (fourthCondition) {
          console.log('all conditions are true');
        } else {
          console.log('executes fourth else block');
        }
      } else {
        console.log('executes thrid else block');
      }
    } else {
      console.log('executes second else block');
    }
  } else {
    console.log('executes first else block');
  }
}

function usingOperators() {
  //truthy values: Values that are considered true when encountered in a Boolean context (all values except falsy values)
  //examples:
  const one = 1;
  const word = 'one';
  const object = {};

  //falsy values: Values that are considered false when encountered in a Boolean context
  const zero = 0;
  const minusZero = -0;
  const zeroBigInt = 0n;
  const nothing = null;
  const notDefined = undefined;
  const notANumber = NaN;
  const emptyString = '';

  if (zero && one) {
    console.log('zero && one === true');
  } else {
    //this block is executed
    console.log('zero && one === false');
  }

  if (!zero && one) {
      //this block is executed
    console.log('!zero && one === true');
  } else {
    console.log('!zero && one === false');
  }

  // ?
  if((zero && one && notDefined) || word){ 
    console.log('(zero && one && notDefined) || word === true');

  } else {
    console.log('(zero && one && notDefined) || word === false');
  }


}
