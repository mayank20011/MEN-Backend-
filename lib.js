const sum = function (...a) {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    s = s + a[i];
  }
  return s;
};

const diff = function (...a) {
  let d = a[0];
  for (let i = 1; i < a.length; i++) {
    d = d - a[i];
  }
  return d;
};

const product = (...a) => {
  let p = 1;
  for (let i = 0; i < a.length; i++) {
    p = p * a[i];
  }
  return p;
};

export { sum, diff, product };
