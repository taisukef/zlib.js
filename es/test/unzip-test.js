import { unzip } from "../unzip.js";

const data = await Deno.readFile("wakayama.zip");
// compressed = Array.<number> or Uint8Array
var zips = unzip(data);
var filenames = zips.getFilenames();
var plain = new TextDecoder().decode(zips.decompress(filenames[0]));
console.log(filenames);
console.log(plain);
