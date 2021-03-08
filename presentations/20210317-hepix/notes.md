# Notes

* Split the total presentation time of 20 minutes accordingly

Presentation (13 minutes)

* Introduce high level idea of Solid, but quickly go into technical details
* Talk about HTTP and original protocols and how Solid uses new protocols to add on top of the web
  * Linked Data for interoperability
  * WebID for a global unique identification system
  * Web Access Control for decentralized authorization
  * Solid OpenID Connect which uses the existing OpenID Connect authentication and identity protocol with some Solid specifics
* Explain the architecture of an Solid application by showing the existing graphs for Solid Comment

Demo (7 minutes)

* Show my website
* Connect to server by ssh and show file hierarchy in Terminal and in SolidOS (explain that SolidOS is a Solid app)
  * Show some RDF resources on server and in SolidOS
* Show the Solid Comment module
  * Explain what parts where needed for the application (libraries)
  * Show how it creates the file on the pod, but also on the JSON server (Indico)
  * Show private/public container concept
  * Show two different users creating comments
