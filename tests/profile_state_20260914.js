function profileState(data) {
  return data && data.login ? 'found' : 'not-found';
}

console.assert(profileState({login:'octocat'}) === 'found');
console.assert(profileState(null) === 'not-found');
console.assert(profileState({}) === 'not-found');
console.log('Profile states passed');
