---
type: slide
slideOptions:
  theme: cern
---

CERN-Solid code investigation
===
Maria Dimou (CERN) & Jan Schill (IT University Copenhagen)

Presentation at [the December 2020 Solid World](https://solidproject.org/events)

---

## Overview

1. Introduction
3. Getting Started with Solid at CERN
4. Project Scope and Approach
5. Conclusion
6. References

---

## Introduction

Integration of Solid principles into software from CERN.

---

## Getting Started with Solid at CERN

* CERN the birthplace of the Web
* Many sophisticated software projects at CERN
    * Already open-source
    * Operational status (tens of thousands of users)

---

## What Is Indico and Why Can It Be a PoC for Solid?

* Open-source tool for event organisation, archival and collaboration
* Resilient and reliable for over 20 years
* No incentive for user data in modules of
    * Conference registration
    * Meeting comments


“*Indico is used every day at CERN to manage more than 600,000 events of different complexities and 200 meeting and conference rooms.*”

---

![](https://codimd.web.cern.ch/uploads/upload_925432015b8cf5e6a4cb4c83938d0b09.png)

---

## Project Scope and Approach

1. **Review Solid specifications**
2. **Evaluate Solid implementations**
3. **Enrich Indico with Solid principles**
4. Recommendations on Solid adoption in CERN applications
5. Document challenges, advantages, gaps
6. Presentation of proceedings

*[GitHub: janschill/uni-research_project](https://github.com/janschill/uni-research_project)*

---

### Review Solid Specifications

* Comprehensive and high quality
* Work in progress
* Complex

---

### Enrich Indico with Solid Principles

![](https://codimd.web.cern.ch/uploads/upload_6be3a9cfc969ec1183f43318915c8e0b.png)

---

#### Experimental “Plugin” Implementation

Getting familiar with NSS and RDF

![](https://codimd.web.cern.ch/uploads/upload_a090c3f89c98fd443875ad089a6d9a94.png)

---

#### Desired Implementation

1. Indico and Solid account linking
    * Using server-side/OAuth2 flow
2. Read/write data (comments) from/to pods in Indico backend
    * Heavy lifting on the server-side

---

## Conclusion

The success of the [CERN-Solid code investigation project](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation) is important:

1. For the MSc thesis at itu.dk to demonstrate that the implementation works.
2. For CERN to be inspired by the PoC and embrace Solid.

---

## References

* *Thesis description:* [https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation)
* *Thesis repo.:* [https://github.com/janschill/uni-research_project](https://github.com/janschill/uni-research_project)
* *Indico repo.:* [https://github.com/indico/](https://github.com/indico/)
* *CERN-Solid entry point:* [https://indico.cern.ch/category/11962/](https://indico.cern.ch/category/11962/)
* *CERN-Solid chat:* [https://gitter.im/cern-solid/community](https://gitter.im/cern-solid/community)
