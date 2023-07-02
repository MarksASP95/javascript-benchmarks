const { generateArray, generateObjectFromArray } = require("./index");

let amount_1;
let amount_2;
let amount_3;
beforeEach(() => {
  amount_1 = 1000;
  amount_2 = 10_000;
  amount_3 = 100_000;
})

test("must generate array of amount", () => {
  const array_1 = generateArray(amount_1);
  const array_2 = generateArray(amount_2);
  const array_3 = generateArray(amount_3);

  expect(array_1.length).toBe(amount_1);
  expect(array_2.length).toBe(amount_2);
  expect(array_3.length).toBe(amount_3);
});

test("array items must be unique", () => {
  const array_1 = generateArray(amount_1);
  const array_2 = generateArray(amount_2);
  const array_3 = generateArray(amount_3);

  expect(Array.from(new Set(array_1)).length).toBe(amount_1);
  expect(Array.from(new Set(array_2)).length).toBe(amount_2);
  expect(Array.from(new Set(array_3)).length).toBe(amount_3);
});

test("must generate object with number of keys same as amount", () => {
  const array_1 = generateArray(amount_1);
  const array_2 = generateArray(amount_2);
  const array_3 = generateArray(amount_3);

  const object_1 = generateObjectFromArray(array_1);
  const object_2 = generateObjectFromArray(array_2);
  const object_3 = generateObjectFromArray(array_3);

  expect(Object.keys(object_1).length).toBe(amount_1);
  expect(Object.keys(object_2).length).toBe(amount_2);
  expect(Object.keys(object_3).length).toBe(amount_3);
});