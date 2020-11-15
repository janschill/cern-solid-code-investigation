# Linked Data Platform

##

[Source](https://www.w3.org/TR/ldp/)

"Linked Data Platform (LDP) defines a set of rules for HTTP operations on web resources to provide an architecture for read-write Linked Data on the web." [Source](https://www.w3.org/TR/ldp/#abstract)

The rules of Linked Data according to Tim Berners-Lee in [LINKED-DATA](https://www.w3.org/TR/ldp/#bib-LINKED-DATA):

1. Use URIs as names for things
2. Use HTTP URIs so that people can look up those names
3. When someone looks up a URI, provide useful information, using the standards (RDF*, SPARQL)
4. Include links to other URIs, so that they can discover more things

Linked Data Platform Resource (LDPR) is an HTTP resource …

### Questions

- What is the state talked about in LDPR etc.

### Containers

An organizing concept: blog posts are grouped into blogs.
”The contents of a container is defined by a set of triples in its representation (and state) called the containment triples that follow a fixed pattern” [Source](https://www.w3.org/TR/ldp/#h-ldpc-informative).

### Resource (Section 4)

#### `HTTP POST`

Is optional. Can be used to create resources.

>5.2.3.2 When a successful HTTP POST request to a LDPC results in the creation of a LDPR, a containment triple MUST be added to the state of the LDPC whose subject is the LDPC URI, whose predicate is ldp:contains and whose object is the URI for the newly created document (LDPR)

LDP server should assign an URL to the create resource, but the client can also suggest one, by sending a string in the HTTP Slug header.

#### `HTTP PUT`

Is optional.
>MUST replace the entire persistent state of the identified resource with the entity representation in the body of the request

## Use Cases and Requirements

* Maintaining social contact information
  * One single definition in specific location for contact information
* Keeping track of personal and business relationships
  * One consistent interface for identifying oneself
* System and software development tool integration
  *
* Library Linked Data
  *
* Municipality Operational Monitoring
  * To effectively and efficiently collect, produce and analyze loosely coupled standard data sources is needed.

## Linked Data Shapes, Forms and Footprints

[Linked Data Shapes, Forms and Footprints](https://www.w3.org/DesignIssues/Footprints.html)

