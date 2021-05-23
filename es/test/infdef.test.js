import * as t from "https://deno.land/std/testing/asserts.ts";
import { inflate } from "../inflate.js";
import { deflate } from "../deflate.js";

Deno.test("inflate deflate", async () => {
  const data = await Deno.readFile("wakayama.zip");
  console.log(data.length);
  const bin = deflate(data);
  console.log(bin.length);
  const data2 = inflate(bin);
  console.log(data2.length);
  t.assertEquals(data, data2);
});
