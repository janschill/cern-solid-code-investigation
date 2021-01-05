# Brainstorm for the proof of concept

A proof of concept shall be developed that shows how Solid can be used in CERN products, like Indico.

## Conference registration with WebID

### Flow

>Python interface that sends user from Indico to Solid, authenticates using OAuth, retrieves token, redirects back to Indico, where token is then persisted. Frontend approach: solid-auth-client; backend approach: server side flow/OAuth code flow.

1. Visit conference registration view
2. Press register with WebID
3. Visit Identity Provider
4. Retrieve data from WebID
5. Fill in extra data and send to data pod
6. ?

#### Technical

* Browser redirects to identity provider
* Agent authenticates with IDP, (double check Solid-OIDC here)
* Returns with a WebID (identity) and code (authentication)
* Further communication with pod
  * Client-side:
    * Agent uses existing libraries (eg. solid-auth-client) to connect to pod
    * Read/write happens in the browser
  * Server-side:
    * Indico does the communication with the browser on behalf of the agent
    * WebID and code are send to the server, which will then be used to make the requests (this needs to happen every time? session? here help from Michiel is needed)

### Challenges

- Resources on data pod are not available anymore
- Ontology for custom fields
  - How is this data store as Linked Data?
- Differences between an authenticated Indico user and external users
