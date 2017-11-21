function print_arguments(previous, current, index) {
  console.log('previous:' + previous +', current:' + current + ', index:' + index);
  return previous + current
}

//Lets iterate the direction from left to right
[ 'a', 'g', 'z'].reduce(print_arguments)
// => previous : a, current : g, index : 1
// => previous : ag, current : z, index : 2
// => agz

//Lets iterate the direction from right to left
[ 'a', 'g', 'z'].reduceRight(print_arguments)
// => previous : z, current : g, index : 1
// => previous : zg, current : a, index : 2
// => zga
