import {
  getSolidDataset,
  getThing,
  getStringNoLocale
} from "@inrupt/solid-client";

import { Session } from "@inrupt/solid-client-authn-browser";
import { VCARD } from "@inrupt/vocab-common-rdf";

const session = new Session();

const buttonLogin = document.querySelector("#btnLogin");
const buttonRead = document.querySelector("#btnRead");

// 1a. Start Login Process. Call session.login() function.
async function login() {
  if (!session.info.isLoggedIn && !new URL(window.location.href).searchParams.get("code")) {
    await session.login({
      oidcIssuer: "https://inrupt.net",
      redirectUrl: "http://localhost:1234",
    });
  }
}

// 1b. Login Redirect. Call session.handleIncomingRedirect() function.
// When redirected after login, finish the process by retrieving session information.
async function handleRedirectAfterLogin() {
  // If redirected, has code
  if (new URL(window.location.href).searchParams.get("code")) {
    await session.handleIncomingRedirect(window.location.href);

    // Update the page with the status.
    document.getElementById("labelStatus").textContent = "Your session is logged in.";
    document.getElementById("labelStatus").setAttribute("role", "alert");
  }
}

// The example has the login redirect back to the index.html.
// This calls the function to process login information.
// If the function is called when not part of the login redirect, the function is a no-op.
handleRedirectAfterLogin();

// 2. Read profile
async function readProfile() {
  const webID = document.getElementById("webID").value;

  // Profile is public data; i.e., you do not need to be logged in to read the data.
  // For illustrative purposes, shows both an authenticated and non-authenticated reads.

  let myDataset;
  if (session.isLoggedIn) {
    myDataset = await getSolidDataset(webID, { fetch: session.fetch });
  } else {
    myDataset = await getSolidDataset(webID);
  }

  const profile = getThing(myDataset, webID);

  // Get the formatted name (fn) using the property identifier "http://www.w3.org/2006/vcard/ns#fn".
  // VCARD.fn object is a convenience object that includes the identifier string "http://www.w3.org/2006/vcard/ns#fn".
  // As an alternative, you can pass in the "http://www.w3.org/2006/vcard/ns#fn" string instead of VCARD.fn.

  const fn = getStringNoLocale(profile, VCARD.fn);

  // VCARD.role obect is a convenience object that includes the identifier string "http://www.w3.org/2006/vcard/ns#role"
  // As an alternative, you can pass in the "http://www.w3.org/2006/vcard/ns#role" string instead of VCARD.role.

  const role = getStringNoLocale(profile, "http://www.w3.org/2006/vcard/ns#role");

  const org = getStringNoLocale(profile, VCARD.org);

  // Update the page with the retrieved values.
  document.getElementById("labelFN").textContent = fn;
  document.getElementById("labelRole").textContent = role;
  document.getElementById("labelOrg").textContent = org;
}

buttonLogin.onclick = function () {
  login();
};

buttonRead.onclick = function () {
  readProfile();
};
