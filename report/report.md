# CERN-Solid code investigation

<!--
Rethought structure:

* What is Solid?
* What is a data pod?
* Review specifications
* How is a data pod implemented?
* What implementations exist?

-->

## Introduction Solid

The Web was created in 1989 by Tim Berners-Lee while working at CERN "to allow people to work together by combining their knowledge in a web of hypertext documents." [Source](https://www.w3.org/People/Berners-Lee/Longer.html).
This brilliant idea has ever since grown as an essential part of our all lives. While it has given a new platform for all types of innovation, it has also evolved away from the initial idea of sharing knowledge freely. What term has been coined describing the phenomena of isolating data from the public by creating the so called *data silos*. The data in these silos is then only available to the organization controlling the application.
A multitude of problems reside with this, like the actual content creator not owning their own data, nor having full access to it.
Another drawback is that the application owners decide what interfaces are publicly accessable, therefore, not allowing users easy migrations of their data.
This results in one user having to provide the same information to different applications: username, name, age and others depending on the domain. The same problem applies to traditional web application when authenticating their users. Usually applications will do the authentication themselves, but there are initiatives that decentralize this authentication, which is called single Sign-On (SSO).
Solid is aiming at solving these problems by standardizing an ecosystem where data is stored on data pods chosen and fully controlled by the users/agents, where they can decided who has access to what data; Linked Data is utilized to create interoperable data, for seamless migration between applications and pods; authenticate with one identity provider (IDP) to use multiple Solid applications with one username and password combination.
<!-- TODO: More? -->
## Overview of Solid

<!--
* storage (data pod)
  * LDP and REST
    * hierarchy
    * Methods
    * Containers/resources
    * RDF
      * RDF Schemas
    * SPARQL?
  *
* authentication (webid, oauth/oidc)
* applications

-->

In Solid data is stored on personal and through the Web-accessible storages, these are called *data pods*.
Data pods are personal in the sense of users configuring the access control to the data on their pods themselves. Web-accessible because the pods can be connected to as long as a connection to the Web exists and the correct access controls are given.
<!-- A pod server is a web server storing the data pod and managing request-response flows. -->
Users or agents can freely choose from their favorite pod provider where they would like to store their data. As of writing this there are two major providers online, inrupt.net and solidcommunity.net.
These providers are also used as IDPs to enable decentralized authentication, which shall be looked at more closely in a moment.
The data pod storage architecture follows the Linked Data server specifications. It enables hierarchical resource discovery in a RESTful manner, where the path of the URI gives information about the relation of its underlying data. Up until a URI does not end with a `/` character, every path segment resembles a container. A container is the collection of multiple resources. Resources are the data items stored on a pod.
Every container holds information of the access control in form of an access control list (ACL) and information of what resources it contains. Both of these resources are returned in an RDF compliant format, mostly Turtle.




The other crucial part of Solid is the decentralized authentication.



## Review of Solid Specifications

[The Solid Ecosystem](https://solid.github.io/specification/) is a by the [Solid editorial team](https://github.com/solid/process/blob/master/panels.md) published technical report. It is the official rewrite of the informal [Solid specification](https://github.com/solid/solid-spec/), which was initially used to define the architecture of Solid servers and clients. This rewrite is still incomplete and being worked on continuously.

### Summary
<!-- TODO: include from review-solid_spec.md -->

### Comments/Remarks
<!-- TODO: include from review-solid_spec.md -->

### Conclusion
<!-- TODO: include from review-solid_spec.md -->

## Evaluation of Solid Implementations

### Solid Servers

<!-- Notes

* Different flavors exist because Solid is a standard

-->

#### How to Set One Up

### Solid Clients

### Conclusion

## Introduction CERN

## Overview of CERN




<!-- Backlog -->

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
