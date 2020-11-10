# Concepts to understand

- [TLS Client Auth](https://blog.cloudflare.com/introducing-tls-client-auth/#handshakeswithtlsclientauth)
- WebID
- Certificates
- Identity provider
- 0.0.0.0 vs 127.0.0.1
- Linked Data Platform
- OpenID Connect
  - Solid uses this technology to authenticate users
  - Three steps are involved: (1) Be redirected away from your app to an Identity Provider (e.g. their Google account); (2) Log in the Identity Provider; (3) Be redirected back to your app
  - [solid-client-authn-browser](https://github.com/inrupt/solid-client-authn-js) can do this on the client side
  - [Source](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/authenticate/)
- [Vocabularies](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/use-vocabularies/)
  - [vCard-rdf])https://www.w3.org/TR/vcard-rdf/)

## HTTP request methods

The `HEAD` method requests the resources the same way as GET, but without the response body.
The `OPTIONS` method requests a response with the implemented HTTP methods of a server
