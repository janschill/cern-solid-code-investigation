#!/usr/bin/env node

import { SolidNodeClient } from 'solid-node-client';
import * as $rdf from 'rdflib';
const client = new SolidNodeClient();
const store = $rdf.graph();
const fetcher = $rdf.fetcher(store, { fetch: client.fetch.bind(client) });
// now all rdflib methods support file:// requests in nodejs

async function main() {
  let session = await login();  // may be omitted if you don't need authentication
  // now all rdflib methods support authenticated http: requests in nodejs
}
