#!/usr/bin/env node
console.log('xxx');
console.log('-----------');
console.log(process.argv.slice(2));
import { resolve, dirname } from 'node:path';
import { createRequire } from 'node:module';
import url from 'node:url';

(async () => {
  const helloFilePath = './hello.mjs';
  const require = createRequire(helloFilePath);

  Object.assign(global, { require });
  console.log(url.pathToFileURL(resolve(helloFilePath)).toString());

  // import 需要一个fileURL, 如果是path
  await import(resolve(helloFilePath));
})();

function $(command: string) {
  console.log('command:', command);
}
