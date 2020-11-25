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

I am Jan, student at IT University of Copenhagen.
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

a

====
TODO:
====
-->

---

## What is Indico?

* Open-source tool for event organisation, archival and collaboration
* “*Indico is used every day at CERN to manage more than 600,000 events of different complexities and 200 meeting and conference rooms.*”

---

### Why Indico can be a PoC for Solid?

* 20 years of excellent operational quality
* No incentive for user data in modules of
    * Conference registration
    * Meeting comments

<!-- Speaking notes:

* 20 years in production
* It shows by the in-house usage that Indico has a tremendous amount of users and excellent operational quality
* The UN uses Indico since 2016 to handle more than 160,000 participants, it is also widely used outside of CERN
* The application is written in Python and actively maintained by a developer team of six


* For example when a user registers for a conference over Indico, the conference host decides what user data is needed to register
* This user data should not be on CERN's server (for the running CERN instance) or on wherever Indico is hosted
* Solid allows a good solution of every user hosting this data on their preferred data pod
* It is not limited to the conference registration, could also be applied to a comment module or functionalities but this is part of one of the milestones on the next slide.

-->

---

## How is the investigation carried out?

1. Review Solid specification
2. -> Evaluate Solid implementations
3. Enrich Indico with Solid principles
4. Recommendations on Solid adoption in CERN applications
5. Document challenges, advantages, gaps
6. Presentation of proceedings

*TODO: Link to GitHub*

<!-- Speaking notes:
Solid all over the place


Currently reviewing the specifications, this is what missing where to find in order to proceed to implement
Status
Use off the shelf

Looking for Solid implementations
Where
How
What

Tell what I cannot do

Which specification can be used, during the discussion


Recommentation specification: Getting an appointment
Link the notes (References)



* I have looked at the ever evolving Solid specifications and written some minor notes and recommendations
* Now I am looking at existing implementations, the NSS, CSS for the server side and a few client applications and also developing and testing
* Explore Indico
    * Create a PoC for the two previously mentioned use-cases: registration and comments
* M4 looks into more use-cases for the Indico application that could find value when Solid is being applied
* M5 and M6 will then be mostly arguing for or against Solid in Indico or other CERN application
-->

---

## Conclusion

The success of the [CERN-Solid code investigation project](https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation) is important:

1. For the MSc thesis at itu.dk to demonstrate that the implementation works.
2. For CERN to be inspired by the PoC and embrace Solid.

---

## References

*Maybe not necessary*
