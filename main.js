const addOne = (n) => n + 1;
const mulByTwo = (n) => n * 2;

const pipe1 = 5 |> addOne |> mulByTwo;
console.log(pipe1); // 12

const pipe2 = 5 |> mulByTwo |> addOne |> mulByTwo;
console.log(pipe2); // 22
