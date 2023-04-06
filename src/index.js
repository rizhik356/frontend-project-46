import path from 'path';
import process from 'process';
import fs from 'fs';
import comparisonRules from './comparison.js';
import getParse from './parsers.js';

const absolutePath = (pathfile) => path.resolve(process.cwd(), pathfile);
const readFile = (pathfile) => fs.readFileSync(absolutePath(pathfile), 'utf-8');

const getDifferent = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const absolutePathFile1 = absolutePath(filepath1);
  const absolutePathFile2 = absolutePath(filepath2);
  const parseFile1 = getParse(absolutePathFile1, file1);
  const parseFile2 = getParse(absolutePathFile2, file2);
  return comparisonRules(parseFile1, parseFile2);
};

export default getDifferent;
