import fs from 'fs/promises';

import { resolvePath } from './resolvePath';

const dataPath = resolvePath('../data');

export const writeJson = async (dataObject: object, relativePath: string) => {
  try {
    await fs.access(dataPath);
  } catch (err) {
    console.log('Error accessing directory', err);
  }

  try {
    await fs.writeFile(`${dataPath}/${relativePath}`, JSON.stringify(dataObject));
    console.log(`JSON has been written to ${relativePath}.`);
  } catch (err) {
    console.error('Error writing file', err);
  }
};
