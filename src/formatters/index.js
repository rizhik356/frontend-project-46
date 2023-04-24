import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (tree, formatter = 'stylish') => {
  if (formatter === 'stylish') {
    return stylish(tree);
  } if (formatter === 'plain') {
    return plain(tree);
  } if (formatter === 'json') {
    return json(tree);
  }
  throw new Error(`Invalid type format: ${formatter}`);
};

export default format;
