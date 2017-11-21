var developers = [
     {name: "Rafael", age: 22},
     {name: "Alejandro", age: 35},
     {name: "Paul", age: 27}
];
 
developers.sort(function(a, b) {return a.age - b.age});
// => [{name: "Rafael", age: 22}, {name: "Paul", age: 27}, {name: "Alejandro", age: 35}];
