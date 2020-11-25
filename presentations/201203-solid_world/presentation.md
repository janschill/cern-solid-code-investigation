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

1. **Introduction**
3. **Why** investigate into CERN-Solid?
2. **What** is Indico?
4. **How** is the investigation carried out?
5. **Conclusion**
6. **References**

---

## Introduction

Investigate the integration of Solid principles into software from CERN

<!-- Speaking notes:

I am Jan, student at the IT University of Copenhagen.

Half a year ago I was looking for a thesis project
When I learned about Solid at RightsCON, I liked the idea
Reached out to solidproject.org and had a talk with Mitzi
She connected me with Maria, who then introduced me to the CERN-Solid code investigation project. Which I am now doing as part of my Master's thesis.

What can be understood under CERN-Solid code investigation
It is the attempt of investigating into the integration of the Solid principles in the open source software written by CERN.

Before going into the details of how this will be done, it should be established why this should be done in the first place.
-->

---

## Why investigate into CERN-Solid?

* CERN the birthplace of the Web
* Many sophisticated software projects at CERN
    * Already open source
    * Operational status (tens of thousands of users)

<!-- Speaking notes:

CERN being the birthplace of the World Wide Web thanks to none other than Tim Berners-Lee.
Has always had an interest in the evolvement of the web.
Further, CERN has many sophisticated software project, which are already open source and are of operational status with tens of thousands of users.


====
TODO: Maybe more
====
-->

---

## What is Indico?

* Open-source tool for event organisation, archival and collaboration
* “*Indico is used every day at CERN to manage more than 600,000 events of different complexities and 200 meeting and conference rooms.*”

[https://github.com/indico/](https://github.com/indico/)

<!-- Speaking notes:

One of these applications is Indico.
It is an open source tool for event organisation, archival and collaboration.
It has been in production for 20 years and is being used heavily by CERN and other companies

=== backlog notes
* 20 years in production
* It shows by the in-house usage that Indico has a tremendous amount of users and excellent operational quality
* The UN uses Indico since 2016 to handle more than 160,000 participants, it is also widely used outside of CERN
* The application is written in Python and actively maintained by a developer team of six
-->

---

### Why Indico can be a PoC for Solid

* 20 years of excellent operational quality
* No incentive for user data in modules of
    * Conference registration
    * Meeting comments

<!-- Speaking notes:

As mentioned before it is now being used for over 20 years with excellent operational quality.
The software in itself does not have any incentives for user data in some of its modules like: registrating for a conference or commenting on meetings.

When a conference host creates an event, they decide what information is needed to register – sometimes personal identifiers like passport numbers. Those – much to the desire of a user – could be stored decentralized on a Solid data pod.

For the comments. The idea would be to enrich the meeting interface with a comment module, that allows users to create messages and associate them with a meeting. Those comments could also be easily stored in a data pod.

=== backlog notes

* For example when a user registers for a conference over Indico, the conference host decides what user data is needed to register
* This user data should not be on CERN's server (for the running CERN instance) or on wherever Indico is hosted
* Solid allows a good solution of every user hosting this data on their preferred data pod
* It is not limited to the conference registration, could also be applied to a comment module or functionalities but this is part of one of the milestones on the next slide.

-->

---

## How is the investigation carried out?

1. **Review Solid specification**
2. **Evaluate Solid implementations**
3. Enrich Indico with Solid principles
4. Recommendations on Solid adoption in CERN applications
5. Document challenges, advantages, gaps
6. Presentation of proceedings

*[GitHub: janschill/uni-research_project](https://github.com/janschill/uni-research_project)*

<!-- Speaking notes:

At the moment I am reviewing the Solid specifications and evaluating existing Solid implementations.

I find the specifications invaluable to my studies, as it acts as a source of truth and helped and still is helping me, understand a lot of details from the Solid Ecosystem.
Nevertheless, is the second point in my roadmap – the evaluation of existing Solid implementations – essential, because actually developing a Solid client is challenging – at least for me – without assistance from the specifications or other documents.
I found the sheer amount of information and different implementations overwhelming. I've already received a lot of help from active members in the Solid community to point me to good resources, but it definitely has been a challenge.
This is no means any critique, just an observation, which can in my opinion be observed in every area of web development.
Also, not forgetting the facts that Solid is so young and in such active development and my limited experience with web development makes this justifiable. And every encounter with anyone from the Solid community has been more than a pleasure.

One area where I have not spent too much time in yet, but will be very relevant in the near future is in the actual integration of Solid in complex software. One challenge I will be facing is the integration of Solid authentication within Indico. It already has an existing authentication module, what we desire now is, that an existing Indico user would be able to link his WebID with his Indico profile, to then use the previously mentioned enrichments (conference registration and comments), making the storage of this data on a Solid pod possible.

I appreciate every exchange with all of you experienced engineers, it being questions, recommendations or challenges that you might forsee. Please reach out to me.

This and many more challenges await me, but I am positive and delighted to take part in this amazing journey.


-->

---

## Conclusion

The success of the [CERN-Solid code investigation project](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation) is important:

1. For the MSc thesis at itu.dk to demonstrate that the implementation works.
2. For CERN to be inspired by the PoC and embrace Solid.

---

## References

* [Detailed project description](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation)
* [Project GitHub repository](https://github.com/janschill/uni-research_project)
