function magicArray() {
    let arr = Array.isArray(arguments[0]) ? arguments[0] : Array.from(arguments);
    arr.__proto__ = fn;
    return arr;
  }
  
  let fn = {
    getFiltered: function(predicate) {
      return magicArray(this.filter(predicate));
    },
    getRejected: function(predicate) {
      return magicArray(this.filter(function(item) {
        return !predicate(item);
      }));
    },
    getSplit: function(predicate) {
      return {
        pass: this.getFiltered(predicate),
        fail: this.getRejected(predicate)
      };
    },
    count: function() {
      return this.length;
    },
    double: function() {
      this.push.apply(this, this);
      return this;
    },
    multiply: function(n) {
      for (var i = 0; i < this.length; i++) {
        this[i] *= n;
      }
      return this;
    },
    first: function() {
      return magicArray(this[0]);
    },
    last: function() {
      return magicArray(this[this.length - 1]);
    },
    eq: function(n) {
      return magicArray(this[n]);
    }
  };
  