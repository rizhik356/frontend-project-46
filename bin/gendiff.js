#!/usr/bin/env node
import { Command } from 'commander';
import getDifferent from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .version('1.0.0')
  .action((filepath1, filepath2) => console.log(getDifferent(filepath1, filepath2)));
program.parse();
