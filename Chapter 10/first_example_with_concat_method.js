//This is the example with the concat method

var initial_array = ['a','b','c'];
initial_array.concat('d',['e','f'])

//The output for this example is this :
// => ['a','b','c','d','e','f']

//Remember that the concat() is invoked on is not changed
//So if I print the initial array again it comes out this:

console.log(initial_array);
// => ['a','b','c']
