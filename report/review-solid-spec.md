# Review of the Solid specifications

## Summary
<!-- ---
Notes:

The specification defines a few terms in the beginning, which are crucial in understanding the document and Solid generally.
The definitions shall not be introduce using other terminology as the original definitions are already short and concise:

"A data pod is a place for storing documents, with mechanisms for controlling who can access what."

"A Solid app is an application that reads or writes data from one or more [data pods](https://solid.github.io/specification/#data-pod)."

"A read operation entails that information about a resource’s existence or its description can be known." [[[Source]]](https://github.com/solid/specification/issues/149#issue-568433265)

"A write operation entails that information about resources can be created or removed." [[[Source]]](https://github.com/solid/specification/issues/126#issuecomment-569920473)

"An append operation entails that information can be added but not removed." [[[Source]]](https://github.com/solid/specification/issues/118#issuecomment-569648485)

[The Solid Ecosystem](https://solid.github.io/specification/) is a publication that outlines "how Solid servers and clients can be interoperable by using communication protocols, global identifiers, authentication and authorization mechanisms, data formats and shapes, and query interfaces" [[Source]](https://solid.github.io/specification/#intro).
It does so by combining a set of technical specifications that were either defined by the Solid team in the progress or are existing specifications

all technical and non-technical parts of how Solid works. It does so in the form of specifications which define their correct means of implementation to ensure the proper usage of the Solid idea. It uses

Currently, the document is still in an incomplete draft status and has therefore, a few sections that are not yet defined and written down. In an initial approach of writing down everything about Solid [this](https://github.com/solid/solid-spec/) informal specification was produced.
It is used as a guide while formulating the real specifications.

The main document, the "The Solid Ecosystem", brings together a set of specifications, either specifications that coin new terms and are being devised at the same time or it reuses existing technical reports by linking to it – mostly being Request for Comments (RFC).\

The main document describes Solid as "applications with secure and permissioned access to externally stored data in an interoperable way".

The main document consists of six sections: *(1) Introduction, (2) Authenticated Resource Access, (3) Clients and Apps, (4) Optional Integrations, (5) HTTP Definitions and (6) Security Considerations*.

The Solid Ecosystem introduces two crucial terms a **data pod**, which is the decentralized location for the storage of data and a **Solid app** that reads and writes from and to a data pod.\

Section 3 of The Solid Ecosystem is titled *Clients and Apps* and states that it will give an implementation guidance, but because it is missing, it cannot be reasoned about. Therefore, an evaluation of existing Solid applications will be conducted. -->

*TODO: Assume that prior to this part in the report Solid('s values and principles) has(/have) been thoroughly described.*

Reviewed document at: Editor’s Draft, 13 November 2020

[The Solid Ecosystem](https://solid.github.io/specification/) is a by the [Solid editorial team](https://github.com/solid/process/blob/master/panels.md) published technical report. It is the official rewrite of the informal [Solid specification](https://github.com/solid/solid-spec/), which was intially used to define the architecture of Solid servers and clients. This rewrite is still incomplete and being worked on continuously.\

The Solid ecosystem combines a set of carefully selected specifications that were adopted or newly defined, to bring together an architecture that aligns the principles and values of Solid. These components are loosely coupled, can therefore evolve as independently as possible, to ensure flexibility and robustness [Source p4](https://solid.github.io/specification/#intro).\
The intention of the document is to "explain the easiest way to understand how Solid works, as opposed to easiest way for building servers and clients" [Source p6](https://solid.github.io/specification/#intro).

The main specification starts off by describing how a data pod and a Solid app should be implemented using the HTTP protocol in section [2. Resource Access](https://solid.github.io/specification/#resource-access). A data pod is a web server that responds to HTTP requests and returns HTTP responses. Its purpose is the storage of data and the management of who has access to this data.\
A Solid app is a client that is sending requests to a data pod. It should be able to read and write depending on the access control to a data pod.\
The current state of the specification does not go beyond saying that the server must implement the following:
<!-- TODO: not sure if this is needed -->
- HTTP/1.1
- HTTP/1.1 Conditional Requests
- HTTP/1.1 Authentication
  - Without proper credential respond with a 401 HTTP response code
- Reject `PUT`, `POST` and `PATCH` without a `Content-Type` header with HTTP response code 400

For the client implementation it states:

- HTTP/1.1
- HTTP/1.1 Authentication client part
- Must send the `Content-Type` header with `PUT`, `POST` and `PATCH` requests

Uniform Resource Identifiers (URI) play an essential role in the Solid ecosystem. They give information about the hierarchy of information. Important to note is that the slash character in the end of an URI indicates a container resource. A container resource is an organizing concept in the Linked Data Platform [[Source]](https://www.w3.org/TR/ldp/#ldpc). It stores linked documents or information resources, which handle requests from clients for their creation, modification, traversal of the linked documents [[Source]](https://www.w3.org/TR/ldp/#dfn-linked-data-platform-container).<!-- TODO: could need a more thorough explanation here -->

A data pod stores data, therefore, it needs a storage mechanism, which means a "space of URIs in which data can be accessed" [[Source]](https://solid.github.io/specification/#storage).\
Solid uses containment. Containment is the relationship binding between a container (LDPC) and its resources (LDPR). The lifecycles of the LDPRs is limited by the lifecycle of its LDPC, as a resource cannot be stored without a container [[Source]](https://www.w3.org/TR/ldp/#dfn-containment).
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
`acl:Control` means that the user has complete control, in other words: read, write and append access [[Source]](https://www.w3.org/wiki/WebAccessControl#WAC_relation_to_HTTP_Verbs). <!-- TODO: this might not be completely true -->
Another example "A binary JPEG image linked to an auxiliary resource that includes information describing that binary JPEG." makes the need a bit more clear, as a binary JPEG image does not carry any machine readable information.
A Solid resource includes the location of its associated auxiliary resources in the `Link` header. These can be discovered by a `GET` or `HEAD` request to the Solid resource.

```
HEAD https://server.example/resource.ttl
Link: <https://server.example/acls/24986>; rel="http://www.w3.org/ns/solid/terms#acl"
Link: <https://server.example/shapes/85432>; rel="http://www.w3.org/ns/solid/terms#shape"
```


To extend on the previous mentioned necessity of `acl:Control` on the root container, TODO: more here *[Interesting comment](https://github.com/solid/specification/issues/197#issuecomment-699937520).*\




TODO: Give short introduction to these topics:

- [x] basic behavior
  - [x] server
  - [x] client
  - [x] URIs
  - [x] storage
  - [x] containment
- [ ] how to read and write data to Solid pod
  - [ ] how data is represented
- [ ] what are auxiliary resources
  - [x] why they are needed
  - [ ] how they are implemented/what is needed
- [ ] WebID: how agents/users are identified
  - [ ] verification of identification
- [ ] WAC: how to make sure the correct access controls are given to users in a decentralized cross-domain system
- [ ] New HTTP response header
- [ ] Security considerations

## Remarks

The Solid ecosystem does a decent job in the claims it makes in the beginning. It does not go into best practices on how to build a Solid server or client, but solely focusses on the clear definition on what Solid is when looked at technically.\
Further, the review process seems sophisticated and lively in its discussion.
Contributions to the specifications are heavily discussed using the GitHub issue and pull request features, but also chat platforms like Gitter. A review of such a contribution follows strict regulations. A contribution is encouraged to come with a sophisticated explanation on why this change is appropriate. Each topic within the specifications have editors to them assigned who are responsible.

### Minor remarks

<!-- TODO: think about the order of these -->

#### Incomplete draft

Due to the fact that the specifications are work in progress and even some crucial *sub-specifications*, like Web Access Control ([existing draft](https://www.w3.org/wiki/WebAccessControl)), are not even started, makes a review challenging as the documents are subject to additions, removals, or changes.
Even though it can be assumed the general direction of its underlying principles does not change.
An application developed to the rules of today's Solid rules could result in the same application not conforming to tomorrow's set of rules and because the section on how a client should be implemented was temporarily removed from the specification it may likely happen (see Section: [Limited information on Solid client](#limited-information-on-solid-client)).

#### Usage of incomplete concepts

The Solid Ecosystem uses not only its own specifications, but also external specifications and capitalizes on sophisticated technologies like the hypertext transfer protocol (HTTP).
But it also references some technologies that have not been around for as long as HTTP, like WebID.\
WebID in itself is also defined in an incomplete technical report. It being incomplete as well, creates a chain of uncertainty towards their definitions.\
If a missing section in The Solid Ecosystem links to an external specification, one could use that document as a source of truth, but if it is also incomplete, the risk of building something that becomes inaccurate increases.

#### Limited information on Solid client

Section [2.1.3](https://solid.github.io/specification/#http-client) going into the requirements for a Solid client implementation is limited in its details.
It only says that it needs to be an HTTP/1.1 client, must implement the [HTTP Authentication framework](https://httpwg.org/specs/rfc7235.html) and the `Content-Type` HTTP header for `PUT`, `POST` and `PATCH` requests.
From [this commit](https://github.com/solid/specification/commit/d387e332f3bbc9af8e7ad596fa742530262a76a9) in the Solid specification repository it can be assumed that a section for client implementation was planned, but reprioritized and delinked from the main document.

#### No justification for usage of Linked Data

Even though it might not be the proper place to explain the reasons for choosing specific technologies like Linked Data – as those discussions happen prior to defining the technologies in the documentation – but it seems some clarifications why Linked Data as a technology is being used for data representation might be valuable beyond just stating that is used because of "resource discovery and lifecycle management." [[Source]](https://solid.github.io/specification/#resource-containment)

#### Definition order and linkage
<!-- ACL resource, container resource, auxiliary resource -->
The document introduces many different terms, which are often defined in the document itself. On occasion it happens that something is used before it is defined and not properly linked to its definition. This aggravates the read flow of an unknown reader, as the reader needs to find the definition on its own.

#### Prior knowledge needed

Even though the document does a great job on going into detail on specific areas, it is still demanding to follow with only a limited knowledge in web technologies.\
This can be justified by the incomplete status of the document, but also its contrasting principles to conventional web implementations.
One example of this is the concept of Linked Data and all its components. It cannot be assumed of the Solid ecosystem to explain all of its linked concepts – as it would render the document redundantly convoluted – but the fact remains that it is challenging to follow.

TODO: more minor comments

- [x] Uses concepts that are also WIP (WebID)
- [x] Does not do a good job on explaining the reason for LDP.
- [x] Does not go into great detail of implementation of Solid clients
- ~[ ] Shapes?~
- [x] Sometimes terms are used before they are defined and not linked.
  - ACL resource, auxiliary resource
- [x] Assumes a good deal of knowledge about web technologies that are not common to the basic: HTTP, URI, HTML technologies

Issues:

- Look into shapes; they are not concrete yet; it could be nice for a recommendation (from repos)
- Give access to this markdown
- Chat with Ruben, publish this file
- Not before Christmas, "How to set up a pod without maintenance" (demystify)


Solid World:

- Understanding from spec
- What I want for Indico
- What I need for the extensions


## Recommendations

<!-- TODO: Recommendations -->

<!-- ## Notes

### Slug header

[[Source]](https://tools.ietf.org/html/rfc5023#section-9.7)

>
>9.7. The Slug Header
>
>Slug is an HTTP entity-header whose presence in a POST to a Collection constitutes a request by the client to use the header’s value as part of any URIs that would normally be used to retrieve the to-be-created Entry or Media Resources.
>
>Servers MAY use the value of the Slug header when creating the Member URI of the newly created Resource, for instance, by using some or all of the words in the value for the last URI segment.

In other words the Slug header provides a means for a client to suggest the URI for a newly created resource [[Source]](https://blog.cdivilly.com/2016/03/01/slug-http-header).

### ETag

[https://en.wikipedia.org/wiki/HTTP_ETag](https://en.wikipedia.org/wiki/HTTP_ETag)

ETag is an HTTP header field for Web cache validation, which allows a client to make conditional requests.

### Auxiliary resource

"An auxiliary resource may provide supplementary information about a given Solid resource, or affect how that resource and others associated with it are processed, served, or interpreted."

"An auxiliary resource linked with a given Solid resource through an HTTP Link header is considered to be directly associated with that resource"

#### Examples

"A binary JPEG image linked to an auxiliary resource that includes information describing that binary JPEG."

This describes an ACL resource:

"A container linked to an auxiliary resource that includes access control statements for that container and the resources that belong to it."

### Solid sub-specifications

* [WebID-OIDC](https://solid.github.io/specification/webid-oidc/)
* [WebID-TLS](https://solid.github.io/specification/webid-tls/)
* [Web Access Control](https://solid.github.io/specification/wac/)
* [Data Footprints](https://solid.github.io/specification/forms/)
* [Data Pod Management](https://solid.github.io/specification/pod-management/)

## Notes on reviewing

- Reflecting both its strengths and weaknesses
- Assessment of the quality, novelty, and importance of the article on the good and bad

A. Summary of the specification\
B. Assessment of strengths and weaknesses\
C. Recommendation

[[Source]](https://www.cs.colostate.edu/~cs656/alan-meier.pdf):

(1) Title and author of paper
(2) Summary of paper
  This needs to be only 1-3 sentences, but it demonstrates that you understand the paper and, moreover, can summarize it more concisely than the author in his abstract.
(3) Good things about the paper (one paragraph)
  This is not always necessary, especially when the review is generally favorable. However, it is strongly recommended if the review is critical. Such introductions are good psychology if you want the author to drastically revise the paper.
(4) Major comments
  Discuss the author's assumptions, technical approach, analysis, results, conclusions, reference, etc. Be constructive, if possible, by suggesting improvements.
(5) Minor comments
  This section contains comments on style, figures, grammar, etc. If any of these are especially poor and detract from the overall presentation, then they might escalate to the 'major comments' section. It is acceptable to write these comments in list (or bullet) form.
(6) Recommendations
  Some referees will shower papers with invective even when they like it. An editor may not recognize this habit, and interpret the criticism as grounds not to publish the paper. For these reasons, it is worthwhile to tell the editor if the paper should be published. Three major categories of recommendations are: "publish as is", "publish after corrections have been made", and "reject". Sometimes the recommendations fit better in the cover letter. -->
