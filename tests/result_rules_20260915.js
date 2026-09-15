function hasProfile(profile) {
  return profile !== null && typeof profile === 'object';
}

console.assert(hasProfile({login: 'octocat'}));
console.assert(!hasProfile(null));
