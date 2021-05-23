import * as t from "https://deno.land/std/testing/asserts.ts";
import { crc32 } from "../crc32.js";

Deno.test("crc32", async () => {
  const data = await Deno.readFile("wakayama.zip");
  console.log(data.length);
  const n = crc32(data);
  console.log(n);
  t.assertEquals(n, 3207906743);
});
