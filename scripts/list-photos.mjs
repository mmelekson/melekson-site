// Writes the list of real files in public/photos so the gallery can
// show them and leave every other slot as a captioned placeholder.
import { readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dir = resolve(root, 'public/photos');
const out = resolve(root, 'src/data/available-photos.json');
mkdirSync(dir, { recursive: true });
const files = existsSync(dir)
  ? readdirSync(dir).filter((name) => /\.(jpe?g|png|webp|avif)$/i.test(name)).sort()
  : [];
writeFileSync(out, JSON.stringify(files, null, 2) + '\n', 'utf8');
console.log(`✓ photo list — ${files.length} file${files.length === 1 ? '' : 's'}`);
