# Report

<!--
Rethought structure:

* What is Solid?
* What is a data pod?
* Review specifications
* How is a data pod implemented?
* What implementations exist?

-->

## Introduction Solid

The Web was created in 1989 by Tim Berner's Lee while working at CERN "to allow people to work together by combining their knowledge in a web of hypertext documents." [Source](https://www.w3.org/People/Berners-Lee/Longer.html).
This brilliant idea has ever since grown as an essential part of our all lives. While it has given a new platform for all types of innovation, it has also evolved away from the initial idea of sharing knowledge freely. What term has been coined describing the phenomena of isolating data from the public by creating the so called *data silos*. The data in these silos is then only available to the organization controlling the application.
A multitude of problems reside with this, like the actual content creator not owning their own data, nor having full access to it.
Another drawback is that the application owners decide what interfaces are publicly accessable, therefore, not allowing users easy migrations of their data.
This results in one user having to provide the same information to different applications: username, name, age and others depending on the domain. The same problem applies to traditional web application when authenticating their users. Usually applications will do the authentication themselves, but there are initiatives that decentralize this authentication, which is called single Sign-On (SSO).
Solid is aiming at solving these problems by standardizing an ecosystem where data is stored on data pods choosen and fully controlled by the users/agents, where they can decided who has access to what data; Linked Data is utilized to create interoparable data, for seamless migration between applications and pods; authenticate with one identity provider (IDP) to use multiple Solid applications with one username and password combination.
<!-- TODO: More? -->
## Overview of Solid

<!--
* storage (data pod)
  * REST
    * hierarchy
    * Methods
  * LDP
  * Containers/resources
  * RDF
* authentication (webid, oauth/oidc)
* applications

-->

In Solid data is stored on personal and through the Web-accessible storages, these are called *data pods*.
Data pods are personal in the sense of users configuring the access control to the data on their pods themselves. Web-accessible because the pods can be connected to as long as a connection to the Web exists and the correct access controls are given.
<!-- A pod server is a web server storing the data pod and managing request-response flows. -->
Users or agents can freely choose from their favorite pod provider where there would like to store data. As of writing this there are two major providers online, inrupt.net and solidcommunity.net.



The other crucial part of Solid is the decentralized authentication.



## Review of Solid Specifications

