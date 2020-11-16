# Resource Description Framework

## RDF 1.1 Concepts and Abstract Syntax

[Source](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/)

* A set of triples
* A triple containing subject, predicate, object and is called RDF graph
* Three kinds of nodes
  * IRI
  * literal
  * blank
* RDF graph a set of RDF triples
* RDF triple:
  * the **subject**, which is an IRI or a blank node
  * the **predicate**, which is an IRI
  * the **object**, which is an IRI, a literal or a blank node

### IRIs and literals

Internationalized Resource Identifier (IRI) and literals denote "something in the world", called a resource.
Literals (range of possible values): strings, numbers, dates.

An RDF statement is the relationship that is indicated by the predicate between the two resources (subject and object).

IRIs can be dereferenced and serve as a starting point with a remote server.

**Dereferencing the URI** is the process called where "[a]gents may use a URI to access the referenced resource" [[Source]](https://www.w3.org/TR/webarch/#uri-dereference).

### Vocabularies and namespace of IRIs

"An RDF vocabulary is a collection of IRIs intended for use in RDF graphs."
The namespace IRI is a common substring in the beginning of a vocabulary, therefore, prefixes are being used to omit redudancies.

| Namespace prefix | Namespace IRI | RDF vocabulary |
|-|-|-|
| rdf | http://www.w3.org/1999/02/22-rdf-syntax-ns# | The RDF built-in vocabulary [[RDF11-SCHEMA]](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#bib-RDF11-SCHEMA) |

### RDF graphs

"IRIs, literals and blank nodes are distinct and distinguishable. For example, http://example.org/ as a string literal is neither equal to http://example.org/ as an IRI, nor to a blank node with the blank node identifier http://example.org/." [[Source]](https://www.w3.org/TR/2014/REC-rdf11-concepts-20140225/#dfn-rdf-graph)

An IRI is a unicode string.

## RDF 1.1 Turtle

[[Source]](https://www.w3.org/TR/2014/REC-turtle-20140225/)

* Terse RDF Triple Language
* textual reprensentation of an RDF graph
* Turtle grammar for triples is a subset of the [SPARQL Query Language](http://www.w3.org/TR/sparql11-query/) grammer for TriplesBlock

Example showing the relatioship between Spiderman and the Green Goblin.

```turtle
@base <http://example.org/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix rel: <http://www.perceive.net/schemas/relationship/> .

<#green-goblin>
    rel:enemyOf <#spiderman> ;
    a foaf:Person ;    # in the context of the Marvel universe
    foaf:name "Green Goblin" .

<#spiderman>
    rel:enemyOf <#green-goblin> ;
    a foaf:Person ;
    foaf:name "Spiderman", "Человек-паук"@ru .
```

**Simple Triple** is denoted by a sequence of subject, predicate, object separated by whitespace and ended with `.` after each triple.

**Predicate list** can be used when a **subject** is used more than once, without repeating it. Separation between the predicates are noted with `;`.

```
<http://example.org/#spiderman>
  <http://www.perceive.net/schemas/relationship/enemyOf> <http://example.org/#green-goblin> ;
  <http://xmlns.com/foaf/0.1/name> "Spiderman" .
```

**Object list** is the same concept when a **subject** uses the same **predicate** on multiple **objects**. These are separated using `,`.s

### IRIs, literals and blank nodes

**IRIs** are enclosed with `< IRI >`.\
**Relative IRIs** are resolved relative to the current `@base` IRI.\
The `a` token in the predicate position represents the IRI http://www.w3.org/1999/02/22-rdf-syntax-ns#type.\
Prefix can be used with `@prefix` and a `:` to split key and value.

```
@prefix somePrefixKey : http://www.someprefixvalue.net/schemas/relationships
<http://example.org/#green-goblin> somePrefixKey:enemyOf <http://example.org/#spiderman> .
```

**Blank nodes** can be represented as the following:

```
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

_:alice foaf:knows _:bob .
_:bob foaf:knows _:alice .
```












