const fs = require("fs");
const loader = require("@assemblyscript/loader");

function loadWasm(file, imports) {
  return loader.instantiateSync(
    fs.readFileSync(`${__dirname}/../build/wasm/${file}`),
    imports
  );
}
module.exports = { loadWasm };
