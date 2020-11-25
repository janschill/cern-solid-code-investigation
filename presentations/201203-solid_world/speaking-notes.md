# Speaking notes

## First slide, ToC and introduction

Hello I am Jan, student at the IT University of Copenhagen and I will present the CERN-Solid code investigation project today to you.

*Next slide – Overview*

This is an overview of the presentation

*Next slide – Introduction*

Half a year ago I was looking for a thesis project
When I learned about Solid at RightsCON, I liked the idea
Reached out to solidproject.org and had a talk with Mitzi
She connected me with Maria, who then introduced me to the CERN-Solid code investigation project. Which I am now doing as part of my Master's thesis.

So, what can be understood under CERN-Solid code investigation:
We want to investigate the integration of the Solid principles into complex software from CERN.
And before going into any further detail of how this will be done, it should be established why this should be done in the first place.

*Next slide – Why investigate into CERN-Solid?*

CERN being the birthplace of the World Wide Web thanks to none other than Tim Berners-Lee.
Has always had an interest in the evolution of the web.
Further, CERN has many sophisticated software projects, which are already open source and are of operational status with tens of thousands of users.

*Next slide – What is Indico?*

One of these applications is Indico.
It is an open source tool for event organisation, archival and collaboration.
It has been in production for 20 years and is being used heavily by CERN and other companies

*Next slide – Why Indico can be a PoC for Solid*

So, why is Indico a suitable proof of concept for Solid?
As mentioned before it is now being used for over 20 years with excellent operational quality. It is written in Python, and actively maintained.

The software in itself does not have any incentives for user data in some of its modules like: registrating for a conference or commenting on meetings.

When a conference host creates an event, they decide what information is needed to register – sometimes personal identifiers like passport numbers. Those – much to the desire of a user – could be stored decentralized on a Solid data pod.

For the comments. The idea would be to enrich the meeting interface with a comment module, that allows users to create messages and associate them with a meeting. Those comments could also be easily stored in a data pod.

*Next slide – How is the investigation carried out?*

At the moment I am reviewing the Solid specifications and evaluating existing Solid implementations.

I find the specifications invaluable to my studies, as it acts as a source of truth and helped and still is helping me, understand a lot of details from the Solid Ecosystem. It is very well written and communicates its concepts concisely.

Nevertheless, the second point in my roadmap – the evaluation of existing Solid implementations – is essential, because actually developing a Solid client is challenging – at least for me – without great assistance from the specifications (as they focus mostly on the server side).
I found the sheer amount of information and different existing implementations overwhelming. I've already received a lot of help from active members in the Solid community to point me to good resources, but it definitely has been a challenge.
This is no means any critique, just an observation, which can in my opinion be observed in every area of web development.
Also, not to forget the fact that Solid is so young and in such active development and my limited experience with web development makes this justifiable. And every encounter with anyone from the Solid community has been more than a pleasure.

One area where I have not spent too much time in yet, but will be very relevant in the near future is in the actual integration of Solid in complex software. One challenge I will be facing is the integration of Solid authentication within Indico. It already has an existing authentication module, and what we desire now is, that an existing Indico user would be able to link his WebID with his Indico profile, to then use the previously mentioned enrichments (conference registration and comments), making the storage of this data on a Solid pod possible.

I appreciate every exchange with all of you, it being questions, recommendations or challenges that you might forsee. Please reach out to me.

This and many more challenges await me, but I am positive and delighted to take part in this amazing journey.

*Next slide – Conclusion*

TODO: conclusion notes
