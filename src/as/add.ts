import { sayHello } from "./env";

sayHello();

export function add(x: i32, y: i32): i32 {
  return x + y;
}

memory.grow(1);
store<u8>(0, 10);
store<u8>(1, 20);
