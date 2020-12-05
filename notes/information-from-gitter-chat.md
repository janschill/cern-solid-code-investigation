# Useful information from Gitter chat

A lot of valuable information is being shared on Gitter, an internet relay chat (IRC). Gitter does not offer a great search interface, making the search for specific information difficult.

This document is a collection of message that I found useful. Please always take into account that the information could be outdated or not entirely correct. Refer to accepted technical documentation or to the people directly to gather reliable information.

## Messages

>Ruben Verborgh @RubenVerborgh Dec 03 21:43
The Community Solid Server will be the default open-source server implementation going forward.
NSS is a legacy implementation that (partly) does the trick today, but the codebase carries a lot of technical debt.
CSS instead has a highly modular architecture that is better equipped to address the technical challenges going forward.
For instance, NSS does not implement the latest secure authentication spec (DPoP), whereas CSS does.
Plus, CSS is more stable, fully tested, etc.
So it will be easier to implement any bells and whistles there going forward, as those can be plugged in and out (as opposed to NSS, where you'd have to write them into a monolithic codebase).
The pod-server project is an abandoned effort; we should mark it as such.
If you're starting today, start with CSS.
Legacy can still remain on NSS for a little while if needed.
These slides provide some more details: https://rubenverborgh.github.io/Solid-World-August-2020/

---

>Michiel de Jong @michielbdejong Dec 04 06:51
>Most Solid server implementations consist of many smaller modules. For instance the IDP in NSS is based on Anvil. The one in inrupt-pod-server was based on panva's oidc library. I think the one in ess-broker is based on Mitre. The one in php-solid-server and in Nextcloud is based on phpleague/OAuth. TrinPod also has an IDP component. CSS does not (yet).
