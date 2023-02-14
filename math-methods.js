//Your task is to extend JavaScript Number object with methods .add(n), .sub(n), .mul(n), .div(n), .pow(n) and .sqr(), so you can perform simple mathematical operations on numbers just like this
Number.prototype.add = function(n) {
  return this + n;
};

Number.prototype.sub = function(n) {
  return this - n;
};

Number.prototype.mul = function(n) {
  return this * n;
};

Number.prototype.div = function(n) {
  return this / n;
};

Number.prototype.pow = function(n) {
  return Math.pow(this, n);
};

Number.prototype.sqr = function(n) {
  return this * this;
};

var num = 10;

console.log(num.add(5)); // 15

console.log(num.sub(5)); // 5

console.log(num.mul(5)); // 50

console.log(num.div(5)); // 2

console.log(num.pow(3)); // 1000

console.log(num.sqr()); // 100

