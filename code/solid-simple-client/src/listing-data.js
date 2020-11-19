#!/usr/bin/env node

import RDF from './rdf.js';
const dataPodURI = 'https://janschill.inrupt.net/';
const webIDProfileURI = `${dataPodURI}profile/card`;
const rdf = new RDF(`${webIDProfileURI}#me`);
const LDP = rdf.$rdf.Namespace('http://www.w3.org/ns/ldp#>');

const folder = rdf.$rdf.sym(`${dataPodURI}`)
console.log(`Connecting to ${dataPodURI}`)

rdf.fetcher.load(folder).then(response => {
  let files = store.any(folder, LDP('contains'));
  files.forEach(file => {
    console.log(`Loaded ${file || 'no name loaded'}`);
  });
}, err => {
  console.log(`Load failed ${err}`);
});
