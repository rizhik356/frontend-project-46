import _ from 'lodash';

const comparisonRules = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const result = [];
  const unionKeys = _.sortBy(_.union(keys1, keys2));
  unionKeys.forEach((key) => {
    if (_.has(file1, key) && _.has(file2, key) && file1[key] === file2[key]) {
      result.push(`\n   ${key}: ${file1[key]}`);
    } if (_.has(file1, key) && _.has(file2, key) && file1[key] !== file2[key]) {
      result.push(`\n - ${key}: ${file1[key]}`);
      result.push(`\n + ${key}: ${file2[key]}`);
    } if (!_.has(file1, key)) {
      result.push(`\n + ${key}: ${file2[key]}`);
    } if (!_.has(file2, key)) {
      result.push(`\n - ${key}: ${file1[key]}`);
    }
  });
  return `{${result.join('')}\n}`;
};

export default comparisonRules;
