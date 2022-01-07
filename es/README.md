# zlib.js es version

## how to use

```js
import { deflate } from "https://taisukef.github.io/zlib.js/es/deflate.js";

const bin = deflate(data, opts);
```


## how to make

copy from bin/*.min.js
rename *.min.js *.js
edit *.js aa=this -> aa=globalThis
add *.js
```
const inflate = (buf) => {
  const inflate = new globalThis.Zlib.Inflate(buf);
  const res = inflate.decompress();
  return res;
};
export { inflate };
```
