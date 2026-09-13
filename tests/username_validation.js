function validUsername(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

console.assert(validUsername('octocat'));
console.assert(validUsername('pragyan'));
console.assert(!validUsername(''));
console.assert(!validUsername('   '));
console.log('Username validation passed');
