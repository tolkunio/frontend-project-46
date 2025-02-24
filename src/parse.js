import fs from 'fs';
import path from 'path';
import { cwd } from 'node:process';

const getFilePath = (filePath) => path.resolve(cwd(), filePath);
const parse = (file) => {
  const pathFile = getFilePath(file);
  const data = fs.readFileSync(pathFile, 'utf-8');
  return JSON.parse(data);
};
export default parse;
