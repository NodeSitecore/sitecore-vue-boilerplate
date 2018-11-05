module.exports = {
  ifequal(arg1, arg2, opts) {
    if (arg1 === arg2) {
      return opts.fn(this);
    }
    return opts.inverse(this);
  },
  ifnotequal(arg1, arg2, opts) {
    if (arg1 !== arg2) {
      return opts.fn(this);
    }
    return opts.inverse(this);
  }
};
