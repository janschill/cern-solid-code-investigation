# Review of the Solid Specifications

## Summary

*TODO: Assume that prior to this part in the report Solid('s values and principles) has(/have) been thoroughly described.*

Reviewed document at: Editor’s Draft, 13 November 2020

[The Solid Ecosystem](https://solid.github.io/specification/) is a by the [Solid editorial team](https://github.com/solid/process/blob/master/panels.md) published technical report. It is the official rewrite of the informal [Solid specification](https://github.com/solid/solid-spec/), which was initially used to define the architecture of Solid servers and clients. This rewrite is still incomplete and being worked on continuously.

The Solid Ecosystem combines a set of carefully selected specifications that were adopted or newly defined, to bring together an architecture that aligns the principles and values of Solid. These components are loosely coupled, can therefore evolve as independently as possible, to ensure flexibility and robustness [Source p4](https://solid.github.io/specification/#intro).
<!-- The intention of the document is to "explain the easiest way to understand how Solid works, as opposed to easiest way for building servers and clients" [Source p6](https://solid.github.io/specification/#intro). -->

The main specification starts off by describing how a data pod and a Solid app should be implemented using the HTTP protocol.\
A data pod is a web server that responds to HTTP requests and returns HTTP responses. Its purpose is the storage of data and the management of who has access to this data.\
A Solid app is a client that is sending requests to a data pod. It should be able to read and write depending on the access control to a data pod.

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

The Uniform Resource Identifier (URI) plays an essential role in the Solid Ecosystem, for it is being used to identify users with [WebID](#webid), with resources in the Linked Data Platform and more generally give information about the hierarchy of stored information on the data pod.\
<!-- Continuing with URIs used to give location to resources on a data pod an important note is that the slash character in the end of an URI indicates a container resource. -->
A container resource is an organizing concept in the Linked Data Platform [[Source]](https://www.w3.org/TR/ldp/#ldpc). It stores linked documents or information resources, which handle requests from clients for their creation, modification, traversal of the linked documents [[Source]](https://www.w3.org/TR/ldp/#dfn-linked-data-platform-container).
<!-- TODO: could need a more thorough explanation here -->\
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

<!-- Important to mention is that the root container needs an Access Control List (ACL) auxiliary resource with `acl:Control` access privilege associated with it [[Source]](https://solid.github.io/specification/#storage). -->

An auxiliary resource exists to give additional information, like configuration, processing, or interpretation about a Solid resource, for example: "A container linked to an auxiliary resource that includes access control statements for that container and the resources that belong to it."
`acl:Control` means that the user has complete control, in other words: read, write and append access [[Source]](https://www.w3.org/wiki/WebAccessControl#WAC_relation_to_HTTP_Verbs). <!-- TODO: this might not be completely true -->\
Another example "A binary JPEG image linked to an auxiliary resource that includes information describing that binary JPEG." makes the need a bit clearer, as a binary JPEG image does not carry any machine-readable information.
<!-- A Solid resource includes the location of its associated auxiliary resources in the `Link` header. These can be discovered by a `GET` or `HEAD` request to the Solid resource. -->
<!--
```
HEAD https://server.example/resource.ttl
Link: <https://server.example/acls/24986>; rel="http://www.w3.org/ns/solid/terms#acl"
Link: <https://server.example/shapes/85432>; rel="http://www.w3.org/ns/solid/terms#shape"
``` -->

The ACL in Solid is realized with Web Access Control (WAC). The section for WAC in not yet written in the Solid specification but shall be given a short introduction.\
WAC is similar to access control schemes used in file systems. Files, users and groups are referenced by URLs. Users in particular are identified by WebIDs.
Its functionality is cross-domain and can therefore have an ACL resource – holding the permissions for an agent – on domain A, while setting the permissions for a file on domain B. The supported modes of operation are read, write, append and control.
Read and write are self-explanatory, whereas append and control introduce two interesting modes.
Append allows the agent to add files to a container, without being able to read or write any of the container's files. The idea of an email inbox can be compared to this functionality.\
Control means that the agent with this permission has access to the ACL resource and can modify it.\
Permissions are inherited through the ACL inheritance algorithm. The ACL algorithm looks for an ACL resource for the requested file, if none is found, it will check on the file's container, if none is found, it will go recursively up the hierarchy of the containers. The root container must by definition have an ACL resource associated with it.
The representation of ACL resources is by default in the RDF Turtle format and can be discovered in the `Link` header from the request to the Solid resource – if a specific ACL resource is attached, otherwise through the previously described ACL inheritance algorithm.
<!--
```
@prefix  acl:  <http://www.w3.org/ns/auth/acl#>  .

<#authorization1>
    a             acl:Authorization;
    acl:agent     <https://alice.databox.me/profile/card#me>;
    acl:accessTo  <https://alice.databox.me/docs/file1>;
    acl:mode      acl:Read,
                  acl:Write,
                  acl:Control.
``` -->

As mentioned, Solid follows the specifications of the Linked Data Platform to define its storage mechanism. In LDP resource representation is realized with RDF. Therefore, all resources that are created are LDPR and in the Turtle format.

<!-- To extend on the previous mentioned necessity of `acl:Control` on the root container, TODO: more here *[Interesting comment](https://github.com/solid/specification/issues/197#issuecomment-699937520).*\ -->

A WebID is an HTTP URI that denotes an agent on the Web. It is used as the primary agent identification in the Solid Ecosystem.

<!-- WebID distinguishes between WebID URL and WebID Profile URI. The URI with a fragment identifier is the WebID and acts as the identifier for an agent. The Profile Document – describing the agent – can be reached by leaving out the fragment identifier.

* WebID URI: https://alice.janschill.de/profile/card#me
* WebID Profile URI: https://alice.janschill.de/profile/card

A WebID can also be defined without the fragment identifier. In this case a request to the WebID URI needs to return a Location header in its response, giving an URI where the Profile Document resides. -->

When making requests to a Solid server to create a resource on the server, HTTP `POST`, `PUT` or `PATCH` can be used. If the client wants to associate a specific URI with a resource, `PUT` or `PATCH` needs to be used.
<!-- The server can be implemented to allow URI suggestions through a `POST` request and the `Slug` header. Otherwise, `POST` is the only way of letting the server decide on a URI for the resource [[Source]](https://solid.github.io/specification/#resource-type-heuristics). -->
With the HTTP method `GET`, `HEAD` `OPTIONS` information about a resource can be requested.
To remove a resource from the server the `DELETE` method can be used.

<!-- A server must implement the HTTP response header: `Accept-Patch`, `Accept-Post`, `Accept-Put`. These headers specify which media-type the server understands in the corresponding request. The `Accept-Put` response header has not been introduced prior to the Solid specifications but is exactly defined after the `Accept-Post` and `Accept-Patch` response headers. -->

A server must create all intermediate containers and containment triples according to `PUT` and `PATCH` requests.

On a `POST` request to `/`, the server needs to create a resource under `/{slug}`.
On a `POST` request to `/{slug}/`, the server needs to create a container for `/`.

<!-- `PUT` or `PATCH` requests to an auxiliary resource, create or update the resource. A `POST` request is not allowed. This is because of its indeterministic nature of not needing to target a resource directly. In theory it would be possible with the `Slug` header, but it could introduce confusion and is therefore not allowed [[Source]](https://github.com/solid/specification/issues/42#issuecomment-616688848). -->

Authentication in the Solid Ecosystem is supported through two ways. Solid OIDC is the Solid specific implementation of the widely used OpenID Connect. The alternative, but not from the specification preferred method is WebID-TLS.
OpenID Connect enables the decentralized authentication and single sign-on mechanism needed for Solid.
In Solid OIDC one key aspect is that the `Client ID` should be a WebID. The `Client ID` is needed in OAuth(/OIDC) for a `Client application` to identify itself with the IDP and resource server.
Once authenticated with a username and password combination by an IDP, all Solid applications that need authentication will redirect to the chosen IDP. The browser uses the stored token from a set cookie to identify and is then able to use the application without a login.

## Remarks

The Solid Ecosystem does a good job in the claims from the beginning. It does not go into best practices on how to build a Solid server or client, but solely focusses on the clear definition on what Solid is when looked at technically.\
Other documents like TODO: Linked Data Primer and Best Practices are written to describe common patterns in the development with Linked Data.
Further, the review process seems sophisticated and lively in its discussion.
Contributions to the specifications are heavily discussed using the GitHub issue and pull request features, but also chat platforms like Gitter. A review of such a contribution follows strict regulations. A contribution is encouraged to come with a sophisticated explanation on why this change is appropriate. Each topic within the specifications have editors to them assigned who are responsible.
Because Solid is open-source and therefore benefits from an active contribution from all parties, it is highly recommended to participate in its development.

Clearly stating that the Solid Ecosystem document has its purpose in defining the implementation requirements for a data pod and makes suggestions to other documents that do a thorough job on speaking out use-cases and best-practices is a good structural decision.

### Minor remarks

<!-- TODO: think about the order of these -->

#### Incomplete draft

*Edit: as of lately 05.12.2020 this section has been added.*

Due to the fact that the specifications are work in progress and even some crucial *sub-specifications*, like Web Access Control ([existing draft](https://www.w3.org/wiki/WebAccessControl)), are not even started, makes a review challenging as the documents are subject to additions, removals, or changes.
Even though it can be assumed the general direction of its underlying principles does not change.
An application developed to the rules of today's Solid rules could result in the same application not conforming to tomorrow's set of rules and because the section on how a client should be implemented was temporarily removed from the specification it may likely happen (see Section: [Limited information on Solid client](#limited-information-on-solid-client)).

#### Usage of incomplete concepts

The Solid Ecosystem uses not only its own specifications, but also external specifications and capitalizes on sophisticated technologies like the hypertext transfer protocol (HTTP).
But it also references some technologies that have not been around for as long as HTTP, like WebID.\
WebID in itself is also defined in an incomplete technical report. It being incomplete as well, creates a chain of uncertainty towards their definitions.\
If a missing section in the Solid Ecosystem links to an external specification, one could use that document as a source of truth, but if it is also incomplete, the risk of building something that becomes inaccurate increases.

#### Limited information on Solid client

Section [2.1.2](https://solid.github.io/specification/#http-client) goes into the requirements for a Solid client implementation is limited in its details.
It only states it needs to be an HTTP/1.1 client, must implement the [HTTP Authentication framework](https://httpwg.org/specs/rfc7235.html) and the `Content-Type` HTTP header for `PUT`, `POST` and `PATCH` requests.
From [this commit](https://github.com/solid/specification/commit/d387e332f3bbc9af8e7ad596fa742530262a76a9) in the Solid specification repository it can be assumed that a section for client implementation was planned, but reprioritized and delinked from the main document.
A lot of Solid clients exist and of course the Solid ecosystem—as stated in the beginning—is not a document for best-practices, it would be highly beneficial to have such documents explicitly giving good implementation details for developers, especially the ones who have not been around in the semantic web field.
The section [Evaluation of Solid Implementations](#evaluation-of-solid-implementations) will look more closely at existing solution on the server and client-side.

#### No justification for the usage of Linked Data

Even though it might not be the proper place to explain the reasons for choosing specific technologies like Linked Data—as those discussions happen prior to defining the technologies in the documentation—but it seems some clarifications why Linked Data as a technology is being used for data representation might be valuable beyond just stating that is used because of "resource discovery and lifecycle management." [[Source]](https://solid.github.io/specification/#resource-containment).
TODO: Maybe the Solid principles (are these defined somewhere) are clear enough when they say that interoperability is a key aspect.

#### Definition order and linkage
<!-- ACL resource, container resource, auxiliary resource -->
The document introduces many different terms, which are often defined in the document itself. On occasion it happens that something is used before it is defined and not properly linked to its definition. This aggravates the read flow of a reader unknown to these terms, as the reader needs to find the definition on its own.

#### Complexity

Even though the document does a great job on going into detail on specific areas, it is still demanding to follow with only limited knowledge in web technologies.\
This can be justified by the incomplete status of the document, but also its contrasting principles to conventional web implementations.
One example of this is the concept of Linked Data and all its components. It cannot be assumed of the Solid Ecosystem to explain all of its linked concepts – as it would render the document redundantly convoluted – but the fact remains that it is challenging to follow.

## Recommendations

In chapter Linked Data containment go a bit more into Linked Data.

Right after the statement:
>The root container (pim:Storage) MUST have an ACL auxiliary resource directly associated to it. The associated ACL document MUST include an authorization policy with acl:Control access privilege.

talk about auxiliary resources and WAC.

## Conclusion
