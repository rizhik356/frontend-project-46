import path from 'path';
import process from 'process';
import fs from 'fs';
import comparisonRules from './comparison.js';

const abolutePath = (pathfile) => path.resolve(process.cwd(), pathfile);
const readFile = (pathfile) => fs.readFileSync(abolutePath(pathfile), 'utf-8');

const getDifferent = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const parseFile1 = JSON.parse(file1);
  const parseFile2 = JSON.parse(file2);
  return comparisonRules(parseFile1, parseFile2);
};

export default getDifferent;
