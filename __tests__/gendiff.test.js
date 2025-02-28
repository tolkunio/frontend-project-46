import {test, expect, describe} from '@jest/globals';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturesPath(filename), 'utf-8');

const expectedStylish = readFile('expectedStylish.txt');

const fileTypes=['json', 'yaml', 'yml'];

describe('gendiff stylish', () => {
  test('shoud be equal string data from json file', () => {
    const expected = readFile('expectedFileStylish.txt');

    const file1 = getFixturesPath('file1.json');
    const file2 = getFixturesPath('file2.json');

    const result = genDiff(file1, file2, 'stylish');
    expect(result).toBe(expected);
  })
})
