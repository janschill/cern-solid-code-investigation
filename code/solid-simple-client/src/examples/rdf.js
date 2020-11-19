import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const $rdf = require('rdflib');

export default class RDF {
  constructor(webID) {
    this.$rdf = $rdf
    this.store = $rdf.graph();
    this.webID = webID;
    this.me = this.store.sym(webID);
    this.profile = this.me.doc();
    this.FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
    this.VCARD = new $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
    this.fetcher = new $rdf.Fetcher(this.store);
  }
}
