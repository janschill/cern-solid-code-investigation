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

---

## Take 2

I want to use this presentation time to introduce the whole project again, show briefly what I've achieved so far and what is to come.

This project called CERN-Solid code investigation aims at finding suitable areas at CERN to justify an implementation of the Solid principles.

With Solid embracing the values of true ownership of ones data, the freedom of movement with this data, and the full control of deciding who gets to have access to the data.

It does so by elevating the original specifications of HTTP, URI, and HTML and adds a rich ecosystem of new specifications to it. These specifications are in the making and are to be expected done by end of June this year.

At Solid's heart is the notion of a Solid pod, which is essentially a web server handling request/response cycles with some additional features, like Linked Data, which gives the user his data semantically structured and allows the interoperability of freely moving it around in different pods.
Pods can be understood as personal data stores, just like the local file system of ones computer.
The decentralized authentication, called Solid-OIDC, builds on top of OpenID Connect and is for a single sign-on between many Solid apps.

Why is CERN interested in this?

Tim Berners-Lee invented the web to find a way of distributing knowledge freely, when doing so he was working at CERN.
CERN has therefore great interest in investing time and efforts into supporting Solid. With the large user base around CERN and having sophisticated software systems in place to serve the needs these, it is highly interested in adapting their solutions by introducing Solid into them.

This is how the project came to live and is now with my efforts in progress.
In this part of the project I have reported on the status of the previously mentioned specifications and current implementations.

The specifications are starting to be in good shape. The structure as of today is clearer than it was when I started and brings in all the different specifications.
It is still lacking a crucial part of Primer and Best-Practice documents, to enable newcomers an easier time when developing in the Solid ecosystem.
<!-- TODO: acp -->

Implementations are in progress. The Community Solid Server which is the one, that is meant for developers to be used when working on new applications is very actively developed.
It is the open source server, where everybody is encouraged to help.

Unfortunately the Solid application diversity is limited, at least in open source.
I attribute this to the lack of good working Solid server, the original Node Solid Server is okay, but also very buggy.

In closed source though many things are happening for example in Flanders, Belgium, the government has decided to give every citizen a data pod.
Another example the british health care system (NHS) wants to use Solid to connect the personal health data of its citizens.

This is my roadmap. To visualize the progress I've highlighted the first two items that are now marked as complete.
The remainder of the CERN-Solid project is the development of a working prototype for the Indico software where modules in the software will be enriched with for example registrating to a conference with a WebID or posting comments that live in a pod.
I will show some ideas in a second.

TODO:

Here I've started looking into how it could be done, either in browser or server-side.
So far, everything that is developed open-source is either JavaScript browser or Node.js compatible.
One developer guessed the development of a Python Solid client could take as much as three months.
