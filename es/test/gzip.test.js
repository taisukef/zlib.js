import * as t from "https://deno.land/std/testing/asserts.ts";
import { gzip } from "../gzip.js";

Deno.test("gzip", async () => {
  const data = await Deno.readFile("test.txt");
  console.log(data.length);
  const bin = gzip(data);
  await Deno.writeFile("test.txt.gz", bin);
  t.assertEquals(bin.length, 315);
});
