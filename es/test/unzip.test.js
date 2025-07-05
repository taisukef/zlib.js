import * as t from "https://deno.land/std/testing/asserts.ts";
import { unzip } from "../unzip.js";

Deno.test("simple", async () => {
  const data = await Deno.readFile("wakayama.zip");
  // data = Array.<number> or Uint8Array
  const zips = unzip(data);
  const filenames = zips.getFilenames();
  //console.log(filenames);
  const fn = "agency.txt";
  const plain = new TextDecoder().decode(zips.decompress(fn));
  //console.log(plain);
  t.assertEquals(plain, `"agency_id","agency_name","agency_url","agency_timezone","agency_lang","agency_phone","agency_fare_url"
"6170001003822","和歌山バス","http://www.wakayamabus.co.jp/","Asia/Tokyo","ja","0734459133",
`);
});
Deno.test("japanese", async () => {
  const data = await Deno.readFile("test-jp.zip");
  const zips = unzip(data);
  const filenames = zips.getFilenames();
  //console.log(filenames);
  t.assertEquals(filenames, ["テスト.txt"]);
  const fn = filenames[0];
  const plain = new TextDecoder().decode(zips.decompress(fn));
  //console.log(plain);
  t.assertEquals(plain, "テスト\n");
});
