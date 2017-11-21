//this compare the values in ascending order
[121, 41, 11, 72, 35, 100].sort(function(a, b){
    return a-b
});
// => [11, 35, 41, 72, 100, 121]

//this compare the values in descending order
[121, 41, 11, 72, 35, 100].sort(function(a, b){
    return b-a
});
// => [121, 100, 72, 41, 35, 11]
