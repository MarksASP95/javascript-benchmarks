import { v4 as uuidv4 } from "uuid";

const generateArray = (amount) => {
  return Array(amount).fill(1).map(() => ({ id: uuidv4() }));
}

const generateObjectFromArray = (arr) => {
  const obj = {};
  for (const item of arr) {
    obj[item.id] = item;
  }

  return obj;
}

const searchItemInArray = (arr, item) => {
  return arr.find((arrItem) => arrItem.id === item.id);
}

const searchItemInObj = (obj, item) => {
  return obj[item.id];
}

const arr1_000 = generateArray(1_000);
const arr10_000 = generateArray(10_000);
const arr100_000 = generateArray(100_000);

const obj1_000 = generateObjectFromArray(arr1_000);
const obj10_000 = generateObjectFromArray(arr10_000);
const obj100_000 = generateObjectFromArray(arr100_000);

const amountRounds = 10;
const idsToFind1_000 = Array(amountRounds).fill(1).map(() => arr1_000[Math.floor(Math.random() * arr1_000.length)]);
const idsToFind10_000 = Array(amountRounds).fill(1).map(() => arr10_000[Math.floor(Math.random() * arr10_000.length)]);
const idsToFind100_000 = Array(amountRounds).fill(1).map(() => arr100_000[Math.floor(Math.random() * arr100_000.length)]);

{
  console.log("--- Test for Array 1.000");
  
  let totalTime = 0;
  for (const item of idsToFind1_000) {
    const t0 = performance.now();
    searchItemInArray(arr1_000, item);
    const t1 = performance.now();
    totalTime += (t1 - t0);
    console.log(`Item found in ${t1 - t0} ms`);
  }

  console.log(`Avg.: ${(totalTime / amountRounds).toFixed(4)} ms`)
}
{
  console.log("--- Test for Object 1.000");
  
  let totalTime = 0;
  for (const item of idsToFind1_000) {
    const t0 = performance.now();
    searchItemInObj(obj1_000, item);
    const t1 = performance.now();
    totalTime += (t1 - t0);
    console.log(`Item found in ${t1 - t0} ms`);
  }

  console.log(`Avg.: ${(totalTime / amountRounds).toFixed(4)} ms`)
}

// ----------------------------------

{
  console.log("--- Test for Array 10.000");
  
  let totalTime = 0;
  for (const item of idsToFind10_000) {
    const t0 = performance.now();
    searchItemInArray(arr10_000, item);
    const t1 = performance.now();
    totalTime += (t1 - t0);
    console.log(`Item found in ${t1 - t0} ms`);
  }

  console.log(`Avg.: ${(totalTime / amountRounds).toFixed(4)} ms`)
}
{
  console.log("--- Test for Object 10.000");
  
  let totalTime = 0;
  for (const item of idsToFind10_000) {
    const t0 = performance.now();
    searchItemInObj(obj10_000, item);
    const t1 = performance.now();
    totalTime += (t1 - t0);
    console.log(`Item found in ${t1 - t0} ms`);
  }

  console.log(`Avg.: ${(totalTime / amountRounds).toFixed(4)} ms`)
}

// ----------------------------------

{
  console.log("--- Test for Array 100.000");
  
  let totalTime = 0;
  for (const item of idsToFind100_000) {
    const t0 = performance.now();
    searchItemInArray(arr100_000, item);
    const t1 = performance.now();
    totalTime += (t1 - t0);
    console.log(`Item found in ${t1 - t0} ms`);
  }

  console.log(`Avg.: ${(totalTime / amountRounds).toFixed(4)} ms`)
}

{
  console.log("--- Test for Object 100.000");
  
  let totalTime = 0;
  for (const item of idsToFind100_000) {
    const t0 = performance.now();
    searchItemInObj(obj100_000, item);
    const t1 = performance.now();
    totalTime += (t1 - t0);
    console.log(`Item found in ${t1 - t0} ms`);
  }

  console.log(`Avg.: ${(totalTime / amountRounds).toFixed(4)} ms`)
}


export {
  generateArray,
  generateObjectFromArray,
}