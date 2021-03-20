---
type: slide
slideOptions:
  theme: cern
---

HEPiX spring 2021 - CERN-Solid collaboration
===
Maria Dimou (CERN) & Jan Schill (IT University Copenhagen)

Presentation on [March 18th 2021 Storage track](https://indico.cern.ch/event/995485/)

---

## Overview

1. The Solid Ecosystem
    1. Challenges of the Web
    2. What Is Solid?
    3. The Solid Pod
    4. Solid Apps
    5. Solid Implementations
    6. CERN-Solid Code Investigation
2. Demo
    1. Solid Web Server/Pod
    2. Indico Solid Comment Module

---

## Challenges of the Web

---

### What the Web Stands For

* Universal
* Open for everyone
* Platform independent
* Place for innovation

---

### Browser Wars

* Internet Explorer
* Netscape Classic vs. Internet Explorer
* One company in charge of the pace of the Web

---

### Web Search Engine Wars

* Google
* One crawler deciding what is visible
* One company in charge of the searchability of websites

---

### Platform Wars

* Facebook
* People’s content hidden away from the public
* One company in charge of the people’s content

---

![](https://codimd.web.cern.ch/uploads/upload_50196f49ba7d0c4698c6fa16fde91d4d.png)

_Taken from: [https://www.w3.org/DesignIssues/CloudStorage.html](https://www.w3.org/DesignIssues/CloudStorage.html)_

---

## What Is Solid?

**Separating data from applications**

---

## What Is Solid?

* Announced in 2016 by Sir Tim Berners-Lee (TimBL) as **So**cial **Li**nked **D**ata.
* Re-decentralize the Web and empower users’ control over their own data.
* Solid includes standards, missing from the original Web specifications, giving back to the users:
    *  _ownership_ of their _data_, private, shared, and public.
    *  _choice_ on the _storage_ where these data reside and
    *  _control_ over who has _access_ to them.
* TimBL co-founded [inrupt](https://inrupt.com) to implement the Solid standards.

---

## The Solid Pod

* Regular HTTP server
* Everything is a URI
    * Location for resources, containers, identity for agents, resource descriptions
* Storage support for
    * Any type of data
* Uses RESTful hierarchy
* New to the original Web idea:
    * Linked Data
    * Access control

---

### The Solid Pod Continued

* A decentralized secure data vault to store **any type of data**.
* Data is stored as _Linked Data_, i.e. the resource gets its own HTTP URL on the Web
* When data is stored in someone’s pod, they control who and what can access it.
* WebID examples:
    * https://timbl.inrupt.net/profile/card#me
    * https://dimou.solidcommunity.net/profile/card#me
    * https://janschill.net/profile/card#me

(*) Pod: a usually protective container or housing (from the Webster dictionary).

---

## The Solid Servers

A Solid server is a Web server that stores users’ pods, with support for access control.

1. **Node Solid Server (NSS):** _Open Source_ server by the MIT Solid team since 2016.
2. **Enterprise Solid Server (ESS):** inrupt’s commercial _Closed Source_ alternative, based on [Trellis](https://www.trellisldp.org/). Launched in November 2020. [Article](https://sdtimes.com/data/inrupt-launches-enterprise-solid-server-to-restore-trust-in-data/).
3. **Community Solid Server (CSS):** _Open Source_  project by Ghent University, paid for by inrupt, to rewrite NSS from scratch in [TypeScript](https://www.typescriptlang.org/).
4. More servers like PHP or Ruby are in the making

---

## Solid implementations

By start-up companies and government agencies. Most engaged countries, so far, are Belgium, the Netherlands and the UK.
* UK NHS (National Health System)
* Flanders’ government applications
* Inrupt developments - [sign-up and play](https://signup.pod.inrupt.com/)

Activities summarised in the [Solid newsletter](https://solidproject.org/newsletter) and reported at the [monthly Solid World Webinar](https://solidproject.org/events).

---

## The CERN-Solid code investigation project

1. **Review Solid specifications**
2. **Evaluate Solid implementations**
3. **Enrich Indico with Solid principles**
4. Recommendations on Solid adoption in CERN applications
5. Document challenges, advantages, gaps
6. Presentation of proceedings

*[Full project description](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation)*
*[Comprehensive report on points 1 & 2](https://indico.cern.ch/event/979244/attachments/2150378/3668572/JanSchill_20201225-Solid-specs-and-implemenations-report.pdf)*
*[GitHub: janschill/cern-solid-code-investigation](https://github.com/janschill/cern-solid-code-investigation)*

---

## References Current

* *The Solid project website:* https://solidproject.org
* *Jan’s MSc Thesis description:* [https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation)
* *Thesis repo.:* [https://github.com/janschill/cern-solid-code-investigation](https://github.com/janschill/cern-solid-code-investigation)
* *CERN-Solid entry point:* [http://solid.cern.ch](https://indico.cern.ch/category/11962/)
* *CERN-Solid chat:* [https://gitter.im/cern-solid/community](https://gitter.im/cern-solid/community)

---

## References Historical

* *The original Web proposal:* https://www.w3.org/History/1989/proposal.html
* *When the CERN Web was Open Source (most data missing today):* https://weboffice.web.cern.ch/WebOffice/
