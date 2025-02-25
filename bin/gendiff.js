#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const programm = new Command();
programm
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .version('1.0.0')
  .action((filepath1, filepath2) => {
    const result = genDiff(filepath1, filepath2);
    console.log(result);
  });
programm.parse(process.argv);
