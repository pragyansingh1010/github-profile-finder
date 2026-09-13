function profileState(profile) {
  if (!profile) return 'not-found';
  if (!profile.login) return 'invalid';
  return 'ready';
}

console.assert(profileState(null) === 'not-found');
console.assert(profileState({}) === 'invalid');
console.assert(profileState({login: 'octocat'}) === 'ready');
console.log('Profile state tests passed');
