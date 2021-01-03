# Conference registration with WebID

## Flow

>Python interface that sends user from Indico to Solid, authenticates using OAuth, retrieves token, redirects back to Indico, where token is then persisted. Frontend approach: solid-auth-client; backend approach: server side flow/OAuth code flow.

1. Visit conference registration view
2. Press register with WebID
3. Visit Identity Provider
4. Retrieve data from WebID
5. Fill in extra data and send to data pod
6. ?

## Challenges

- Resources on data pod are not available anymore
- Ontology for custom fields
  - How is this data store as Linked Data?
- Differences between an authenticated Indico user and external users
