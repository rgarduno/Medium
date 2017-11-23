//This file contains examples of the second way to initialize the date constructor

new Date('2003-06-11');
// => Tue Jun 10 2003 19:00:00 GMT-0500 (CDT)

new Date('2017-11-23');
// => Wed Nov 22 2017 18:00:00 GMT-0600 (CST)

new Date('2010-5-15');
// => Sat May 15 2010 00:00:00 GMT-0500 (CDT)

//Ilegals date time strings returns a NaN

new Date('2050-5-150');
// => Invalid Date
