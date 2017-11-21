function is_big_enough(element, index, array) {
  return element >= 10;
}
[22, 2, 7, 170, 33].every(is_big_enough);   // false
[32, 64, 88, 60, 99].every(is_big_enough); // true
