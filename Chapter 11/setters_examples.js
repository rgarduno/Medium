//Here are the example for the setters

//let's use a date 
var example_date = new Date();
// => Fri Nov 24 2017 22:17:37 GMT-0600 (CST)

example_date.setDate('5')
// Sets the day of the month for a specified date according to local time.
// => Sun Nov 05 2017 22:50:20 GMT-0600 (CST)
example_date.setDate('32')
// => Sat Dec 02 2017 22:50:20 GMT-0600 (CST)

example_date.setFullYear('1997')
// Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.
// => Tue Dec 02 1997 22:50:20 GMT-0600 (CST)

example_date.setHours('7')
// Sets the hours for a specified date according to local time.
// => Tue Dec 02 1997 07:50:20 GMT-0600 (CST)

example_date.setMilliseconds(100)
// Sets the milliseconds for a specified date according to local time.
// => Tue Dec 02 1997 07:50:20 GMT-0600 (CST)

example_date.setMinutes(45)
// Sets the minutes for a specified date according to local time.
// => Tue Dec 02 1997 07:45:20 GMT-0600 (CST)

example_date.setMonth(5)
// Sets the month for a specified date according to local time.
// => Mon Jun 02 1997 07:45:20 GMT-0500 (CDT)

example_date.setSeconds(30)
// Sets the seconds for a specified date according to local time.
// => Mon Jun 02 1997 07:45:30 GMT-0500 (CDT)
