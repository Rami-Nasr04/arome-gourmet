// vite-react-ssg injects Head tags before the template's own <head> content,
// pushing <meta charset> past the 1024-byte window the HTML5 spec allows.
// Move it to the very start of <head> in every prerendered page.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CHARSET = '<meta charset="UTF-8">';

function* htmlFiles(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* htmlFiles(path);
    else if (name.endsWith('.html')) yield path;
  }
}

for (const file of htmlFiles('dist')) {
  const html = readFileSync(file, 'utf8');
  if (html.indexOf(CHARSET) <= html.indexOf('<head>') + '<head>'.length) continue;
  const moved = html.replace(CHARSET, '').replace('<head>', `<head>${CHARSET}`);
  writeFileSync(file, moved);
}
