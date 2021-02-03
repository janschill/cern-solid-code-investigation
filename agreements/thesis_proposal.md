# Thesis Proposal

## Problem Formulation

### Context

The context remains partly the same as the context in the *Research Project*:

Sir Tim Berners-Lee invented the Web with the intention of providing “access to knowledge, free for all and respecting each one”. This intention lost its meaning to a certain level, with a lot of companies harvesting personal data and generating massive amounts of revenue by selling it directly or analyzing it and providing a platform for targeted advertisements (Dimou, 2020).\
The Solid project, which is also led by Sir Tim has its purpose in handing the control of this data back to the content owner. It does so by decoupling the applications, the storage of data and authentication (Dimou, 2020).

This is realized with the [Solid specifications](https://solid.github.io/specification/), which defines a set of rules and protocols on how to implement server and client in the Solid ecosystem (W3C Solid Community Group, 2020).

The team behind Solid and other open-source contributors have built a [web server](https://github.com/solid/node-solid-server), which implements a pod to those specifications and a list of applications, like a [chat](https://solid-chat.5apps.com/).

In this project a proof of concept (POC) will be developed. The POC will be an integration and extension of the existing Indico software system from CERN. This is motivated by testing the Solid specifications in the context of an existing application without any prior Solid implementations.
Two feature additions will be prototyped and developed:

1. An enrichment of the Indico meeting interface with Solid-based content, like a comment module. These comments will reside in the users' Solid pods.
2. The ability to use a personal WebID and pod to register for a conference, coupled with the storage of all obligatory data in this pod.

The required technical expertise varies:

- Basic web protocols, such as: HTTP, URI, HTML
- Linked Data Platform (LDP)
- LDP frameworks, such as resource description framework (RDF)
- Authentication flows (OpenID Connect)
- Advanced Python and JavaScript programming
- Web Access Control (WAC) protocol
- RESTful web services
- WebID
- Web Ontology Language (OWL)

### Intended Learning Outcomes

-

## Method

Experimental

## Delivery

Report

## Bibliography
