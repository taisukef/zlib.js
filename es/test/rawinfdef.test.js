import * as t from "https://deno.land/std/testing/asserts.ts";
import { rawinflate } from "../rawinflate.js";
import { rawdeflate } from "../rawdeflate.js";

Deno.test("rawinflate rawdeflate", async () => {
  const data = await Deno.readFile("wakayama.zip");
  console.log(data.length);
  const bin = rawdeflate(data);
  console.log(bin.length);
  const data2 = rawinflate(bin);
  console.log(data2.length);
  t.assertEquals(data, data2);
});
