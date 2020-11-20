---
type: slide
slideOptions:
  theme: cern
---

CERN-Solid code investigation
===

---

## Overview

**What** is Indico?

**Why** investigate into CERN-Solid?

**How** is the investigation carried out?

**Conclusion** <!-- Not sure about this point yet -->

**References**

---

## What is Indico?

Open-source tool for event organisation, archival and collaboration

“*Indico is used every day at CERN to manage more than 600,000 events of different complexities and 200 meeting and conference rooms.*”

<!-- Speaking notes:

* 20 years in production
* It shows by the in-house usage that Indico has a tremendous amount of users and excellent operational quality
* The UN uses Indico since 2016 to handle more than 160,000 participants, it is also widely used outside of CERN
* The application is written in Python and actively maintained by a developer team of six
-->

---

## Why investigate into CERN-Solid?

CERN the birthplace of the Web

Indico has no incentive for user data

<!-- Speaking notes:
* For example when a user registers for a conference over Indico, the conference host decides what user data is needed to register
* This user data should not be on CERN's server (for the running CERN instance) or on wherever Indico is hosted
* Solid allows a good solution of every user hosting this data on their preferred data pod
* It is not limited to the conference registration, could also be applied to a comment module or functionalities but this is part of one of the milestones on the next slide.

TODO:
- Speaking notes
- More reasons
-->

---

## How is the investigation carried out?

1. Review Solid specification
2. -> Evaluate Solid implementations
3. Explore Indico
4. Compare CERN and Solid
5. Document challenges, advantages, gaps
6. Presentation of proceedings

<!-- Speaking notes:
* I am currently doing some pre-work for my Master's thesis, which goes for one more month
* Currently at step 2 of these milestones
* I have looked at the ever evolving Solid specifications and written some minor notes and recommendations
* Now I am looking at existing implementations, the NSS, CSS for the server side and a few client applications and also developing and testing
* Explore Indico
    * Create a PoC for the two previously mentioned use-cases: registration and comments
* M4 looks into more use-cases for the Indico application that could find value when Solid is being applied
* M5 and M6 will then be mostly arguing for or against Solid in Indico or other CERN application
-->

---

## Conclusion

*Maybe not necessary*

---

## References

*Maybe not necessary*
