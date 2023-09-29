import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataPath = path.resolve(__dirname, '../data');

export const writeJson = (data: object, filePath: string) => {
  fs.writeFile(`${dataPath}/${filePath}`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log(`JSON has been written to ${filePath}.`);
  });
};
