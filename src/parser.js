import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';
import yaml from 'js-yaml';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const getFixturesPath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const getFileType = (filename) => path.extname(filename);

const getFileParse = (data, fileType) => {
  switch (fileType) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.load(data);
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown extension:${fileType}`);
  }
};

const parse = (file) => {
  const pathFile = getFixturesPath(file);
  const data = fs.readFileSync(pathFile, 'utf-8');
  const fileType = getFileType(file);
  return getFileParse(data, fileType);
};
export default parse;
