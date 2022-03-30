import { zip } from "../zip.js";
import { unzip } from "../unzip.js";

const org = "test / テスト文字列";

//const data = new Uint8Array(await Deno.readFile("test.txt"));
const data = new TextEncoder().encode(org);
const z = zip();
z.addFile(data, { filename: new TextEncoder().encode("test.txt") });
const bin = z.compress();
console.log(bin, bin.length);
//await Deno.writeFile("test.txt.zip", bin);

const zips = unzip(bin);
const filenames = zips.getFilenames();
console.log(filenames);
const plain = new TextDecoder().decode(zips.decompress(filenames[0]));
console.log(plain);
