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

WebID requires that the server support the Turtle data representation of profile documents.

WebID RDF graphs are described using vocabularies identified by URIs. [Source](https://dvcs.w3.org/hg/WebID/raw-file/tip/spec/identity-respec.html#webid-profile-vocabulary)

Example turtle representation of the WebID profile with the WebID `https://bob.example.org/profile#me`.

```
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<> a foaf:PersonalProfileDocument ;
   foaf:maker <#me> ;
   foaf:primaryTopic <#me> .

<#me> a foaf:Person ;
   foaf:name "Bob" ;
   foaf:knows <https://example.edu/p/Alice#MSc> ;
   foaf:img <https://bob.example.org/picture.jpg>
```

Privacy can be achieved by placing information into separate documents, that have limited access by access control policies.

```
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

<> a foaf:PersonalProfileDocument ;
   foaf:maker <#me> ;
   foaf:primaryTopic <#me> .

 <#me> a foaf:Person ;
   foaf:name "Bob" ;
   rdfs:seeAlso <https://bob.example.org/friends> ;
   foaf:img <https://bob.example.org/picture.jpg> .
```

Where https://bob.example.org/friends is a reference to an Access Control List (ACL) protected document containing:

```
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<> a foaf:PersonalProfileDocument ;
   foaf:maker <https://bob.example.org/profile#me> ;
   foaf:primaryTopic <https://bob.example.org/profile#me> .

 <https://bob.example.org/profile#me> a foaf:Person ;
   foaf:knows <https://example.edu/p/Alice#MSc> ;
   foaf:knows <https://example.com/people/Mary/card#me> .
```

and having the following corresponding ACL rule, expressed using the [WebAccessControl](http://www.w3.org/wiki/WebAccessControl) ontology:

```
@prefix acl: <http://www.w3.org/ns/auth/acl#> .

<#FriendsOnly> ;
   acl:accessTo <https://bob.example.org/friends> ;
   acl:agent <http://example.edu/p/Alice#Msc>, <http://example.com/people/Mary/card#me> ;
   acl:mode acl:Read .
```

[WebID specification](https://dvcs.w3.org/hg/WebID/raw-file/tip/spec/identity-respec.html)

## WebID-TLS

TODO: Read [WebID-TLS](https://www.w3.org/2005/Incubator/webid/spec/tls/)
