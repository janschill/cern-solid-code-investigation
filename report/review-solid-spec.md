# Review of the Solid specifications

The [Solid Ecosystem](https://solid.github.io/specification/) is a publication that outlines all technical and non-technical parts of the Solid Ecosystem. It does so in the form of specifications which define their correct means of implementation to ensure the proper usage of the Solid idea.

TODO: *With the specifications Solid is being described in the abstract of the main specification as: "[…] applications with secure and permissioned access to externally stored data in an interoperable way".*

The specifications are currently published as an incomplete draft, a lot of sections are undefined and new work is being merged frequently into the documents.\
Contributions to the specifications are heavily discussed using the GitHub issue and pull request features, but also chat platforms like Gitter. A review of such a contribution follows strict regulations. A contribution is encouraged to come with a sophisticated explanation on why this change is appropriate. Each topic within the specifications have editors to them assigned who are responsible . A few example topics are:

* Resource Access
* Authentication
* Data Interoperability
* …

Due to the fact that the specifications are still work in progress makes reviewing challenging, as – even though the general direction of the document will remain as is – it is subject to additions, removals and general changes in the future.
Therefore, it shall be reviewed and assessed in its current state and no speculations on the missing sections be done.

The main document brings together a set of specifications, either specifications that coin new terms and are being devised at the same time or it reuses existing technical reports by linking to it – mostly being Request for Comments (RFC).\

The main document consists of six sections: *(1) Introduction, (2) Authenticated Resource Access, (3) Clients and Apps, (4) Optional Integrations, (5) HTTP Definitions and (6) Security Considerations*.

## Summary

The specification defines a few terms in the beginning, which are crucial in understanding the document and Solid generally.
The definitions shall not be introduce using other terminology as the original definitions are already short and concise:

"A data pod is a place for storing documents, with mechanisms for controlling who can access what."

"A Solid app is an application that reads or writes data from one or more [data pods](https://solid.github.io/specification/#data-pod)."

"A read operation entails that information about a resource’s existence or its description can be known." [[Source]](https://github.com/solid/specification/issues/149#issue-568433265)

"A write operation entails that information about resources can be created or removed." [[Source]](https://github.com/solid/specification/issues/126#issuecomment-569920473)

"An append operation entails that information can be added but not removed." [[Source]](https://github.com/solid/specification/issues/118#issuecomment-569648485)

## Remarks

- Does not do a good job on explaining the reason for LDP.

## Notes on reviewing

- Reflecting both its strengths and weaknesses
- Assessment of the quality, novelty, and importance of the article on the good and bad

A. Summary of the specification\
B. Assessment of strengths and weaknesses\
C. Recommendation

[Source](https://www.cs.colostate.edu/~cs656/alan-meier.pdf):

(1) Title and author of paper
(2) Summary of paper
  This needs to be only 1-3 sentences, but it demonstrates that you understand the paper and, moreover, can summarize it more concisely than the author in his abstract.
(3) Good things about the paper (one paragraph)
  This is not always necessary, especially when the review is generally favorable. However, it is strongly recommended if the review is critical. Such introductions are good psychology if you want the author to drastically revise the paper.
(4) Major comments
  Discuss the author's assumptions, technical approach, analysis, results, conclusions, reference, etc. Be constructive, if possible, by suggesting improvements.
(5) Minor comments
  This section contains comments on style, figures, grammar, etc. If any of these are especially poor and detract from the overall presentation, then they might escalate to the 'major comments' section. It is acceptable to write these comments in list (or bullet) form.
(6) Recommendations
  Some referees will shower papers with invective even when they like it. An editor may not recognize this habit, and interpret the criticism as grounds not to publish the paper. For these reasons, it is worthwhile to tell the editor if the paper should be published. Three major categories of recommendations are: "publish as is", "publish after corrections have been made", and "reject". Sometimes the recommendations fit better in the cover letter.
