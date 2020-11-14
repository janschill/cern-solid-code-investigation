# Web Access Control

[Source](https://github.com/solid/web-access-control-spec)

- access control mechanism like many file systems
- uses operations: read, write, append, control
  - append: inbox as example, can add files, but not read nor modify
  - control: access to the ACL resource itself
- permissions are inherited from parent container, if not set specifically
- resources defined by URL
- users, groups defined by URL
- cross-domain, ACL resource could be on another domain
- ACL discovery is in Link header, path to the file is relative
- ACL inheritance algorithm:
  1. use file specific file is exists (stop if found)
  2. look for ACL from the file's parent container (stop if found)
  3. check for container's parent container
  4. check recursively going up the hierarchy of containers
  5. by definition the root container must have an ACL resource
- representation format is RDF turtle
  - http://www.w3.org/ns/auth/acl ontology
  - agent, someone/something referenced by WebID
  - `acl:agent` for single agent
  - `acl:agentGroup` for groups of agents
  - `acl:agentClass foaf:Agent` for public access
  - `acl:agentClass acl:AuthenticatedAgent` for everyone logged in
  - `acl:accessTo` predicate specifies the resource that is given access

```
# Contents of https://alice.databox.me/docs/file1.acl
@prefix  acl:  <http://www.w3.org/ns/auth/acl#>  .

<#authorization1>
    a             acl:Authorization;
    acl:agent     <https://alice.databox.me/profile/card#me>;  # Alice's WebID
    acl:accessTo  <https://alice.databox.me/docs/file1>;
    acl:mode      acl:Read,
                  acl:Write,
                  acl:Control.
```
