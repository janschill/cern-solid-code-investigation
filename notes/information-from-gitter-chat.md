# Useful information from Gitter chat

A lot of valuable information is being shared on Gitter, an internet relay chat (IRC). Gitter does not offer a great search interface, making the search for specific information difficult.

This document is a collection of messages that I found useful. Please always take into account that the information could be outdated or not entirely correct. Refer to accepted technical documentation or to the people directly to gather reliable information.

## Messages

### Solid

>Ruben Verborgh @RubenVerborgh Dec 03 21:43
The Community Solid Server will be the default open-source server implementation going forward.
NSS is a legacy implementation that (partly) does the trick today, but the codebase carries a lot of technical debt.
CSS instead has a highly modular architecture that is better equipped to address the technical challenges going forward.
For instance, NSS does not implement the latest secure authentication spec (DPoP), whereas CSS does.
Plus, CSS is more stable, fully tested, etc.
So it will be easier to implement any bells and whistles there going forward, as those can be plugged in and out (as opposed to NSS, where you'd have to write them into a monolithic codebase).
The pod-server project is an abandoned effort; we should mark it as such.
If you're starting today, start with CSS.
Legacy can still remain on NSS for a little while if needed.
These slides provide some more details: https://rubenverborgh.github.io/Solid-World-August-2020/

---

>Michiel de Jong @michielbdejong Dec 04 06:51
>Most Solid server implementations consist of many smaller modules. For instance the IDP in NSS is based on Anvil. The one in inrupt-pod-server was based on panva's oidc library. I think the one in ess-broker is based on Mitre. The one in php-solid-server and in Nextcloud is based on phpleague/OAuth. TrinPod also has an IDP component. CSS does not (yet).

---

>Sarven Capadisli @csarven 12:57
>@janschill That's indeed a tough one but I'll give it a shot (and others can shot me down if they like). The short answer is that the key aspects of the ecosystem are for the most "complete". There are some rough edges indeed, some nice to haves or unknowns but that's to be expected. Bear in mind that what makes a spec a spec is not just that there is a nice/readable document to look at but all the work that goes into it, anything from all supporting documents, to publicly demonstrating working implementations based on the specs, as well as actual usage in the wild. There is a lot of iteration on that front. We could call it "ready" at any point but that doesn't serve us or anyone in the end. So, to answer your question more concretely, I would say in 2021Q1, or more realistically Q2 we'll be in a position to wrap up majority of the current work and make a wide call for implementations - not to be confused with the idea that call for implementations/experiences/feedback hasn't been done already or needed on an ongoing basis. To me, the wide call marks a point where we feel the specs are mature enough and expect minimal / hopefully non-breaking changes to the specs based on implementation experience. We need to eventually get a lot of input from users - yes, that includes anyone dogfooding the specs to anyone that only needs to get their tasks done. Think along the lines of whether the servers,.. apps being developed have a net positive effect or harming users.. This is why ethical checks on the path to developing the specs are important. We don't want to be in a situation where we think we are ready for wide use - I don't mean just few isolated users or environments, but for the Web.. - and then deal with major privacy, security, ethical implications. We need to work our way up.. scale up. Don't need to have everyone implementing and using at the same time either. It can happen in phases.. gradually, so that gives us time to improve. When people developing servers, apps etc. can look at the specs and get reasonable coverage. We will weed out stuff that no one is using - and put them into the research/homework/experimentation bucket for later.
>Various specs are in the works and they are at different maturity. More specs will come forward. There is no fixed "end" date or completion for the Solid specifications. Just as there is no particular end date for standardisation. W3C is still going after all for obvious reasons. The point of the Solid project is to help towards changing the course of the Web. We are learning about what's broken and propose ways to fix things.

---

>agentydragon_gitlab
you're free to self-host a Solid server. lots of existing Solid apps I saw so far are open-source, though not all of them, and I expect if Solid becomes more widely adopted, more enterprise/closed-source apps will arrive, and those might for whatever reason decide to not let you use them.

>agentydragon_gitlab
Solid is sorta orthogonal to the "can apps/pods be killed" question. it's a bit like asking the same thing about HTTP. depends on the implementation. but the vision is about data ownership. so if someone shuts down their app, you would be less likely to lose your data.

>SharonStrats
Can anyone tell me if it was Inrupt who moved the libraries Solid Libraries such as solid-ui, solid-panes to github in 2017? just adding a little history to my presentation.

### Solid Comment

>**Michiel de Jong** @michielbdejong Mar 19 10:05
>if the comment is deleted by the owner of the comment, then the UI should show "this comment was deleted by the owner". That's part of the right to be forgotten. If the entire pod was deleted, then the UI should show "the user who commented this no longer exists". If the pod moved but the URL didn't change then everything's cool. If the comment author obtained a new WebID and stopped using the old one, then ideally the old one will redirect to the new one, so the comment can still be traced. If they deleted their old one altogether, then one of two things can happen: 1) in current Solid, things would just break. 2) in future Solid, ideally, they should have used a migrator app as part of their change of WebID, and maybe this migrator app would have sent a http request to update the URL of their comment. Does Indico support updating an existing comment, or only adding a new one?

>**Pedro Ferreira** @pferreir 09:42
>With caching it could. But the comment is requested “freshly” every time, it would result in a 404 resource not found.
>
>Yeah, that's the main issue with the Solid way of doing things, IMO. Those hiccups may happen, and then you will be affecting N applications instead of just one. If you cache aggressively, OTOH, you will solve the issue with possible downtime periods, but you will be kind of defeating the point you were trying to make in the first place.


>**mariadimou** @mariadimou 09:56
>@michieldejong asked:
>
>Does Indico support updating an existing comment, or only adding a new one?
>
>As we speak, Indido supports nothing, concerning Comments.
>Comments to Indico events, in production, do not exist.
>IMHO one should be able to Edit his/her own comments.


>**Pedro Ferreira** @pferreir 09:57
>Yeah, this is a feature of Jan's PoC


>**mariadimou** @mariadimou 10:02
>@michielbdejong wrote:
>
>If they deleted their old one altogether, then one of two things can happen: 1) in current Solid, things would just break.
>
>@pferreir is right. This is creating a difficulty to make Solid embraced by CERN.
>
>Can we make such a development (smooth transition between pod providers as per 2 below) a priority in the roadmap? @timbl ?
>
>2) in future Solid, ideally, they should have used a migrator app as part of their change of WebID, and maybe this migrator app would have sent a http request to update the URL of their comment.

---
