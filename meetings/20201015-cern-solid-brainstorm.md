# CERN-Solid code investigation - Meeting with the Indico developers

*Present: Maria Dimou, Michiel de Jong, Pedro Ferreira, Adrian Moennich, Jan Schill*

[Link to Indico event](https://indico.cern.ch/event/963608/)

Maria Dimou:

>The purpose of this meeting is to discuss point 4 of Jan's project, namely give some inside info of the Indico code, structure, philosophy, update methods and advice on how to:
>
>* **develop a PoC (Proof of Concept) of the Indico registration form module**, in which registration data belongs to the user and not to Indico. Especially useful, given that, in certain events, people may be asked, for instance, to send a scan of their ID, a kind of information one wishes to keep control of and be able to erase.
>* **enrich Indico meeting pages with some kind of Solid-based content, such as comments**. Such data should better not be kept in Indico and not very critical for continuous availability. The advantage of this development is that it could be tested non-intrusively.

[Source](https://indico.cern.ch/event/963608/)

## Questions and remarks

### Getting started

* Most likely start February
* Good starting point for getting to know the system better
  * Documentation
  * Install locally and play around
  * Setup local node-solid-server

### Success criteria

Registration on Indico where all user data* is stored on a pod?

*username, password

* What is the roadmap for success?
  * Understanding Indico (generally)
  * Understanding Indico's registration (module)
  * Understanding the different authentication methods in Indico
  * Understanding how Solid defines:
    * Client-Server communication
    * Data storage
    * Authentication
  * **Remark**: I think I am confusing Solid authentication (WebID) and the concept of storing data in a pod.

### Proof of concept

* What data are talking about?
  * Username/password?
  * What about CERN accounts?
* Estimated guess of how long it will take?
* How do I make sure that a crucial part will be tested well enough?

### Indico

* How does the authentication in Indico work?
  * Is a CERN account necessary? I am getting redirected to CERN SSO

### Other questions

* Maybe start with the comment then do registration?
  * How are registered users with Indico/CERN then mapped to users using a pod.
* What are the design principles from point three?

## Meeting notes

### Solid

Login with a Solid pod, which acts as a **identity provider** and gives access to storage.
The identity is linked with storage and accessed by applications.

solid-auth-client is a HTML and JavaScript framework to retrieve the authentication token from the identity provider. It can also retrieve the data from a pod.
This is all client side, in the browser.

When receiving data from Solid it needs to be parse as it is in RDF. This can be done with [rdflib.js](https://github.com/linkeddata/rdflib.js).

### Indico

Registration at conference

User data at registration is up to the event organizer:

- Name
- Email address
- Could even be passports

SQLAlchemy ORM in Python for SQL queries

#### Account linking

Account linking, where a user with an Indico account can link their account a Solid account is beneficial. This way they can easily access their pod.\
Link Google, Indico profile to OAuth provider, comes back with a token and stores it. Enables communication between the two services.\
Python interface that sends user from Indico to Solid, authenticates using OAuth, retrieves token, redirects back to Indico, where token is then persisted. Frontend approach: solid-auth-client; backend approach: server side flow/OAuth code flow.

#### Design principles of Solid in Indico

- Centralized by nature
- Not all data can be stored in pods, as there is a lot of data needed to have an archive functionality.
- Contacts, calendar stored on pod can be used to have share functionality with other Solid users.

#### Comments

Comments need to be public, then they can be hyperlinked.

For comments a user needs to authenticate with his Solid pod. Indico needs to store a hyperlink to these comments, in order to see the other user's comments.

No extra login, Disqus: logs in and then is able to comment. Hyperlink to other comments is difficult to retrieve. This also does not really is then an integration into Indico, but more a widget that sits in the frontend.

### Roadmap for proof of concept

1. Account linking: Indico-Solid
  - Use OpenID Connect
2. Store comments on user's pod
3. Store data from a user registration at a conference in the user's pod

### Useful keywords and links

- [OpenID Connect](https://en.wikipedia.org/wiki/OpenID_Connect)
- [OpenID Connect libraries](https://openid.net/developers/libraries/)
- [OAuth](https://en.wikipedia.org/wiki/OAuth)
- [Registering at conference](https://indico.docs.cern.ch/conferences/registration/)
- [Disqus](https://about.disqus.com/disqus-demo-page)
- [CERNBox](https://cernbox.web.cern.ch/cernbox/)
- [rdflib.js](https://github.com/linkeddata/rdflib.js)
- [Empty Solid app](https://github.com/michielbdejong/empty-solid-app)
