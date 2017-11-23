//This file contains examples of the third way to initialize the date constructor
//Given the milliseconds of the date

new Date(0);
// => Thu Jan 01 1970 01:00:00 GMT-0100 (CEST)

new Date(86400000);
// => Thu Jan 01 1970 18:00:00 GMT-0600 (CST)

new Date(996400000);
// => Mon Jan 12 1970 06:46:40 GMT-0600 (CST)


// the other way around is using the get time function
new Date().getTime()
//=> 1511398600788

//Lets check if it's true
new Date(1511398600788);
// => Wed Nov 22 2017 18:56:40 GMT-0600 (CST)
