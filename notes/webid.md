# WebID

WebID is a method for identification on the Web.
The WebID specifications define drafts for the standardization for identity, identification and authentication on HTTP.
A WebID is an HTTP URI that denotes an agent on the Web.
For example: https://jan.janschill.de/profile/card#me

- Decentralized identity platform and decentralized authentication mechanism through cryptography with WebID-TLS.

For WebIDs **with** a fragment identifier (`#me`), the URI without the fragment denotes the Profile Document.
For WebIDs **without** a fragment identifier, a request to the WebID must return a 303 response with a Location header URI referring to the Profile Document. [Source](https://dvcs.w3.org/hg/WebID/raw-file/tip/spec/identity-respec.html#terminology)
WebID Profile/Profile Document is an RDF document which uniquely describes the Agent denoted by the WebID in relation to that WebID.

**The WebID URI** - http://www.w3.org/People/Berners-Lee/card#i is an identifier that refers to a person (agent).
**The WebID Profile URI** - http://www.w3.org/People/Berners-Lee/card refers to the document describing that person who is the referent of the WebID URI.


## WebID-TLS


