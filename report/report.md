# CERN-Solid code investigation

## Table of Contents

1. Introduction?
1. Introduction Solid
1. Overview of Solid
1. Introduction CERN
1. Overview of CERN
1. Review of Solid Specifications
    1. Summary
    1. Comments
    1. Recommendations
    1. Conclusion
1. Evaluation of the Solid Implementations
    1. Solid Servers
        1. Node Solid Server
        1. Community Solid Server
        1. Enterprise Solid Server
        1. Hosting a Solid Server Behind a Domain
    1. Solid Clients
    1. Conclusion
1. Conclusion

---

## Introduction?

## Introduction Solid

The Web was created in 1989 by Tim Berners-Lee while working at CERN "to allow people to work together by combining their knowledge in a web of hypertext documents." [Source](https://www.w3.org/People/Berners-Lee/Longer.html).
This brilliant idea has ever since grown as an essential part of our all lives. While it has given a new platform for all types of innovation, it has also evolved away from the initial idea of sharing knowledge freely. A new term has been coined describing the phenomena of isolating data from the public by creating the so-called *data silos*. The data in these silos is then only available to the organization controlling the application.
A multitude of problems reside with this, like the actual content creator not owning their own data, nor having full access to it.
Another drawback is that the application owners decide what interfaces are publicly accessible, therefore, not allowing users easy migrations of their data.
This results in one user having to provide the same information to different applications: username, name, age and others depending on the domain. The same problem applies to traditional web applications when authenticating their users. Usually, applications will do the authentication themselves, but there are initiatives that decentralize this authentication, which is called single sign-On (SSO).
Solid is aiming at solving these problems by standardizing an ecosystem where data is stored on data pods chosen and fully controlled by the users/agents, where they can decided who has access to what data; Linked Data is utilized to create interoperable data, for seamless migration between applications and pods; authenticate with one identity provider (IDP) to use multiple Solid applications with one username and password combination.

TODO: Maybe needs more

## Overview of Solid

TODO: See [#36](https://github.com/janschill/uni-research_project/issues/36) to-dos.

In Solid data is stored on personal and through the Web-accessible storages, these are called *data pods*.
Data pods are personal in the sense of users configuring the access control to the data on their pods themselves. Web-accessible because the pods can be connected to as long as a connection to the Web exists and the correct access controls are given.
<!-- A pod server is a web server storing the data pod and managing request-response flows. -->
Users or agents can freely choose from their favorite pod provider where they would like to store their data. As of writing this there are two major providers online, inrupt.net and solidcommunity.net.
These providers are also used as IDPs to enable decentralized authentication, which shall be looked at more closely in a moment.
The data pod storage architecture follows the Linked Data server specifications. It enables hierarchical resource discovery in a RESTful manner, where the path of the URI gives information about the relation of its underlying data. Up until a URI does not end with a `/` character, every path segment resembles a container. A container is the collection of multiple resources. Resources are the data items stored on a pod.
Every container holds information of the access control in form of an access control list (ACL) and information of what resources it contains. Both of these resources are returned in an RDF compliant format, mostly Turtle.
The data pod differentiates between two resource types: RDF and binary/text.
RDF is a framework to represent data on the Web. The basic structure of it follows a graph representation, where two nodes, the subject and object, are connected by an edge, the predicate. This structure is called a *triple*.
In RDF, nodes and edges elevate the benefits of URIs, more specifically IRIs—which are a generalization of URIs, offering more Unicode characters—by either using them as globally unique identifiers or globally unique and reusable property names. This allows interoperable data by reusing schemas with agreed-upon vocabulary to describe data and can be used to obtain more information by dereferencing the IRIs.

```turtle
@prefix jan: <https://janschill.solidcommunity.net/profile/card> .
@prefix schema: <http://schema.org/> .

jan:me schema:familyName "Schill" .
```

The other crucial part of Solid is decentralized authentication. This is realized with WebIDs. It works in a way that users need a globally unique identifier—a WebID URI—which can be used with every Solid application to identify an agent.
These WebIDs are handed out by IDPs, which in most cases are also data pod providers. A WebID encompasses a profile document, describing the person in more detail who is the referent of the WebID URI.

```
WebID URI
https://janschill.solidcommunity.net/profile/card#me

Profile Document
https://janschill.solidcommunity.net/profile/card
```

Solid OpenID Connect (Solid OIDC) is the standard that is being used to authenticate within the Solid ecosystem.

TODO: go deeper into Solid OIDC

Several implementations exist to this day, that all do parts of the described solutions, but there no existing complete solution yet. The Node Solid Server (NSS) is the original implementation and is to this day the most complete open-source solution measured by passing Solid Test Suite cases. It is being deployed onto both providers `inrupt.net` and `solidcommunity.net`, acting as a data pod and IDP.
The Community Solid Server (CSS) is a new project aiming at replacing the NSS to become the new official open-source implementation of the Solid specifications. It is currently in beta version and actively developed.
The Enterprise Solid Server (ESS) is Inrupt's commercial closed-source solution launched late this year 2020.

A lot of different libraries are built to enable development in the ecosystem. A subset as an example are client-side libraries for authentication with data pods; reading and writing RDF based resources; an SDK for React development.
Additionally, efforts are put into the development of a Solid operating system (SolidOS), which can be deployed onto the data pod and supports the browsing of one's pod, editing files, parsing, and showing the data in a meaningful manner and other useful additions, such as Solid Panes, which is a set of Solid-compatible apps. These are useful for the richness of SolidOS.
The core idea is to enable the operating system of Solid to bring an interface to the diverse group of linked data on a data pod. One core example is, that it aims at allowing a sensible representation of objects, which can extend to an address book showing all contacts of a user.

TODO: Show case some existing Solid solutions and talk about the government efforts in Flemish, Belgium,

Applications enriching the ecosystem by improving the personal life like task managers or other initiatives are also being developed on by the community.

## Introduction CERN
TODO: maybe more here

CERN or the European Organization for Nuclear Research is a European organization with its main site in Switzerland focussing on particle physics with the largest laboratory in the world. It maintains the world's highest energy accelerator, the Large Hadron Collider, and houses a broad scientific program.
With employees from all 23 member states it accounts to a total of roughly 4400 staff members and paid personnel, as well as welcoming around 12500 scientist from all around the globe.
Great challenges arise when managing this number of scientist and their experiments.
CERN has closed this gap by creating and maintaining several reliable software projects and a robust infrastructure.

A number of relevant open-source applications shall be introduced in the next section.

## Overview of CERN

The following open-source software systems have proven to be of excellent operational quality while serving tens of thousands of users with a wide array of functionality.

CERN has met in the past difficulties to fulfill some core workflows in the authentication and authorization in their infrastructure expected by users of their platform. The new **CERN Authorization Service** is a centralized authentication and authorization service with components such as single sign-on, group management API, account management and computing resource lifecycles [[Source]](https://auth.docs.cern.ch).

**Invenio** is split into three sub-systems RDM, a research data management repository

**Zenodo** is a repository for


**Indico** is one of CERN’s most sophisticated software projects. It is an event management tool, giving users a tool to organize complex meetings or conferences with an easy-to-use interface. It was started in 2002 as a “European project” and has been in production at CERN ever since. It is used daily to facilitate more than 600,000 events at the organization itself and has helped others like the UN “to put in place an efficient registration and accreditation workflow that greatly reduced waiting times for everyone” at conferences with more than 180,000 participants in total [Source].

Indico is actively worked on by a team of six developers from CERN. Its open-source approach allows external participation. It is written in Python and is currently on version 2.7 and plans to move onto Python 3.x soon coupled with the release of Indico 3.0 scheduled to be released at the end of this year. Indico version 2.3 was released earlier this year—during the summer of 2020—updating the software with multiple features with the help of the community, the team managing Indico at the United Nations Office at Geneva and funding from IEEE.

Indico is the candidate for the after this research project followed Master's thesis. It is a suitable contender for applying the Solid principles by creating a proof of concept (POC) as it is one of CERN's most reliable applications with a long history of operation. Large numbers of personnel use the application, but also

TODO: Write Overview of CERN

- [ ] Existing AuTH/AuthZ initiatives exist at CERN
  - https://auth.docs.cern.ch/
  - SSO what provider
- [ ] Why is CERN interested
- [ ] Existing software
  - [ ] Indico
  - [ ] Why Indico can be PoC

TODO: What else?

## Review of Solid Specifications
TODO: Incorporate Sarven's message

[The Solid Ecosystem](https://solid.github.io/specification/) is a by the [Solid editorial team](https://github.com/solid/process/blob/master/panels.md) published technical report. It is the official rewrite of the informal [Solid specification](https://github.com/solid/solid-spec/), which was initially used to define the architecture of Solid servers and clients. This rewrite is still incomplete and being worked on continuously.

### Summary

Reviewed document at: Editor’s Draft, 13 November 2020

[The Solid Ecosystem](https://solid.github.io/specification/) is a by the [Solid editorial team](https://github.com/solid/process/blob/master/panels.md) published technical report. It is the official rewrite of the informal [Solid specification](https://github.com/solid/solid-spec/), which was initially used to define the architecture of Solid servers and clients. This rewrite is still incomplete and being worked on continuously.

The Solid Ecosystem combines a set of carefully selected specifications that were adopted or newly defined, to bring together an architecture that aligns the principles and values of Solid. These components are loosely coupled, can therefore evolve as independently as possible, to ensure flexibility and robustness [Source p4](https://solid.github.io/specification/#intro).

The main specification starts off by describing how a data pod and a Solid app should be implemented using the HTTP protocol.\
A data pod is a web server that responds to HTTP requests and returns HTTP responses. Its purpose is the storage of data and the management of who has access to this data.\
A Solid app is a client that is sending requests to a data pod. It should be able to read and write depending on the access control to a data pod.

The Uniform Resource Identifier (URI) plays an essential role in the Solid Ecosystem, for it is being used to identify users with [WebID](#webid), with resources in the Linked Data Platform and more generally give information about the hierarchy of stored information on the data pod.\
A container resource is an organizing concept in the Linked Data Platform [[Source]](https://www.w3.org/TR/ldp/#ldpc). It stores linked documents or information resources, which handle requests from clients for their creation, modification, traversal of the linked documents [[Source]](https://www.w3.org/TR/ldp/#dfn-linked-data-platform-container).

An auxiliary resource exists to give additional information, like configuration, processing, or interpretation about a Solid resource, for example: "A container linked to an auxiliary resource that includes access control statements for that container and the resources that belong to it."
`acl:Control` means that the user has complete control, in other words: read, write, and append access [[Source]](https://www.w3.org/wiki/WebAccessControl#WAC_relation_to_HTTP_Verbs).

TODO: this might not be completely true

Another example "A binary JPEG image linked to an auxiliary resource that includes information describing that binary JPEG." makes the need a bit clearer, as a binary JPEG image does not carry any machine-readable information.

The ACL in Solid is realized with Web Access Control (WAC). The section for WAC is not yet written in the Solid specification but shall be given a short introduction.\
WAC is similar to access control schemes used in file systems. Files, users, and groups are referenced by URLs. Users in particular are identified by WebIDs.
Its functionality is cross-domain and can therefore have an ACL resource – holding the permissions for an agent – on domain A, while setting the permissions for a file on domain B. The supported modes of operation are read, write, append and control.
Read and write are self-explanatory, whereas append and control introduce two interesting modes.
Append allows the agent to add files to a container, without being able to read or write any of the container's files. The idea of an email inbox can be compared to this functionality.\
Control means that the agent with this permission has access to the ACL resource and can modify it.\

As mentioned, Solid follows the specifications of the Linked Data Platform to define its storage mechanism. In LDP resource representation is realized with RDF. Therefore, all resources that are created are LDPR and in the Turtle format.

A WebID is an HTTP URI that denotes an agent on the Web. It is used as the primary agent identification in the Solid Ecosystem.

When making requests to a Solid server to create a resource on the server, HTTP `POST`, `PUT` or `PATCH` can be used. If the client wants to associate a specific URI with a resource, `PUT` or `PATCH` needs to be used.
With the HTTP method `GET`, `HEAD` `OPTIONS` information about a resource can be requested.
To remove a resource from the server the `DELETE` method can be used.

A server must create all intermediate containers and containment triples according to `PUT` and `PATCH` requests.

On a `POST` request to `/`, the server needs to create a resource under `/{slug}`.
On a `POST` request to `/{slug}/`, the server needs to create a container for `/`.

Authentication in the Solid Ecosystem is supported through two ways. Solid OIDC is the Solid specific implementation of the widely used OpenID Connect. The alternative, but not from the specification preferred method is WebID-TLS.
OpenID Connect enables the decentralized authentication and single sign-on mechanism needed for Solid.
In Solid OIDC one key aspect is that the `Client ID` should be a WebID. The `Client ID` is needed in OAuth(/OIDC) for a `Client application` to identify itself with the IDP and resource server.
Once authenticated with a username and password combination by an IDP, all Solid applications that need authentication will redirect to the chosen IDP. The browser uses the stored token from a set cookie to identify and is then able to use the application without login.

### Comments

The Solid Ecosystem does a good job in the claims from the beginning. It does not go into best practices on how to build a Solid server or client, but solely focusses on the clear definition on what Solid is when looked at technically.\
Other documents like TODO: Linked Data Primer and Best Practices are written to describe common patterns in the development with Linked Data.
Further, the review process seems sophisticated and lively in its discussion.
Contributions to the specifications are heavily discussed using the GitHub issue and pull request features, but also chat platforms like Gitter. A review of such a contribution follows strict regulations. A contribution is encouraged to come with a sophisticated explanation on why this change is appropriate. Each topic within the specifications have editors to them assigned who are responsible.
Because Solid is open-source and therefore benefits from an active contribution from all parties, it is highly recommended to participate in its development.

Clearly stating that the Solid Ecosystem document has its purpose in defining the implementation requirements for a data pod and makes suggestions to other documents that do a thorough job on speaking out use-cases and best-practices is a good structural decision.

TODO: Reorder these, to bring the strongest first or last

#### Incomplete Draft

*Edit: as of lately 05.12.2020 this section has been added.*

Due to the fact that the specifications are work in progress and even some crucial *sub-specifications*, like Web Access Control ([existing draft](https://www.w3.org/wiki/WebAccessControl)), are not even started, makes a review challenging as the documents are subject to additions, removals, or changes.
Even though it can be assumed the general direction of its underlying principles does not change.
An application developed to the rules of today's Solid rules could result in the same application not conforming to tomorrow's set of rules and because the section on how a client should be implemented was temporarily removed from the specification it may likely happen (see Section: [Limited information on Solid client](#limited-information-on-solid-client)).

#### Usage of Incomplete Concepts

The Solid Ecosystem uses not only its own specifications, but also external specifications and capitalizes on sophisticated technologies like the hypertext transfer protocol (HTTP).
But it also references some technologies that have not been around for as long as HTTP, like WebID.\
WebID in itself is also defined in an incomplete technical report. It being incomplete as well, creates a chain of uncertainty towards their definitions.\
If a missing section in the Solid Ecosystem links to an external specification, one could use that document as a source of truth, but if it is also incomplete, the risk of building something that becomes inaccurate increases.

#### Limited Information on Solid Client

Section [2.1.2](https://solid.github.io/specification/#http-client) goes into the requirements for a Solid client implementation is limited in its details.
It only states it needs to be an HTTP/1.1 client, must implement the [HTTP Authentication framework](https://httpwg.org/specs/rfc7235.html) and the `Content-Type` HTTP header for `PUT`, `POST` and `PATCH` requests.
From [this commit](https://github.com/solid/specification/commit/d387e332f3bbc9af8e7ad596fa742530262a76a9) in the Solid specification repository it can be assumed that a section for client implementation was planned, but reprioritized and delinked from the main document.
A lot of Solid clients exist and of course the Solid ecosystem—as stated in the beginning—is not a document for best-practices, it would be highly beneficial to have such documents explicitly giving good implementation details for developers, especially the ones who have not been around in the semantic web field.
The section [Evaluation of Solid Implementations](#evaluation-of-solid-implementations) will look more closely at existing solution on the server and client-side.

#### No Justification For the Usage Of Linked Data

Even though it might not be the proper place to explain the reasons for choosing specific technologies like Linked Data—as those discussions happen prior to defining the technologies in the documentation—but it seems some clarifications why Linked Data as a technology is being used for data representation might be valuable beyond just stating that is used because of "resource discovery and lifecycle management." [[Source]](https://solid.github.io/specification/#resource-containment).
TODO: Maybe the Solid principles (are these defined somewhere) are clear enough when they say that interoperability is a key aspect.

#### Definition Order and Linkage
<!-- ACL resource, container resource, auxiliary resource -->
The document introduces many different terms, which are often defined in the document itself. On occasion, it happens that something is used before it is defined and not properly linked to its definition. This aggravates the reading flow of a reader unknown to these terms, as the reader needs to find the definition on its own.

#### Complexity

Even though the document does a great job on going into detail on specific areas, it is still demanding to follow with only limited knowledge in web technologies.\
This can be justified by the incomplete status of the document, but also its contrasting principles to conventional web implementations.
One example of this is the concept of Linked Data and all its components. It cannot be assumed of the Solid Ecosystem to explain all of its linked concepts – as it would render the document redundantly convoluted – but the fact remains that it is challenging to follow.

### Recommendations

TODO: Write Recommendations

### Conclusion

TODO: Write Conclusion

## Evaluation of the Solid Implementations

TODO: Merge in from `evaluation-solid-implementations.md`

## Conclusion

TODO: Write Conclusion

---

## Backlog

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
This server is completely open-source, written in JavaScript with the help of the web framework Node.js and is commonly referred to as Node Solid Server (NSS).\
The NSS is currently used by the two publicly communicated Solid data pod and identity providers (IDPs) from https://inrupt.net/ and https://solidcommunity.net/ [[Source]](https://solidproject.org//users/get-a-pod).
It is also the server used to self-host a data pod under https://janschill.de/.\
At some point the decision to rewrite the NSS was made and is called Community Solid Server (CSS). This project is backed by the American company Inrupt, which has multiple reasons of doing so, which will be addressed shortly.\
CSS is an open-source implementation written in TypeScript and just like the NSS with Node.js. At this moment CSS is in the alpha phase of the release life cycle and passes only a few cases from the Solid Test Suite – therefore, not eligible to use with Solid applications.\
Its focus is to build an implementation that adheres to the Solid specifications as tightly as possible, while being open-source, to give the community a possibility to host their own data pod and developers a platform to create and test Solid applications; also, it being developed in a modular fashion allows an easy way of testing new ideas [[Source]](https://github.com/solid/community-server).

The main motivation to rewrite the NSS with TypeScript as the CSS is, because the NSS started as an idea into a prototype, which was constantly used to experiment with new ideas, that were not completely implemented and left in the code base. Over the years the code base has become unstructured and difficult to maintain. A new attempt seemed most feasible.

Why is CSS financed by Inrupt? Inrupt's co-founder Sir Tim Berners-Lee leads the Solid project, he is also the chief technology office (CTO) of Inrupt. Inrupt's main focus is the development of a closed source enterprise Solid server (ESS). The ESS is based on Java and the platform [Trellis](https://github.com/trellis-ldp), which offers a range of frameworks for building scalable Linked Data applications.\
With the ESS being closed source, Inrupt does not offer any open-source Solid server. They do offer the Developer Tools, a set of tools and libraries that ease the development of enterprise-ready Solid applications and a handy Solid application called PodBrowser, allowing the connection and retrieval of all data hosted on a data pod.
Having an open-source Solid server with the great benefits previously mentioned lets Solid to gain in popularity.

Other implementations exist, for example the [PHP Solid server](https://github.com/pdsinterop/php-solid-server).

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
