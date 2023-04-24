import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (tree, formatter) => {
  const normalize = formatter.toLowerCase();
  if (normalize === 'stylish') {
    return stylish(tree);
  } if (normalize === 'plain') {
    return plain(tree);
  } if (normalize === 'json') {
    return json(tree);
  }
  throw new Error(`Invalid type format: ${formatter}`);
};

export default format;
