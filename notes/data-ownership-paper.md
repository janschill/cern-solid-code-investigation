# Notes for Data ownership and interoperability for a decentralized social semantic web

* Identity and identification [p4]
  * Identify something in a uniform manner: URI as global identifier.
  * URIs can return a useful description of what it identifies.
  * Identification the process of establishing once identity.
  * Persistent identity over decentralized service: WebID + WebID-TLS.
* Interoperability on the web [p5]
  * To offer true interoperability in the web a new standard is needed. There is no incentive to share data between web services, therefore, no widely adopted API to do so.
  * **The Semantic Web**
* Semantic Web [p5]
  * RDF and Turtle format to let the computer understand the resources and its relationship
  * RDF is about making statements about resources in form subject-predicate-object expressions (triples)
* WebID
  * HTTP URI uniquely
  * Can link to other WebID for web of trust (friends)
  * Work in progress by WWW consortium
* WebID-TLS
  * Authentication by using WebID and TLS
  * Is a protocol
  * Requests the certificate from client (no need to be signed by well known CA); relies then on, that client has private key matching public key on WebID

* Decentralized, user-centric identity management offers better privacy and control over the use of identity credentials, because it allows the user to choose flexibly what identity information is being released. p[11]

* Three entities: user/browser/client; service provider, identity provider
* OpenID is a lightweight identity management system
* RelayState, HTTP parameter with location of original resource requested
* Content negotiation, offering different format and language versions of the same web document over HTTP
  * HTTP headers to determine the format

```
Request:
GET /people HTTP/1.1
Host barry.example
Accept: text/turtle

Response:
HTTP/1.1 200 OK
Content-Type: text/turtle
Content-Location: https://barry.example/people
```
