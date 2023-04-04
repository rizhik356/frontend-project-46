import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import getDifferent from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (pathfile) => fs.readFileSync(pathfile, 'utf-8');

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const testfile = getFixturePath('test-json.txt');

test('comparison test', () => {
  expect(getDifferent(file1, file2) === readFile(testfile)).toBe(true);
});
