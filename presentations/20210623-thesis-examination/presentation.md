---
type: slide
slideOptions:
  theme: cern
---

# CERN-Solid Code Investigation</br>Final Presentation

Jan Schill (IT University Copenhagen)

23rd of June 2021

---

## Overview

* **Introduction**
* **Solid**
* **Indico**
* **Proof of Concept**
    1. _Comments_ in Indico events
    2. Indico Conference _Registration_ from pod data.
* **Challenges, Advantages, Gaps for CERN and Solid**
* **Continuation in CERN-Solid Collaboration**
* **Conclusion**

---

## Introduction

* **Context**: Loss over data, loss of innovation
* **Goal**: Investigation of decentralized storage in a centralized system

---

## Solid

* **So**cial **Li**nked **D**ata, is a project, a standard, an ecosystem, a movement and a community initiated by Sir Tim Berners-Lee.
* Allows people to control _where_ their own data are stored and _who_ has access to them.
* It combines existing W3C standards and is built on top of the existing Web.

---

### The Data Pod

A decentralised data store for one’s personal data. A pod (*) is like a secure personal Web server for all kinds of data.
* Data is stored as _Linked Data_, i.e. the resource gets its own HTTP URI on the Web.
* The pod is described by a unique WebID. WebID examples:
    * https://timbl.inrupt.net/profile/card#me
    * https://dimou.solidcommunity.net/profile/card#me
    * https://janschill.net/profile/card#me

---

### The Solid Server

A Web server that stores users’ pods, with support for access control and optionally identity service.

---

### Ideally Solid Is About Escaping From This Situation

![](https://codimd.web.cern.ch/uploads/upload_50196f49ba7d0c4698c6fa16fde91d4d.png)

_Taken from: [https://www.w3.org/DesignIssues/CloudStorage.html](https://www.w3.org/DesignIssues/CloudStorage.html)_

---

## Indico

* Open-source tool for event organisation, archival and collaboration
* Resilient and reliable for over 20 years
* No incentive for user data in modules of
    * Conference registration
    * Meeting comments

“*Indico is used every day at CERN to manage more than 600,000 events of different complexities and 200 meeting and conference rooms.*”

---

![](https://codimd.web.cern.ch/uploads/upload_925432015b8cf5e6a4cb4c83938d0b09.png)

---

## The CERN-Solid Code Investigation Project

1. Review Solid specifications
2. Evaluate Solid implementations
3. **Enrich Indico with Solid principles**
    * _Comments_ in Indico events via Solid pod authentication.
    * _Registration_ in Indico conferences with personal data taken from the Solid pod.
4. **Make recommendations on Solid adoption in CERN applications**
5. **Document challenges, advantages, gaps**
6. **Continuation of CERN-Solid Collaboration**

---

### Details on the Proof of Concept (PoC)


---

### Comments to Indico events via Solid pod authentication

![](https://codimd.web.cern.ch/uploads/upload_0889dec0ae0b793c1f97deb912de31d4.png =600x)

---

### What you see in your pod

![](https://codimd.web.cern.ch/uploads/upload_43756b69fc349d881b768cb9c8192dff.png)

---

### Details on the code for _Comments_

* Client-side developed JavaScript application
* Self-contained, can be re-used in other applications
* Stores one comment in one file on data pod
* Communicates with data pod directly
* Needs authenticated Indico session
* Indico holds the reference to the location of comment

---

### Details on the code for _Comments_ (continued)

* **Performance**: $n * 2+4$ requests with $n$-comments
    * Not mentioning slow running data pods
* **Availability**: Data pods not reachable
    * Cache the comment
    * or always fetch new?
* **Usability**: Control access in authentication flow suboptimal
* **Data Integrity**: Data can changed freely on data pod
    * Digital signatures
    * *Verifiable Credentials* (recently announced to collobarate with Solid)

---

### Indico conference registration via Solid pod data - prompt

![](https://codimd.web.cern.ch/uploads/upload_bcfae0e3771587f3ca0179a6b17b084b.png =600x)

---

### Indico conference registration via Solid pod data - Linked Data

| LD: Subject | LD: Predicate | LD: Object              | Indico form       |
| ----------- | ------------- | ----------------------- | ----------------- |
| #me         | ns:fn         | "Jan Schill"            | name="first_name" |
| #me         | ns:fn         | "Jan Schill"            | name="last_name"  |
| #me         | ns:hasEmail   | <mailto:schill@hey.com> | name="email"      |
| #me         | ns:gender     | "Male"                  | Label="Gender"    |

*ns = http://www.w3.org/2006/vcard/ns#*

---

### Details on the code for _Conference Registrations_

* **Design of implemented module**: retrieve personal information **for** an Indico conference registration **from** data pod
* Original idea to store personal information **of** conference registration **in** data pod abandoned due to:
    * Sensitivity of payment details requiring reliable data retrieval
    * Archival of events need the data at Indico
    * Management of events/conference need performant data retrieval

---

## Challenges with Solid Status Today

* Few applications using Solid pods so far
* Encryption
    * CERN needs encryption or on-premise hosting
* User interface mostly challenging
* No formal support for the open source solutions.
    * A great enthusiasm in gitter though!
* Solid being a living standard, the specifications also evolve, especially in the Access Control area, leading to varying server implementations.
==> Impact on  test-suite results.

---

## Continuation CERN-Solid Collaboration

* Servers
    * Outstanding Solution
        * solidcommunity.net
    * Integration with CERNBox
    * Sandboxed Community Solid Server
    * Own Server Solution
* Applications
    * New application with Solid in mind
    * Enrich existing with more prototypes
    * Structure existing data

---

## Conclusion

* Solid can be easily and naively integrated
    * For more sophisticated solutions more time and efforts are needed
    * Different CERN applications could be more (Solid-)suitable
* Decentralization/Solid faces many challenges
* Active development and new initiatives give hope in Solid

---
