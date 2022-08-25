function dataTypesTest() {
  let passTests = 0;
  console.log('data types test');
  for (let i = 0; i < 10; i++) {
    const result = dataTypes(i, 'test:' + i);
    const correctNumber = i + 7;
    const correctString = 'test:' + i + 'hello world';
    let log = `test: ${i + 1}`;

    if (!result) {
      console.warn('Did you forget to return a value?');
    } else if (!result.sum) {
      console.warn('did you forget to define the `sum` property?');
    } else if (!result.concat) {
      console.warn('did you forget to define the `concat` property?');
    } else if (result.sum !== correctNumber) {
      console.warn('the number value is wrong!');
    } else if (result.concat !== correctString) {
      console.warn('the string value is wrong');
    } else {
      passTests++;
      console.log(log + ' passed');
    }
  }
  console.log(`test cases passed: ${passTests}/10 passed`);
  const dataTypesLabel = document.querySelector('#dataTypes');
  dataTypesLabel.innerHTML = `${passTests}/10 passed`;


}

function operatorsTest() {
  console.log('operators test');
  let passTests = 0;
  [
    [100, 159100],
    [200, 356900],
    [250, 455800],
    [500, 950300],
    [1234, 2402152],
  ].forEach((value, index) => {
    let log = `test: ${index + 1}`;
    const result = operators(value[0]);

    if (!result) {
      console.warn('Did you forget to return a value?');
    } else if (typeof result !== 'number') {
      console.warn('the value data type must be number');
    } else if (result !== value[1]) {
      console.warn(`Wrong answer. expected: ${value[1]}. received: ${result}`);
    } else {
      passTests++;
      console.log(log + ' passed');
    }
  });

  console.log(`test cases passed: ${passTests}/5 passed`);
  const dataTypesLabel = document.querySelector('#operators');
  dataTypesLabel.innerHTML = `${passTests}/5 passed`;
}

function conditionalsTest() {
  console.log('conditional test');
  let passTests = 0;
  [
    [-1, 'negative'],
    [0, 'zero'],
    [5, 'five'],
    [10, 'ten'],
    [20, 'is way bigger'],
    [100, 'is way bigger'],
  ].forEach((value, index) => {
    let log = `test: ${index + 1}`;
    const result = conditionals(value[0]);

    if (!result) {
      console.warn('Did you forget to return a value?');
    } else if (typeof result !== 'string') {
      console.warn('the value data type must be string');
    } else if (result !== value[1]) {
      console.warn(`Wrong answer. expected: ${value[1]}. received: ${result}`);
    } else {
      passTests++;
      console.log(log + ' passed');
    }
  });

  console.log(`test cases passed: ${passTests}/6 passed`);
  const dataTypesLabel = document.querySelector('#conditionals');
  dataTypesLabel.innerHTML = `${passTests}/6 passed`;
}

function loopsTest() {
  console.log('loops test');
  let passTests = 0;
  [
    [2, 2],
    [4, 24],
    [6, 720],
    [8,40320],
    [11, 39916800],
    [14, 87178291200],
  ].forEach((value, index) => {
    let log = `test: ${index + 1}`;
    const result = loops(value[0]);

    if (!result) {
      console.warn('Did you forget to return a value?');
    } else if (typeof result !== 'number') {
      console.warn('the value data type must be number');
    } else if (result !== value[1]) {
      console.warn(`Wrong answer. expected: ${value[1]}. received: ${result}`);
    } else {
      passTests++;
      console.log(log + ' passed');
    }
  });

  console.log(`test cases passed: ${passTests}/6 passed`);
  const dataTypesLabel = document.querySelector('#loops');
  dataTypesLabel.innerHTML = `${passTests}/6 passed`;
}

dataTypesTest();


function main() {
  dataTypesTest();
  operatorsTest();
  conditionalsTest();
  loopsTest();
}
