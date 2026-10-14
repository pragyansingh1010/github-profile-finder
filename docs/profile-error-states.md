# Profile Finder Error States

Distinguish a missing username, a profile that does not exist, a rate-limit response, and a network failure. Show loading feedback while fetching. Optional profile fields should have safe fallbacks. URL-encode usernames before constructing request URLs and keep credentials out of browser code.