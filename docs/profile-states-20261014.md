# Profile Finder States

- Validate the username before requesting a profile.
- Display loading feedback during the request.
- Treat not-found, rate-limit, and network errors as distinct cases.
- Use fallbacks for optional profile fields.
- URL-encode usernames and avoid embedding secrets in client-side code.