import fs from 'fs';
import path from 'path';

const src = path.resolve('dist/index.html');
const dest = path.resolve('dist/404.html');

fs.copyFileSync(src, dest);
console.log('404.html créé dans dist');
