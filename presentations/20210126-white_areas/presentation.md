---
type: slide
slideOptions:
  theme: cern
---

White Area lecture on the CERN-Solid collaboration
===
Maria Dimou (CERN) & Jan Schill (IT University Copenhagen)

Presentation at [the January 25th 2021 White Area at CERN](https://indico.cern.ch/event/979381/)

---

## Overview

1. What is Solid
3. Why CERN should be involved
4. The Solid pod
5. The Solid servers
6. Solid specifications' overview
7. Implementations so far
8. The CERN-Solid code investigation project
9. Other relevant CERN applications
10. Conclusion
11. References

---

## What is Solid


* Sir Tim Berners-Lee (TimBL) announced his Solid project (Social Linked Data) in 2016.
* This Open Source platform aims to re-decentralize the Web and empower users' control over their own data.
* Solid includes standards, missing from the original Web specifications, giving back to the users:
    *  _ownership_ of their _data_, private, shared, and public.
    *  _choice_ on the _storage_ where these data reside and
    *  _control_ over who has _access_ to them.
* TimBL co-founded [inrupt](https://inrupt.com) to implement the Solid standards.

---

## Why CERN should be involved

* CERN is the birthplace of the Web
* Many sophisticated software projects at CERN
    * Already open source
    * Operational status (tens of thousands of users)
* Solid is here to stay - we should be more actively involved than we were with W3C.

---

## The Solid pod

* People store their data securely in decentralized data stores called _Pods_. (*)
* Pods are like secure personal Web servers for data.
* Solid connects resources in different pods by representing all data as _Linked Data_, i.e. every piece of data gets its own HTTP URL on the Web, and we use those URLs to refer to this data.
* When data is stored in someone's pod, they control who and what can access it.
* There will be a pod demo by Jan.

(*) Pod: a usually protective container or housing (from the Webster dictionary).


---

## The Solid servers

1. **Node Solid Server (NSS):** _Open Source_ server by the MIT Solid team since 2016. Hosted at inrupt  premises, USA, data in Amazon Web Services.
2. **Enterprise Solid Server (ESS):** inrupt's commercial _Closed Source_ alternative, based on [Trellis](https://www.trellisldp.org/). Launched in November 2020. [Article](https://sdtimes.com/data/inrupt-launches-enterprise-solid-server-to-restore-trust-in-data/).
3. **Community Solid Server (CSS):** _Open Source_  project by Ghent University, paid for by inrupt, to rewrite NSS from scratch in [TypeScript](https://www.typescriptlang.org/).
5. **php-solid-server (PSS):** _Open Source_, good test results, under dev. The basis for the Nextcloud app that makes Nextcloud compatible with Solid.

---

## Solid servers' interfaces

* All Solid servers have the same common interface, so they don’t need to know anything about what apps are being run on them.

* Two public demo/test sites for making your own pod. They both run NSS:
    * [inrupt.net](https://inrupt.net/) run by inrupt,
    * [solidcommunity.net](https://solidcommunity.net) run by the Solid organisation.
    * a few others people show at the [monthly Solid World Webinar](https://solidproject.org/events).

_Slide with input from TimBL_

---

## Solid specifications

Recently matured, they cover areas of:
    * Authentication
    * Authorisation
    * Data inter-operability
    * Testing suites

As the **Web Access Control (WAC)** gives all privileges to the user,
**Access Control Policies (ACP)** are now being defined to assist newcomers.
*Specs' current location:* https://solid.github.io/specification/
*Specs' future location:* https://solidproject.org/TR/
*Test suite:* https://github.com/solid/test-suite

---

## Solid implementations

By start-up companies and government agencies. Most engaged countries, so far, are Belgium, the Netherlands, Germany and the UK.

* UK NHS (National Health System)
* Flanders' government applications
* Belgian [Digita](https://www.digita.ai/) [inox](https://www.inox.app/) (connects your different pods)
* inrupt developments - [sign-up and play](https://signup.pod.inrupt.com/)

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
*[Very comprehensive report on points 1 & 2 by Jan ](https://indico.cern.ch/event/979244/attachments/2150378/3668572/JanSchill_20201225-Solid-specs-and-implemenations-report.pdf)*
*[GitHub: janschill/uni-research_project](https://github.com/janschill/uni-research_project)*

---

### Proof of Concept via Indico extensions

![](https://codimd.web.cern.ch/uploads/upload_b81d956728212e88535f5e10e028e371.png)


---

## Conference Registration

![](https://codimd.web.cern.ch/uploads/upload_96b34ef0eca3ad7fe6b4f7c89929c961.jpeg =650x)


---

## Conference Registration Client-Side

![](https://codimd.web.cern.ch/uploads/upload_41cc7458fbddc4d9c3c43485c763ff4a.jpeg)

---

## Conference Registration Server-Side

![](https://codimd.web.cern.ch/uploads/upload_8ff01bd2576ddcb82973b6e35b21cbc9.jpeg)

---

## How to Login/Register with a Solid Pod

1. Pick a provider: solidcommunity.net* or inrupt.net**
2. Register with **username\*\*\*, password, name, email address**
3. Log in using the newly created WebID with username and password
4. Go to https://podbrowser.inrupt.com/ and log in

*Hosted: \*DigitalOcean (UK) , \*\*AWS (USA)*
*WebID: \*\*\*username will be part of your WebID*

---

## Other relevant CERN applications

Mutual benefit will derive from other PoCs with:
* The CERN _Notifications project_, unilateral, via subscription and archived.
* The _new CERN Authentication_ project.
* _CS3MESH_, a pan-European cross-institution mesh that will offer data sharing/co-editing facilities, relying on the federation of different sites by using well-known APIs.
* _InvenioRDM_, a Research Data Management, open source platform for persistent paper & data registration.

---

## Conclusion

The success of the [CERN-Solid code investigation project](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation) is important:

1. For Jan's MSc thesis at itu.dk to demonstrate that the implementation works.
2. For CERN to be inspired by the PoC and embrace Solid.
    * Solid is there to stay. We should embark now!
4. For Solid to show that its principles can work in an environment of tens of thousands of users.

---

## Thanks!

* To TimBL for always giving advice, despite the millions who contact him.
* To Michiel de Jong & Sarven Capadisli, for their answers to our frequent questions.
* To Jan Schill (from Maria) for choosing this project for his MSc thesis.
* To the CERN/IT-CDA management for approving this work.


---

## References current

* *The Solid project web site:* https://solidproject.org
* *Jan's MSc Thesis description:* [https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation)
* *Thesis repo.:* [https://github.com/janschill/uni-research_project](https://github.com/janschill/uni-research_project)
* *CERN-Solid entry point:* [https://indico.cern.ch/category/11962/](https://indico.cern.ch/category/11962/)
* *CERN-Solid chat:* [https://gitter.im/cern-solid/community](https://gitter.im/cern-solid/community)

---

## References Historical

* *The original Web proposal:* https://www.w3.org/History/1989/proposal.html
* *When the CERN Web was Open Source (most data missing today):* https://weboffice.web.cern.ch/WebOffice/
* *Past attempts to involve CERN in W3C work:*
    * *CERN-W3C 2014 proposal:* https://cern.ch/dimou/personal/CERN-W3C_Collaboration.pdf
    * *CERN-W3C 2017 proposal:* https://cern.ch/dimou/personal/CERN-W3C_Collaboration_2017_proposal.pdf
