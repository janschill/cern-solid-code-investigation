# Solid Comment Evaluation

## Notes

* Type of evaluation: Architectural Software Quality Assurance
*

* “Quality Attribute (QA) measurable or testable property of a system that is used to indicate how well the system satisfies the needs of its stakeholders.”

## Needs of the Stakeholders

“Develop a module that shows a Solid integration in traditional software (at CERN)”

- User has control of the generated data
  - Can revoke access to his|her data at any time
  - and has the right to be forgotten
- Intuitive usage
- User decides who can see it?

- Does not compromise the existing level of
  - what is the existing level of x?
  - security
  - performance
  - usability
  - availability

## QAs

1. The module introduces a way of inject cross-site scripting
2. The module **increases**
    * “first meaningful paint” render time
    * “
