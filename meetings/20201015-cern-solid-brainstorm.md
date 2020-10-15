# CERN-Solid code investigation - Meeting with the Indico developers

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
  * ?

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
