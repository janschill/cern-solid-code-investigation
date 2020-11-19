#!/usr/bin/env node

import { SolidNodeClient } from 'solid-node-client';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const dotenv = require("dotenv");
dotenv.config();

const client = new SolidNodeClient();
const solidIDP = process.env.SOLID_IDP;
console.log(solidIDP);

async function main() {
  let response = await client.fetch(solidIDP);
  console.log(await response.text())
  let session = await client.login();
  if (session) {
    console.log(`logged in as <${session.webId}>`);
    response = await client.fetch(solidIDP);
    console.log(await response.text())
    logout();
  }
}

main()
