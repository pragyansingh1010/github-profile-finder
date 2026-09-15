function cleanUsername(value) {
  return value.trim();
}

console.assert(cleanUsername('  octocat ') === 'octocat');
console.assert(cleanUsername('user') === 'user');
