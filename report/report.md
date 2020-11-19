# Report

## Solid

TODO:

* [ ] Overview
* [ ] Explain Solid
* [ ] Why bother

### Review of the Solid specifications

TODO: review-solid-spec.md

* [ ] Summary of specifications
* [ ] Comments
* [ ] Recommendations

### Solid data pod

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

### Server implementations

The initial Solid server was developed at the Massachusetts Institute of Technology (MIT) by PhD students. This server is still to this day the only server that passes the most test cases of the [Solid Test Suite](https://github.com/solid/test-suite), which is a set of checks developed to test an implementation against the Solid specifications. The Test Suite for Solid is also still in development and constantly extended by more tests for the different categories of a Solid server.\
This server is completely open source, written in JavaScript with the help of the web framework Node.js and is commonly referred to as Node Solid Server (NSS).\
The NSS is currently used by the two publicly communicated Solid data pod and identity providers (IDPs) from https://inrupt.net/ and https://solidcommunity.net/ [[Source]](https://solidproject.org//users/get-a-pod).
It is also the server used to self-host a data pod under https://janschill.de/.\
At some point the decision to rewrite the NSS was made and is called Community Solid Server (CSS). This project is backed by the American company Inrupt, which has multiple reasons of doing so, which will be addressed shortly.\
CSS is an open source implementation written in TypeScript and just like the NSS with Node.js. At this moment CSS is in the alpha phase of the release life cycle and passes only a few cases from the Solid Test Suite – therefore, not eligible to use with Solid applications.\
Its focus is to build an implementation that adheres to the Solid specifications as tightly as possible, while being open source, to give the community a possibility to host their own data pod and developers a platform to create and test Solid applications; also, it being developed in a modular fashion allows an easy way of testing new ideas [[Source]](https://github.com/solid/community-server).

The main motivation to rewrite the NSS with TypeScript as the CSS is, because the NSS started as an idea into a prototype, which was constantly used to experiment with new ideas, that were not completely implemented and left in the code base. Over the years the code base has become unstructured and difficult to maintain. A new attempt seemed most feasable.

Why is CSS financed by Inrupt? Inrupt's co-founder Sir Tim Berners-Lee leads the Solid project, he is also the chief technology office (CTO) of Inrupt. Inrupt's main focus is the development of a closed source enterprise Solid server (ESS). The ESS is based on Java and the platform [Trellis](https://github.com/trellis-ldp), which offers a range of frameworks for building scalable Linked Data applications.\
With the ESS being closed source, Inrupt does not offer any open source Solid server. They do offer the Developer Tools, a set of tools and libraries that ease the development of enterprise-ready Solid applications and a handy Solid application called PodBrowser, allowing the connection and retrieval of all data hosted on a data pod.
Having an open source Solid server with the great benefits previously mentioned lets Solid to gain in popularity.

TODO:

* [x] Briefly mention the different servers
  * [x] ESS
  * [x] NSS
  * [x] CSS
* [x] Solid specification test suite
* [ ] All points could be expanded on

### Client implementations

## CERN

* Overview
* Indico

## Evaluation

TODO: ?
