function validUsername(name) {
  return typeof name === 'string' && name.trim().length > 0;
}

console.assert(validUsername('octocat'));
console.assert(!validUsername(''));
console.assert(!validUsername('   '));
console.log('Username rules passed');
