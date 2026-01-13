import fs from 'fs';
import path from 'path';

const src = path.resolve('dist/index.html');
const dest = path.resolve('dist/404.html');

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error('❌ Erreur lors de la copie du 404.html :', err);
  } else {
    console.log('✅ 404.html créé avec succès dans le dossier dist');
  }
});
