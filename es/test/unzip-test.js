import { unzip } from "../unzip.js";

const data = await Deno.readFile("wakayama.zip");
// data = Array.<number> or Uint8Array
const zips = unzip(data);
const filenames = zips.getFilenames();
console.log(filenames);
const plain = new TextDecoder().decode(zips.decompress(filenames[0]));
console.log(plain);
