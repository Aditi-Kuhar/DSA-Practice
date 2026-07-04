function powerOf2(n) {
  if (n == 1) return true;
  else if (n % 2 != 0 || n < 1) return false;
  return powerOf2(n / 2);
}
console.log(powerOf2(16));
console.log(powerOf2(6));
console.log(powerOf2(1));
console.log(powerOf2(5));
