import fs from 'fs';
import path from 'path';
import { OG_IMAGE } from '../src/config/site.js';
import { PAGE_SEO, canonicalUrl } from '../src/config/seoPages.js';

const escapeAttr = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;');

const replaceAttr = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`Balise introuvable pour ${replacement}`);
  }
  return html.replace(pattern, replacement);
};

const indexPath = path.resolve('dist/index.html');
const template = fs.readFileSync(indexPath, 'utf8');

for (const [route, meta] of Object.entries(PAGE_SEO)) {
  const url = canonicalUrl(route);
  let html = template;
  html = replaceAttr(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);
  html = replaceAttr(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
  );
  html = replaceAttr(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  );
  html = replaceAttr(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
  );
  html = replaceAttr(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
  );
  html = replaceAttr(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${url}" />`,
  );

  if (!html.includes('property="og:image"')) {
    html = html.replace('</head>', `    <meta property="og:image" content="${OG_IMAGE}" />\n  </head>`);
  }

  const outFile =
    route === '/'
      ? indexPath
      : path.join('dist', route.replace(/^\//, ''), 'index.html');

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`SEO HTML : ${route}`);
}
