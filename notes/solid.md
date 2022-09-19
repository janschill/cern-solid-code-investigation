# Solid

## Solid Ecosystem

### Unknown concepts

* [Linked Data containment](https://solid.github.io/specification/#resource-containment)
* [Shared slash semantics](https://solid.github.io/specification/#uri-slash-semantics)
* [Resource type heuristics - Why do I want this feature?](https://solid.github.io/specification/#resource-type-heuristics)
* HEAD and OPTIONS methods
* Accept-Put Response Header
* ETag
* Slug header

### Summary

TODO: Summary; see [review](report/review-solid-spec.md)

## Solid-OIDC

*Make sure to check out [concept](notes/concepts.md) for some additional explanations.*

### Basic Flow

* "HTTP WWW-Authenticate response header defines the authentication method that should be used to gain access to a resource" [[Source]](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate).

1. Client requests a non-public resource from the resource server (RS).
2. RS returns HTTP WWW-Authentication header with request for a DPoP-bound access token
3.

## Paper: Solid Platform for Social Web Applications

Notes and direct quotes from the paper "A Demonstration of the Solid Platform for Social Web Applications" by Essam Mansour, Andrei Vlad Sambra, Sandro Hawke, Maged Zereba, Sarven Capadisli, Abdurrahman Ghanem, Ashraf Aboulnaga and Tim Berners-Lee


## Abstract

* "Users' data is managed independently of the applications that create and consume this data."
* "Users store their data in a Web-accessible personal online datastore (pod)."
* "Users can have multiple pods and easily switch between them."
* "Applications access the data using defined protocols."
* "Decentralized authentication and access control mechanism guarantee privacy of the data."
* "Applications can operate on users' data where it is stored."
* "Users access the control the data."

## Summary of paper

Social Web applications store the users' data on their own server, provide own authentication service and access control mechanism and developers are restricted to the data access APIs provided by these companies. This architecture does not allow the user to switch easily platforms, use a single authentication service, reuse the data they have put onto the Web. Further, the developers creating applications do not have a decentralized access to this data.
