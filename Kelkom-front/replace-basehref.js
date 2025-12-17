const fs = require('fs');
const path = 'dist/KelkomGames/browser/index.html';

let html = fs.readFileSync(path, 'utf8');

html = html.replace(
  /<base href="[^"]*">/,
  '<base href="/Kelkom/">'
);

fs.writeFileSync(path, html);

console.log('✔ base href corregido');
