# Speaking notes

## Challenges of the Web

The web is universal, everybody can use it, as it is free and not bound to any specific platform it being hard- or software.

It is decentralized by design, storing resources decentralized on many different computers all connected by the Internet, I can use the HTTP protocol and URIs to browse to these documents and look at them in HTML.

Ever since the Web was invented through its openness it has given opportunities for everyone to innovate and is the enabler of incredible software and innovations.

Over its relatively short lifespan the Web has met some challenges, like: Browser wars, where Netscape Classic was kicked away by the Internet Explorer, which dominated the browsing experience for many years. This will probably remain an issue as long as the web exists, with Chrome holding nowadays around 63% of the market share.
This leads to one company deciding/steering the direction of the Web and the pace of features being implemented.

The attention was then shifted over to Web Search Engine wars.
One crawler decides what websites are visible and easily reachable.
Again, one company in charge of the fate on the Web.

Coming to another challenge: Social Networks. One company dominates the complete market of social connections. If you are not on Facebook one has a hard time socializing digitally as of now.
All of the magical pieces of information in form of blogs are now often hidden away in the deep web, behind Facebook’s authentication middleware.

All of these applications are great innovations, but come with a common problem: the people have lost control, control of the data they should be in charge of.

Why is this?
It is because applications are directly intertwined with data. The one’s that have the data are in charge.


## What Is Solid?

This is where Solid (Socially Linked Data) comes in. Solid breaks the connection by separating data from applications.

TimBL announced this project for the first time in 2016.

Solid combines existing W3C standards to improve the existing Web by adding functionality on top of it. It is therefore not a new Web.
The aim is to give back control:
  *  _ownership_ of their _data_, private, shared, and public.
  *  _choice_ on the _storage_ where these data reside and
  *  _control_ over who has _access_ to them

## The Solid Pod

The key technology to this is the Solid Pod.
A Solid Pod is a regular HTTP Web Server, answering to HTTP requests with HTTP responses, should use TLS, can use WebSockets if desired.
But two crucial standards need to be supported which are **access control** and **Linked Data**.

All application logic lives in the clients and the data is compatible with all Solid apps.

People can store any type of data in their personal data pod. A data pod can be obtained with a pod provider or self-hosted with one of the many Solid implementations existing already.

## The Solid Servers

Different Solid servers exist …


