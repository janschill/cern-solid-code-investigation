# 2020/11/24 Maria & Michiel

*Present: Maria, Michiel, Jan*

## General

* Flanders, Belgium
* How to stay relevant?
  * Follow the Solid test suite
* Server-side shape validation
  * Eg. Complain when a person is missing a last name
* WAC is more empowering to the user
  * but users shoot themselves into the foot, having too much control
  * eg. accidentally giving root access to public
  * ACP was invented to circumvent this
  * CSS and ESS have WAC and will also add ACP
* WAC developed at MIT, even older than Solid
  * WAC does not scale up very well with large groups of people
  * Extensions to solve this are proposed
* ESS does not support WebSocket-PubSub (no live updates)
  * Workarounds like polling are emulations of WebSockets, where in fixed intervals data is polled
  * HTTP/2 has functionality same as WebSocket
  * Maybe spec will adopt HTTP/2
  * Maybe ESS will support WebSockets sometime
* [NHS](https://www.nhs.uk/) interested in Solid
* More people outside of CERN will use Solid, more network effect with other institutions.
  * eg. Swiss post office will adopt Solid: everyone gets a pod.
  * Connect CERN and post office

## Servers

* **By May 2021 CSS is working**
* PHP based server, Nextcloud extension -> CERNBox
* Because NSS and CSS are open-source it will be difficult to use them when reliability is important
  * NSS nobody is going to help you in production, but will be merged if fixed.
  * CSS will be better in this notion, but still not reliable enough
* Solution for CERN
  * ESS fixes this by offering SLAs
    * Buy support package from Inrupt (expensive)
  * Add Solid support to CERNBox.
    * Peoples' storage as a Solid pod
    * Stand-alone server, but also plugin for NextCloud
* Advising against NSS and CSS for CERN in production, because nobody is professionally maintaining it.
* Solid does not use SPARQL yet. (Does not query across databases)
* CSS has a triple store as backend
* Ruben's team is working in the field of querying

## Questions/answers

* Solid
  * a personal data store
  * Linked Data
* Connecting decentralization and Linked Data (interoperability)
* Where to start with ontologies: https://pdsinterop.org
* OpenID Connect
  * Anvil startup, has a lot of libraries
  * IDP: DPoP
  * IDP: Panva OIDC (Node.js authorization server)
* Server-side solution
  * Python: JWT support
    * Generate codes on every request
  * Server-side JavaScript hosted on microservice, talking to Indico app
    * https://github.com/solid/solid-auth-fetcher
  * *Proxy, Indico HTTP poll sends Basic authentication, signs the request*
  * Solid-Client in Python a lot work.
* Solid CRUD-test, example:
  * solid-auth-fetcher
  * node-solid-client
