import yaml from 'js-yaml';
import path from 'path';

const getParse = (filepath, file) => {
  const format = path.extname(filepath);
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(file);
  } if (format === '.json') {
    return JSON.parse(file);
  }
  throw new Error('Invalid file type');
};

export default getParse;
