# zlib.js es version

## usage

### unzip

```js
const data = await Deno.readFile("wakayama.zip");
const zips = unzip(data);
const filenames = zips.getFilenames();
for (const fn of filenames) {
  const bin = zips.decompress(fn);
  console.log(fn, bin.length);
}
```

### deflate

```js
import { deflate } from "https://taisukef.github.io/zlib.js/es/deflate.js";

const bin = deflate(data, opts);
```

## how to make ESmodules

1. copy from bin/*.min.js
2. rename *.min.js *.js
3. edit *.js aa=this -> aa=globalThis
4. add *.js

```js
const inflate = (buf) => {
  const inflate = new globalThis.Zlib.Inflate(buf);
  const res = inflate.decompress();
  return res;
};
export { inflate };
```
