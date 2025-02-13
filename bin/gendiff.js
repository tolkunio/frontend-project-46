#!/usr/bin/env node
import { Command } from "commander";
import genDiff from "../src/index.js";

const programm = new Command();
programm
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format')
    .arguments('<file1path1> <filepath2>')
    .option('-V, --version','output the version number')
    .option('-h, --help','output usage information')
    .action((file1,file2)=>{
        console.log(file1,file2);
    })
programm.parse(process.argv);
