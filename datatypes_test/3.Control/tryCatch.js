/**
 * control structures
 *
 * Try catch
 *
 * Bibliography: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 */

function callTryCatch(){
    try {
        nonExistentFunction();
      } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
      finally {
        console.log('Finally.')
        // Only use it for cleanup code
      }
      
}