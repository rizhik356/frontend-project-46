const ident = (depth, spaceCount = 4, leftIndentation = 0) => ' '.repeat(spaceCount * depth - leftIndentation);

const stringify = (node, depth) => {
  if (typeof node !== 'object') {
    return `${node}`;
  } if (node === null) {
    return null;
  }

  const result = [];
  const entries = Object.entries(node);
  entries.map(([key, value]) => {
    const line = `${ident(depth + 1)}${key}: ${stringify(value, depth + 1)}\n`;
    result.push(line);
    return result;
  });
  return `{\n${result.join('')}${ident(depth)}}`;
};

const stylish = (innerTree) => {
  const iter = (tree, depth) => tree.map((node) => {
    const getValue = (value, sign) => `${ident(depth, 4, 2)}${sign} ${node.name}: ${stringify(value, depth)}\n`;
    switch (node.status) {
      case 'added':
        return getValue(node.value, '+');
      case 'deleted':
        return getValue(node.value, '-');
      case 'unchanged':
        return getValue(node.value, ' ');
      case 'different values':
        return `${getValue(node.value1, '-')}${getValue(node.value2, '+')}`;
      case 'object':
        return `${ident(depth, 4, 2)}  ${node.name}: {\n${iter(node.value, depth + 1).join('')}${ident(depth)}}\n`;
      default:
        throw new Error(`Invalid type of status: ${node.status}`);
    }
  });
  return `{\n${iter(innerTree, 1).join('')}}`;
};

export default stylish;
