# Indico Solid Comment

*See [indico-staging](notes/indico-staging.md) for more information about the deployment of [solid-comment](https://github.com/janschill/solid-comment).*

## Usage

1. Register a WebID and Solid pod
  * Pick a provider to your liking.
  * For a list of pod providers, click [here](https://solidproject.org/users/get-a-pod)
  * For an opiniated recommendation, read the [Policy for a CERN Solid server](https://codimd.web.cern.ch/s/zl3yGAfYZ#Summary).
2. Enable CERN SSH tunnel
3. Visit [https://indico-solid-test.cern.ch](https://indico-solid-test.cern.ch)
  * The TLS certificate is a [CERN-signed certificate](https://ca.cern.ch/ca/) and your browser could warn you about malicious activity.
  * Make sure the URL is correct (reach out to @janschill or @ThiefMaster)
  * Click on "Accept the Risk and Continue" (might differ based on browser)
4. Choose a dummy event you want to comment on
5. The event will request all the previous posted comments
6. Use the "Solid Identity Provider" input to add the address of your identity provider (IDP), not your WebID
  * Solid Community: https://janschill.solidcommunity.net/profile/card#me (WebID) -> https://solidcommunity.net (Identity Provider)
  * Inrupt: https://janschill.inrupt.net/profile/card#me (WebID) -> https://inrupt.net (Identity Provider)
  * Self-hosted: https://janschill.net/profile/card#me (WebID) -> https://janschill.net (Identity Provider)
7. Press "Log in"
8. You will be redirected to your IDP
9. Enter your credentials
10. You will be redirected to https://indico-solid-test.cern.ch
11. When successfully authenticated and logged in, the "Log in" button should now say "Log out"
12. Enter your desired text to comment and press submit.
