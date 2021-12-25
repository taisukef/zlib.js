# zlib.js es version

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
