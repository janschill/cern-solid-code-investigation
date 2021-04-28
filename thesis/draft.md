# Draft

## What Needs to be Included?

* Proof of Concepts
  * Motivation
  * Architectural **Decisions** of the Modules
  * The Modules
    * Solid Autocomplete
      * Motivation
      * Decisions
      * Problems
      * Architectural Analysis
        * System Description
        * Context Diagrams
        * Stakeholders
        * Drivers
          * Security
          * Performance
          * Usability
          * Availability
      * Architectural Synthesis
      * Architectural Prototyping
      * Architectural Evaluation
        * Architectural Software Quality Assurance (two iterations)
          * Define metrics
          * Define levels
          * Define components
          * Evaluate
          * Analyse
          * Define initiative
          * Improve
      * Conclusion
    * Solid Comment
      * *see above*
  * Integration with Indico
  * Deployment
  * Testing
*

### POCs Complications

*Conference Registration* (solid-autocomplete)
  * Complications
    * Design
      * what happens if user changes data on the pod
      * payment tied to input fields
      * archival of registration data
      * performance of retrieving data from large number of registrations
      * availability of crucial data when user decides to delete data
      * -> change to autocomplete functionality
    * Developing/Testing
      * mapping inputs to data (Solid data is semantically structure, HTML forms mostly not)
      * nested triplets(/quads) (address, email address)
      * input already has value
      * Indico form rendered dynamically and not tied to `DOMContentLoaded`
      * Indico form has input validation (oninput)
  * Future
    * fetch (private) other resources than WebId
    * upstream data back to pod (changes for example)
    * add more data to WebId document using Indico registration form

*Event Commenting* (solid-comment)
  * Complications
    * Design
      * client-side vs. server-side
        * decoupled as much as possible from Indico, value to Solid Community
      * comments need to be public to be seen by everyone
        * how to hide them when event is private
      * user deletes comment
        * what to render in the frontend
      * Indico: prevent spam -> requires additional Indico session
        * comments not shown -> order of persisting data
      * Control access to pod
        * application has full root access to the pod -> app launcher
    * Development/Testing
      * permissions
        * handling case when permissions are not enough
          * how to detect agent has given control access
        * creating proper ACL, from on every resource to container based
      * discoverability of the comments (UUID in filename)
      * comment persistence
        * in DOM, in Indico, on Pod
      * security
        * prevent cross-site scripting
        * only allow logged in Indico user post comment (pass in axiosclient from Indico)
        * pod authentication
          * @inrupt/solid-client -> refresh new login

*Indico deployment*
  * Solid-OIDC requires TLS certificates
    * CERN certificates
    * Let's Encrypt certificates don't work because of missing firewall openings.
  *

## Introduction

### Context

### ?

## Related Work

### Background

### Indico

### Solid

## Code Investigation

### Proof Of Concepts


### Registration Form Autocomplete

### Comments
