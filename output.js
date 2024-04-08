var _ref, _, _ref2, _ref3, _2;
const addOne = n => n + 1;
const mulByTwo = n => n * 2;
const pipe1 = (_ref = (_ = 5, addOne(_)), mulByTwo(_ref));
console.log(pipe1); // 12

const pipe2 = (_ref2 = (_ref3 = (_2 = 5, mulByTwo(_2)), addOne(_ref3)), mulByTwo(_ref2));
console.log(pipe2); // 22
