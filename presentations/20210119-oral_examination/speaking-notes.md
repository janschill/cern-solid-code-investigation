# Speaking Notes

## Solid

### Introduction

* Solid (Social Linked Data) is a project that was announced by TimBL in 2016. It aims at giving back the ownership of data to the users, who created the data in the first place. It does so by decentralizing the Web.
* Meaning data is stored in so called pods, where the owner of the pod has full control over.
* The users then decide what pod provider to use, who gets access to the data, and the true source is owned by them.
* Solid is a set of specifications/protocols that define the technologies needed to make this operational, just like with the original Web, created based of standards like HTTP, HTML, and URI.

## Specifications

* Protocol (Bundles other specifications)
* Solid OIDC
* Web Access Control
  * Decentralized authorization of resources
* Solid Application Interoperability
  * How agents and applications interoperate over data in a Solid pod
* Shape Trees
  * Mechanism explaining machines how data should look like
* Some primers
* Expected to be done by end of June
* Call for implementation
* More mature than when I started looking into it

### Overview

* Open source specification documents
  * Everyone can start implementing
* Pod is Web server that serves resources to agents.
* With some additional must-haves, like:
  * Linked Data for interoperability
  * WebID to identify agents/users
  * (Solid-)OIDC, for decentralized authentication (Single Sign-On)

## CERN

* Being the birthplace of the Web
  * CERN wants to be early adopter to help shape the Web
* Has many open-source applications

## Implementations

* Servers
  * NSS
  * CSS
  * ESS
  * PSS
* Applications
  * NHS
  * Flanders government
* SolidOS
