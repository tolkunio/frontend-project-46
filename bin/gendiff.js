import { Command } from "commander";

const programm = new Command();
programm
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-V, --version','output the version number')
    .option('-h, --help','output usage information');
programm.parse();
