console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
let me = {
  firstName:'Nasra',
  lastName: 'Omar',
  hasSiblings: true,
  shoeCount: 30, 
  favThreeFoods: ['pizza', 'oysters', 'steak'] 
  /// I'm not sure why it's not letting me add a new property???
  favoriteColor: pink,

  
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
var fullName = ('firstName' + 'lastName')
console.log(fullName);
/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
const favThreeFoods =['pizza', 'oysters', 'steak'];
const first = favThreeFoods[0];
const last = favThreeFoods[2];
console.log(first);
console.log(last);



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
let shoeCount = 30
console.log(shoeCount);
console.log(shoeCount + 1);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
let favoriteColor = ('pink');
console.log(favoriteColor);