function normalizeLogin(value) {
  return value.trim().toLowerCase();
}

console.assert(normalizeLogin(' Octocat ') === 'octocat');
console.assert(normalizeLogin('USER') === 'user');
console.assert(normalizeLogin('') === '');
console.log('Login normalization passed');
