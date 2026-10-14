## Profile lookup cases

- Normalize the username input and reject an empty query.
- Distinguish not-found responses from rate limits and network errors.
- Handle optional profile fields without rendering `undefined`.
- Keep loading and result states consistent when users search repeatedly.
- Make external profile links open the correct account.