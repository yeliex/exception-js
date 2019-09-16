const exception = require('./lib');

Object.defineProperties(exception.default, Object.keys(exception).reduce((total, key) => {
  if (key === 'default') {
    return total;
  }

  total[key] = {
    get() {
      return exception[key];
    },
    enumerable: true,
  };
  return total;
}, {}));

module.exports = exception;
