export async function glueCode(wasmPath, imports) {
  let result = WebAssembly.instantiateStreaming
    ? await WebAssembly.instantiateStreaming(fetch(wasmPath), imports)
    : await wasmFallback(wasmPath, imports);
  return result.instance;
}

// For older versions of Safari
async function wasmFallback(wasmPath, imports) {
  const response = await fetch(wasmPath);
  const bytes = await response?.arrayBuffer();
  const result = await WebAssembly.instantiate(bytes, imports);
  return result;
}
