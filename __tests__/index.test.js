import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import { expect } from '@jest/globals';
import getDifferent from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (pathfile) => fs.readFileSync(pathfile, 'utf-8');

const file1 = getFixturePath('file3.json');
const file2 = getFixturePath('file4.json');
const file3 = getFixturePath('file3.yaml');
const file4 = getFixturePath('file4.yaml');
const testplainFile = getFixturePath('test-plain-file.txt');
const testfile = getFixturePath('test-file.txt');

test('comparison test(YAML)', () => {
  expect(getDifferent(file3, file4, 'stylish')).toEqual(readFile(testfile));
});

test('comparison(JSON)', () => {
  expect(getDifferent(file1, file2, 'stylish')).toEqual(readFile(testfile));
});

test('invalid file type', () => {
  expect(() => { getDifferent(file1, testfile); }).toThrow('Invalid file type');
});

test('comparison(plain format)', () => {
  expect(getDifferent(file1, file2, 'plain')).toEqual(readFile(testplainFile));
});

test('invalid format type', () => {
  expect(() => { getDifferent(file1, file2, 'nested'); }).toThrow('Invalid type format: nested');
});
