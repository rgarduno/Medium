//This example gets the sum of all array elements
function addition ( previous_element, current_element ) {
  return previous_element + current_element
}
concole.log ( [ 20,30,55, -1 ].reduce(addition) );
//The output from this is :
// => 104

//If you invoke reduce on an array with a single element, that element is returned.
> [7].reduce(addition)
//the output of this is :
// => 7

//If you invoke reduce on an empty array, you must specify initialvalue, otherwise you get an exception:
> [].reduce(addition)
//The result from this is :
// => Type error : Reduce of empty array with no initial value
