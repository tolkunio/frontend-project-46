import { test, expect } from '@jest/globals';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturesPath(filename), 'utf-8');

test('should be equal to expected', () => {
  const expected = readFile('result.txt');
  const result = genDiff(
    'file1.json',
    'file2.json',
  );
  console.log(`expected:${expected}, resul:${result}`);
  expect(result).toBe(expected);
});
