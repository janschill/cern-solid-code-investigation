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

#### `HTTP PUT`

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

