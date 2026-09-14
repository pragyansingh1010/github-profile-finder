function validCount(value) {
  return Number.isInteger(value) && value >= 0;
}

console.assert(validCount(0));
console.assert(validCount(100));
console.assert(!validCount(-1));
console.assert(!validCount(1.5));
console.log('Follower count rules passed');
