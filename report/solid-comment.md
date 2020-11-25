# Solid Comment

Developing a JavaScript module that can be easily embedded on a website, which reads and writes comments from a data pod.

## Learnings

### 403 Origin Unauthorized

* [403 Origin Unauthorized](https://github.com/solid/solid-auth-client/issues/155#issuecomment-624706105)
* [Adding trusted web apps](https://github.com/solid/web-access-control-spec#adding-trusted-web-apps)

Navigate to the data pod -> preferences -> manage trusted applications and add localhost

### rdflib.js

#### "Why is not a graph type"

`why` is the document where the triple was or will be stored.

This was because the passed in URI as string to the resource is not a graph type. It is supposed to be of type Named Node. This can be achieved by:

```javascript
const solidStore = $rdf.graph()
const me = solidStore.sym('path-to-resource');
const profile = me.doc();
```

`doc()` generates a Named Node for the document. [[Source]](https://linkeddata.github.io/rdflib.js/Documentation/webapp-intro.html)

* https://github.com/linkeddata/rdflib.js/blob/f6f8b0bf09c0a73882626093551258c8546be114/src/store.ts#L396

## Challenges

* What is the correct way of storing the comments?
  * Store comments in separate files?
  * How to associate comments with an application?
* How to sort comments from different users?
* How to link from the application to the data pod?

## Notes

* [Schema comment](https://schema.org/Comment)
