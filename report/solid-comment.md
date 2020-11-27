# Solid Comment

Developing a JavaScript module that can be easily embedded on a website, which reads and writes comments from a data pod.

## RDF

### Data schema

This module should be able to live on is own and not be specific to eg. a blog post, but can be used on every type of resource.

[Ontology](https://www.w3.org/ns/ldp#)

Namespaces

| Name | Abbreviation | URL | Description |
| - | - | - | - |
| The W3C Linked Data Platform (LDP) Vocabulary | ldp | http://www.w3.org/ns/ldp# | "This document is an HTML representation of OWL ontology describing all vocabulary URIs defined in the Linked Data Platform (LDP) namespace. This ontology provides an informal representation of the concepts and terms as defined in the LDP or other relevant specifications. Consult the LDP specification for normative reference, unless a different specification is indicated inline. See also http://www.w3.org/2012/ldp, http://www.w3.org/TR/ldp-ucr/, http://www.w3.org/TR/ldp/, http://www.w3.org/2011/09/LinkedData/" |
| Schema.org | schema | https://schema.org | "Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond." |

The central resource is the comment in itself.

| Comment |
| :------:|
| description: string |
| created: string |

| Comment |
| :------:|
| (c, a, ldp:Resource) |
| (c, a, schema:Comment) |
| (c, rdfs:comment, literal) |
| (c, terms:created, XML:dateTime) |

## Learnings

### 403 Origin Unauthorized

* [403 Origin Unauthorized](https://github.com/solid/solid-auth-client/issues/155#issuecomment-624706105)
* [Adding trusted web apps](https://github.com/solid/web-access-control-spec#adding-trusted-web-apps)

Navigate to the data pod -> preferences -> manage trusted applications and add localhost

### RDF (rdflib)

* Best practice
* How do I model my objects in RDF

#### Basic usage

```javascript
import { fetch } from 'solid-auth-client';
const testUrl = `https://janschill.solidcommunity.net/public/fetchQueue.ttl`;
const $rdf = require('rdflib')

const store     = $rdf.graph();
const fetcher = new $rdf.Fetcher(store, {
  fetch: async (url, options) => {
    return await fetch(url, options)
  }
});
const subject   = store.sym(testUrl+"#this");
const predicate = store.sym('https://example.org/message');
const object    = store.literal('hello world');
const document  = subject.doc();

async function main(){
  // login using solid-auth-client
  store.add(subject, predicate, object, document);
  await fetcher.putBack(document);
  store.remove(subject, predicate, object, document);
  await fetcher.load(document);
  await fetcher.webOperation('DELETE',document);
}
main();
```

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