[The Solid Ecosystem](https://solid.github.io/specification/) is a by the [Solid editorial team](https://github.com/solid/process/blob/master/panels.md) published technical report. It is the official rewrite of the informal [Solid specification](https://github.com/solid/solid-spec/), which was initially used to define the architecture of Solid servers and clients. This rewrite is still incomplete and being worked on continuously.

### Summary

The Solid Ecosystem combines a set of carefully selected specifications that were adopted or newly defined, to bring together an architecture that aligns the principles and values of Solid. These components are loosely coupled, can therefore evolve as independently as possible, to ensure flexibility and robustness [Source p4](https://solid.github.io/specification/#intro).

The main specification starts off by describing how a data pod and a Solid app should be implemented using the HTTP protocol.\
A data pod is a web server that responds to HTTP requests and returns HTTP responses. Its purpose is the storage of data and the management of who has access to this data.\
A Solid app is a client that is sending requests to a data pod. It should be able to read and write depending on the access control to a data pod.\
<!-- TODO: not sure if this is needed -->
<!-- At the bare minimum a data pod needs to implement the following:
- HTTP/1.1
- HTTP/1.1 Conditional Requests
- HTTP/1.1 Authentication
  - Without proper credentials, respond with a 401 HTTP response code
- Reject `PUT`, `POST` and `PATCH` without a `Content-Type` header with HTTP response code 400

For the client implementation it states these necessities:

- HTTP/1.1
- HTTP/1.1 Authentication client part
- Must send the `Content-Type` header with `PUT`, `POST` and `PATCH` requests
-->

The Uniform Resource Identifier (URI) plays an essential role in the Solid Ecosystem, for it is being used to identify users with [WebID](#webid), it is used with resources in the Linked Data Platform and more generally give information about the hierarchy of stored information on the data pod.\
URIs also give information about the location to resources on a data pod. The slash character in the end of a URI indicates a container resource.
A container resource is an organizing concept in the Linked Data Platform [[Source]](https://www.w3.org/TR/ldp/#ldpc). It stores linked documents or information resources, which handle requests from clients for their creation, modification, traversal of the linked documents [[Source]](https://www.w3.org/TR/ldp/#dfn-linked-data-platform-container).<!-- TODO: could need a more thorough explanation here -->\
A data pod stores data, therefore, it needs a storage mechanism, which means a "space of URIs in which data can be accessed" [[Source]](https://solid.github.io/specification/#storage).\
Solid uses containment. Containment is the relationship binding between a container (LDPC) and its resources (LDPR). The lifecycles of the LDPRs are limited by the lifecycle of its LDPC, as a resource cannot be stored without a container [[Source]](https://www.w3.org/TR/ldp/#dfn-containment).
"A storage is the root container for all its contained resources" [[Source]](https://solid.github.io/specification/#storage).\
An LDPC maintains a list of containment triples, which have the form of (LDPC URI, ldp:contains, document-URI) and list all the by the LDPC created documents.

"There is a 1-1 correspondence between containment triples and relative reference with the path name hierarchy" [[Source]](https://solid.github.io/specification/#resource-containment).

Example from this [comment](https://github.com/solid/specification/issues/98#issuecomment-547506617):

```
GET http://example.org/container/

<> ldp:contains <resource> .
```

maps to:

```
http://example.org/container/resource
```

Important to mention is that the root container needs an Access Control List (ACL) auxiliary resource with `acl:Control` access privilege associated with it [[Source]](https://solid.github.io/specification/#storage).

An auxiliary resource exists to give additional information, like configuration, processing, or interpretation about a Solid resource, for example: "A container linked to an auxiliary resource that includes access control statements for that container and the resources that belong to it."
`acl:Control` means that the user has complete control, in other words: read, write and append access [[Source]](https://www.w3.org/wiki/WebAccessControl#WAC_relation_to_HTTP_Verbs). <!-- TODO: this might not be completely true -->\
Another example "A binary JPEG image linked to an auxiliary resource that includes information describing that binary JPEG." makes the need a bit clearer, as a binary JPEG image does not carry any machine-readable information.
A Solid resource includes the location of its associated auxiliary resources in the `Link` header. These can be discovered by a `GET` or `HEAD` request to the Solid resource.

```
HEAD https://server.example/resource.ttl
Link: <https://server.example/acls/24986>; rel="http://www.w3.org/ns/solid/terms#acl"
Link: <https://server.example/shapes/85432>; rel="http://www.w3.org/ns/solid/terms#shape"
```

The ACL in Solid is realized with Web Access Control (WAC). The section for WAC in not yet written in the Solid specification but shall be given a short introduction.\
WAC is similar to access control schemes used in file systems. Files, users and groups are referenced by URLs. Users in particular are identified by WebIDs.
Its functionality is cross-domain and can therefore have an ACL resource – holding the permissions for an agent – on domain A, while setting the permissions for a file on domain B. The supported modes of operation are read, write, append and control.
Read and write are self-explanatory, whereas append and control introduce two interesting modes.
Append allows the agent to add files to a container, without being able to read or write any of the container's files. The idea of an email inbox can be compared to this functionality.\
Control means that the agent with this permission has access to the ACL resource and can modify it.\
Permissions are inherited through the ACL inheritance algorithm. The ACL algorithm looks for an ACL resource for the requested file, if none is found, it will check on the file's container, if none is found, it will go recursively up the hierarchy of the containers. The root container must by definition have an ACL resource associated with it.
The representation of ACL resources is by default in the RDF Turtle format and can be discovered in the `Link` header from the request to the Solid resource – if a specific ACL resource is attached, otherwise through the previously described ACL inheritance algorithm.

```
@prefix  acl:  <http://www.w3.org/ns/auth/acl#>  .

<#authorization1>
    a             acl:Authorization;
    acl:agent     <https://alice.databox.me/profile/card#me>;
    acl:accessTo  <https://alice.databox.me/docs/file1>;
    acl:mode      acl:Read,
                  acl:Write,
                  acl:Control.
```

TODO: The Turtle data representation format is not explained in the Solid ecosystem specification.

<!-- To extend on the previous mentioned necessity of `acl:Control` on the root container, TODO: more here *[Interesting comment](https://github.com/solid/specification/issues/197#issuecomment-699937520).*\ -->

A WebID is an HTTP URI that denotes an agent on the Web. WebID distinguishes between WebID URL and WebID Profile URI. The URI with a fragment identifier is the WebID and acts as the identifier for an agent. The Profile Document – describing the agent – can be reached by leaving out the fragment identifier.

* WebID URI: https://alice.janschill.de/profile/card#me
* WebID Profile URI: https://alice.janschill.de/profile/card

A WebID can also be defined without the fragment identifier. In this case a request to the WebID URI needs to return a Location header in its response, giving an URI where the Profile Document resides.

When making requests to a Solid server to create a resource on the server, HTTP `POST`, `PUT` or `PATCH` can be used. If the client wants to associate a specific URI with a resource, `PUT` or `PATCH` needs to be used. The server can be implemented to allow URI suggestions through a `POST` request and the `Slug` header. Otherwise, `POST` is the only way of letting the server decide on a URI for the resource [[Source]](https://solid.github.io/specification/#resource-type-heuristics).

A server must implement the HTTP response header: `Accept-Patch`, `Accept-Post`, `Accept-Put`. These headers specify which media-type the server understands in the corresponding request. The `Accept-Put` response header has not been introduced prior to the Solid specifications but is exactly defined after the `Accept-Post` and `Accept-Patch` response headers.

A server must create all intermediate containers and containment triples according to `PUT` and `PATCH` requests.

On a `POST` request to `/`, the server needs to create a resource under `/{slug}`.
On a `POST` request to `/{slug}/`, the server needs to create a container for `/`.

`PUT` or `PATCH` requests to an auxiliary resource, create or update the resource. A `POST` request is not allowed. This is because of its indeterministic nature of not needing to target a resource directly. In theory it would be possible with the `Slug` header, but it could introduce confusion and is therefore not allowed [[Source]](https://github.com/solid/specification/issues/42#issuecomment-616688848).

### Comments/Remarks

### Conclusion

## Evalutation of Solid Implementations

### Solid Servers

<!-- Notes

* Different flavors exist because Solid is a standard

-->

#### How to Set One Up

### Solid Clients

### Conclusion

## Overview of CERN




### Solid Data Pod

TODO:

* [ ] What is a data pod
  * [ ] Architecture
  * [ ] Infrastructure
  * [ ] Reference specifications
* [ ] How to set up a pod
* [ ] Lessons learned
* [ ] Why bother

Notes:

- [Subdomain vs. subdirectory](https://stackoverflow.com/questions/1965609/subdomain-vs-subdirectory-in-web-programming)
- Wildcard certificates

TODO:

* [ ] Overview
* [ ] Explain Solid
* [ ] Why bother

### Review of the Solid Specifications

<!--
Things to keep in mind:

* What is it?
* What is it not?
* What parts are missing?
* How can I be sure that something implemented today works tomorrow?
-->

TODO: review-solid-spec.md

* [ ] Summary of specifications
* [ ] Comments
* [ ] Recommendations

### Server Implementations

The initial Solid server was developed at the Massachusetts Institute of Technology (MIT) by PhD students. This server is still to this day the only server that passes most test cases of the [Solid Test Suite](https://github.com/solid/test-suite), which is a set of checks developed to test an implementation against the Solid specifications. The Test Suite for Solid is also still in development and constantly extended by more tests for the different categories of a Solid server.\
This server is completely open source, written in JavaScript with the help of the web framework Node.js and is commonly referred to as Node Solid Server (NSS).\
The NSS is currently used by the two publicly communicated Solid data pod and identity providers (IDPs) from https://inrupt.net/ and https://solidcommunity.net/ [[Source]](https://solidproject.org//users/get-a-pod).
It is also the server used to self-host a data pod under https://janschill.de/.\
At some point the decision to rewrite the NSS was made and is called Community Solid Server (CSS). This project is backed by the American company Inrupt, which has multiple reasons of doing so, which will be addressed shortly.\
CSS is an open source implementation written in TypeScript and just like the NSS with Node.js. At this moment CSS is in the alpha phase of the release life cycle and passes only a few cases from the Solid Test Suite – therefore, not eligible to use with Solid applications.\
Its focus is to build an implementation that adheres to the Solid specifications as tightly as possible, while being open source, to give the community a possibility to host their own data pod and developers a platform to create and test Solid applications; also, it being developed in a modular fashion allows an easy way of testing new ideas [[Source]](https://github.com/solid/community-server).

The main motivation to rewrite the NSS with TypeScript as the CSS is, because the NSS started as an idea into a prototype, which was constantly used to experiment with new ideas, that were not completely implemented and left in the code base. Over the years the code base has become unstructured and difficult to maintain. A new attempt seemed most feasible.

Why is CSS financed by Inrupt? Inrupt's co-founder Sir Tim Berners-Lee leads the Solid project, he is also the chief technology office (CTO) of Inrupt. Inrupt's main focus is the development of a closed source enterprise Solid server (ESS). The ESS is based on Java and the platform [Trellis](https://github.com/trellis-ldp), which offers a range of frameworks for building scalable Linked Data applications.\
With the ESS being closed source, Inrupt does not offer any open source Solid server. They do offer the Developer Tools, a set of tools and libraries that ease the development of enterprise-ready Solid applications and a handy Solid application called PodBrowser, allowing the connection and retrieval of all data hosted on a data pod.
Having an open source Solid server with the great benefits previously mentioned lets Solid to gain in popularity.

Other implementation exist, for example the [PHP Solid server](https://github.com/pdsinterop/php-solid-server).

TODO:

* [x] Briefly mention the different servers
  * [x] ESS
  * [x] NSS
  * [x] CSS
* [x] Solid specification test suite
* [ ] Compare the servers
* [ ] All points could be expanded on

### Client Implementations

* [x] Build a simple frontend application that
  * [x] authenticates with a Solid data pod
  * [x] reads the user from the pod
  * [x] reads data from the pod
  * [x] writes data to the pod
* [ ] Write about this implementation

## CERN

* Overview
* Indico

## Evaluation

TODO: ?
