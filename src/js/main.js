import { glueCode } from "./glueCode";
import { global } from "./globals";
import { sayHello } from "./sayHello";

const wasmPath = "../wasm/main.wasm";
const imports = {
  env: { sayHello }, // needs file env.ts in arc/as
};

async function init() {
  global.wasm = await glueCode(wasmPath, imports);
  console.log(global.wasm);
  document.getElementById("add").textContent = global.wasm.exports.add(19, 23);
  document.getElementById("multiply").textContent = global.wasm.exports.multiply(19, 23);

  console.log("Mem", global.wasm.exports.memory);
  const memoryArray = new Uint8Array(global.wasm.exports.memory.buffer);
  console.log(memoryArray[0]);
  console.log(memoryArray[1]);
}

try {
  init();
} catch (e) {
  console.error(e);
}
