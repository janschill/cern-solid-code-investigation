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
- DPoP-bound access token

## HTTP request methods

The `HEAD` method requests the resources the same way as GET, but without the response body.
The `OPTIONS` method requests a response with the implemented HTTP methods of a server

## OAuth v2.0

Security standard that one gives an application permission to access data in another application.

One will give this application a key – instead of credentials – to access data on one's behalf in this other application.

This is called delegated authorization.

### OAuth v2.0 Flow

#### Terms

* **Resource Owner (RO)**: owner of the data
* **Client**: wants to access data of RO, perform actions on behalf of RO
* **Authorization Server (AS)**: the application that knows the RO, where RO has an account
* **Resource Server (RS)**: API that the client wants to use
* **Redirect URI**: AS will redirect the RO back to, after client has permissions
* **Response Type**: type of information the client expects to receive; mostly authorization code
* **Scope**: granular permission the client wants; access to data
* **Consent**: the action that needs to be performed to give access to the scope
* **Client ID**: used to identify the client with the AS
* **Client Secret**: shared secret between client and AS
* **Authorization Code (AC)**: temporarily code, AS sends to client; client sends AC with client secret back to AS in exchange for an access token
* **Access Token**: the key the client will use to communicate with the RS

#### Flow

1. RO wants a certain feature on the client
2. Client sends request with: Client ID, Redirect URI, Response Type, Scope to the Authorization Server
3. AS verifies who the RO is (active session?) prompts a login (with credentials)
4. AS shows consent form, based on the request from the client
5. AS uses redirect URI to send RO back to client, sends an authorization code within the request
6. Client then sends itself a request to the AS with: Client ID, Client Secret and Authorization Code
7. AS verifies the data and responds with Access Token (and ID token in OIDC format a JSON Web Token (JWT))
8. Client uses Access Token and requests data from the Resource Server
9. RS verifies the Access Token and sends back the data

Long before the Authorization Server had granted the Client with a Client ID and secret for future exchanges. The secret needs to be kept in secret. This is how the AS can verify the client.

### OpenID Connect (OIDC)

OAuth v2.0 is designed only for authorization to grant access to data from one application to another. Does not tell anything about the RO.

Thin layer sits on top of OAuth v2.0, that adds functionality around login and profile information about the RO.

Instead of key given to the client, it gives a badge. A badge does not only hold permissions, but also basic information who the RO is.

Where OAuth enables authorization from one app to another, OIDC enables a client a login session (authentication) as well as gain information about the logged in user, the RO often referred to as identity.

Identity provider, since it provides identity information back to the client. Enables one login over multiple application. Also known as Single-Sign-On (SSO).

ATM is the client, access data from bank. Bank card is the token, issued by the bank. Gives ATM access to bank and information about RO; who issues the card; when it expires.
OIDC needs OAuth. Just like ATM needs the bank.
