import * as t from "https://deno.land/std/testing/asserts.ts";
import { gzip } from "../gzip.js";
import { gunzip } from "../gunzip.js";

Deno.test("gunzip", async () => {
  const bin = await Deno.readFile("test.txt.gz");
  const txt = await Deno.readFile("test.txt");
  const txt2 = gunzip(bin);
  t.assertEquals(txt.length, txt2.length);
  t.assertEquals(txt, txt2);
  const bin2 = gzip(txt2);
  t.assertEquals(bin.length, bin2.length);
  //t.assertEquals(bin, bin2); // difference form timestamp
});
