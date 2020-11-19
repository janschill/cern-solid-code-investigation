#!/usr/bin/env node

import RDF from './rdf.js';
const rdf = new RDF('https://janschill.inrupt.net/profile/card#me');

rdf.fetcher.load(rdf.profile).then(response => {
  // console.log(response);
  // let names = store.each(me, VCARD('fn')).concat(store.each(me, FOAF('name')));
  let name = rdf.store.any(rdf.me, rdf.VCARD('fn'));
  console.log(`Loaded ${name || 'no name loaded'}`);
}, err => {
  console.log(`Load failed ${err}`);
});
