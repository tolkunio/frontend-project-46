import { test, expect } from '@jest/globals';
import path from 'path';
import genDiff from "../src/index.js";
import fs from 'fs';

const getFixturesPath =(filename)=>path.resolve(process.cwd(),filename);

test('should be equal to expected',()=>{
    const expected = fs.readFileSync(getFixturesPath('__fixtures__/result.txt'),'utf-8');
    const result=genDiff(
        getFixturesPath('__fixtures__/file1.json'), getFixturesPath('__fixtures__/file2.json'));
    expect(result).toBe(expected);
})
