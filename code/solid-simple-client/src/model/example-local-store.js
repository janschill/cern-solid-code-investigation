#!/usr/bin/env node

// Needed to be able to use require()
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const $rdf = require('rdflib');

const store = new $rdf.IndexedFormula;
const me = store.sym('https://janschill.inrupt.net/profile/card#me');
const profile = me.doc();
const VCARD = new $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
store.add(me, VCARD('fn'), 'Jan Schill', profile);

// let name = store.any(me, VCARD('fn'), null, profile);
let name = store.any(me, VCARD('fn'));

console.log(name.value)
