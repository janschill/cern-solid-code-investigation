# Pod

## Setup

### Containerized

- [NGiNX proxy with Let's Encrypt certificates](https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion), only problem when using this: [Running Solid behind a reverse proxy](#running-solid-behind-a-reverse-proxy)
- [https://github.com/angelo-v/docker-solid-server](https://github.com/angelo-v/docker-solid-server) provides a one-click solution. I think this uses single-user mode though.

### Running Solid behind a reverse proxy

*[Source](https://github.com/solid/node-solid-server/wiki/Running-Solid-behind-a-reverse-proxy)*

The Solid server needs to receive the client's certificate. If behind a reverse proxy it cannot to that.
This mechanism is called [TLS Client Auth](https://blog.cloudflare.com/introducing-tls-client-auth/#handshakeswithtlsclientauth) and adds an extra layer of security, when API keys are comprimised mid-connection, the certificates are encrypted and cannot be reused. TODO: understand this completely.

### Lessons learned

- Wildcard certificates is not available with the popular letsencrypt Docker image. This is because it does not support. More information around this, can be found in this [issue](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion/issues/319). Why was this needed in the first place? Because when wanting to set up and run a multiuser Solid pod, wildcard certificates are needed, as the server will create {username}.janschill.de subdomains to host their user base.
  - [Docker NGiNX with Let's Encrypt](https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion)
  - [Docker with Solid pod, NGiNX reverse proxy, Let's Encrypt](https://github.com/angelo-v/docker-solid-server/blob/master/examples/docker-compose.all-in-one.yml). This is nice, but only allows single-user mode and not multiuser.
  - When setting up the one-click version use janschill.de as host
- Running Solid behind a reverse proxy. [Source](https://github.com/solid/node-solid-server/wiki/Running-Solid-behind-a-reverse-proxy)
