function normalizeUsername(value) {
  return typeof value === 'string' ? value.trim() : '';
}

console.assert(normalizeUsername('  octocat ') === 'octocat');
console.assert(normalizeUsername('') === '');
console.assert(normalizeUsername(null) === '');
console.log('Profile query tests passed');
