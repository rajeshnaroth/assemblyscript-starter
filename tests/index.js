const assert = require("assert");
const { loadWasm } = require("./loadWasm");

const imports = {
  index: { sayHello: () => console.log("Hello from WebAssembly!") },
};

const wasmModule = loadWasm("main.wasm", imports);
module.exports = wasmModule.exports;

assert.strictEqual(wasmModule.exports.add(1, 2), 3);
console.log("ok");
