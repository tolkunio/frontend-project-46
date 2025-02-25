import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const getFixturesPath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const parse = (file) => {
  const pathFile = getFixturesPath(file);
  const data = fs.readFileSync(pathFile, 'utf-8');
  return JSON.parse(data);
};
export default parse;
