# Project proposal

## Problem formulation

### Context

Sir Tim Berners-Lee invented the Web with the intention of providing “access to knowledge, free for all and respecting each one”. This intention lost its meaning to a certain level, with a lot of companies harvesting personal data and generating massiv amounts of revenue by selling it directly or analyzing it and providing a platform for targeted advertisements (Dimou, 2020).\
The Solid project, which is also led by Sir Tim has its purpose in handing the control of this data back to the content owner. It does so by decoupling the applications, the storage of data and authentication (Dimou, 2020).

This is realized with the [Solid specifications](https://solid.github.io/specification/), which defines a set of rules and protocols on how to implement server and client in the Solid ecosystem (W3C Solid Community Group, 2020).

The team behind Solid and other open source contributors have built a [web server](https://github.com/solid/node-solid-server), which implements a pod to those specifications and a list of applications, like a [chat](https://solid-chat.5apps.com/).

In this project a Solid pod should be set up and put into a meaningful context. This can done by finding a proper use case at ITU‘s campus for example: storing all the data for a lab on a self hosted pod at ITU.

The insights and lessons learned of setting up such a service should be documented.\
Possible areas of interest could be:
- Knowledge derived in the process:
  - Solid specifications
  - Architectures of Solid products
  - Architecture and functionality in particular of the Solid server implementation
- The process of setting up a server
- What is implemented, what is missing in the server?
- A good context at ITU for a pod
- How can ITU justify running a pod and use it with appropriate purpose?

In a second part of the project the current Solid implementations could be studied, reviewed and evaluated. There is a diverse list of [applications](https://solidproject.org/use-solid/apps) that are implemented and conform to the Solid specifications.\
These applications could be analyzed and compared to applications that are not implemented to the Solid standard.\
This could be done with a selection of products developed by [CERN](https://home.cern/).\
An example application is Indico, a sophisticated event management system that is being used by a large number of users.

The motivation of doing it on CERN‘s products lies in the interest of CERN collaborating with the Solid project, as they share common values with the mission of Solid and are already developing applications open source. Not to forget was the Web invented at CERN by Sir Tim, creating ideological reasons to succeed in the collaboration of CERN and Solid (Dimou, 2020).

### Intended learning outcomes

- Understand and be able to reason about the architecture of a Solid pod
- Be able to set up a pod and expose it on the internet
- Identify the benefits of using the Solid specifications when:
  - Being a user of it
  - Developing an application for it
- Respectively be able to conclude drawbacks that come with the usage of Solid
- Be able to reason about a migration of an existing application towards the Solid specifications by being able to apply the prior two points (pros and cons of Solid).

## Method

Experimental

## Delivery

Report

## Bibliography

Dimou, M., 2020. CERN-Solid Code Investigation | IT Student Projects. [online] Available at: <https://it-student-projects.web.cern.ch/projects/cern-solid-code-investigation> [Accessed 25 September 2020].
W3C Solid Community Group, 2020. The Solid Ecosystem. [online] Available at: <https://solid.github.io/specification/> [Accessed 25 September 2020].
