// Each named export can be individually imported into another module

export const remove = (arr, el) => arr.filter(item => item !== el);

export const uniq = (arr) => {
  const uniqueArray = [];
  arr.forEach(el => !uniqueArray.includes(el) && uniqueArray.push(el));
  return uniqueArray;
};

export const arrToObj = (arr) => {
  const arrObj = {};
  arr.forEach((el, i) => (arrObj[i] = el));
  return arrObj;
};

export const random = (min, max) => (Math.floor(Math.random() * max + min));
