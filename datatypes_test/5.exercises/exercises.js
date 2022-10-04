/**
 * Exercise 1
 * @param {number} a
 * @param {string} b
 * @return {Object}
 */
function dataTypes(a, b) {
  //your code goes here...
  
  //1. Declare a variable and assign it the number 7.
  let myNumber = 7;

  //2. Declare a variable and assign it the string 'hello world'.
  let myString = 'hello world';
  
  //3. Create an object with 2 properties. name the first property as
  // sum and the second property as concat.
 
  //4. Assign the addition + between a and your first variable to the first object property.
  
  //5. Assign the concatenation between b and your second variable to the second object property. (Order is important, don't add spaces)

  const myObject = {
    sum: a + myNumber,
    concat: b + myString,
  }

  
  //6. return object
  return myObject;
}

/**
 * Exercise 2
 * @param {number} grossSalary
 * @return {number}
 */
function operators(grossSalary) {
  //your code goes here...

  let netSalary = grossSalary;

  //1. Deduct the 4% for health contribution

  netSalary = netSalary - (grossSalary*(4/100));

  //2. Deduct the 4% for pension.

  netSalary = netSalary - (grossSalary*(4/100))

  //3. oh no, you are in a syndicate, you have to pay 20 to be there.

  netSalary -= 20;

  //4. The government decides you are an exemplary citizen and gives you 2. add it to your count.
  netSalary += 2;

  //5. your salary is in dollars, multiply it for 4300 to pass it to colombian pesos.
  netSalary = netSalary*4300;
  console.log('el valor es ' +  netSalary);
  
  //6. Your wife just left you, so she takes the half of all of your money.
  netSalary = Math.round(netSalary - (netSalary/2));

  //7. return the value after applying the previous operations.
  return netSalary;
}


/**
 * Exercise 3
 * @param {number} n 
 * @return {string}
 */
function conditionals(n) {

  //your code goes here...
  // Asigna numero mes a nombre mes
  let nameNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  
  //1. if n is negative return the string 'negative'
  if (n < 0){
    return 'negative';
  }
  //2. if n is in the inclusive range of 0 to 10 return the lowercase English word to each number (e.g., zero, one, two, etc);
  else if (n >= 0  &&  n <= 10) {
      return nameNumbers[n];
  }
  // if n is bigger than 10 return the string 'is way bigger'.
  else {
    return 'is way bigger';
  }

}

/**
 * Exercise 4
 * @param {number} n 
 * @return {number}
 */
function loops(n) {
  //your code goes here...

  //1. You can choose what loop statement to use. (e.g., for, while, for..of);

  //2. calculate the factorial of n.
    var factorial = 1; 
    for (i=1; i<=n; i++) {
      factorial = factorial * i; 
    }

  //3. return the value.
  return factorial; 

}

dataTypes();
