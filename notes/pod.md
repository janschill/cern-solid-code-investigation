# Pod

## Setup

### Containerized

- [NGiNX proxy with Let's Encrypt certificates](https://github.com/evertramos/docker-compose-letsencrypt-nginx-proxy-companion), only problem when using this: [Running Solid behind a reverse proxy](#running-solid-behind-a-reverse-proxy)
- [https://github.com/angelo-v/docker-solid-server](https://github.com/angelo-v/docker-solid-server) provides a one-click solution. I think this uses single-user mode though.

### Running Solid behind a reverse proxy

*[Source](https://github.com/solid/node-solid-server/wiki/Running-Solid-behind-a-reverse-proxy)*

The Solid server needs to receive the client's certificate. If behind a reverse proxy it cannot to that.
This mechanism is called [TLS Client Auth](https://blog.cloudflare.com/introducing-tls-client-auth/#handshakeswithtlsclientauth) and adds an extra layer of security, when API keys are comprimised mid-connection, the certificates are encrypted and cannot be reused. TODO: understand this completely.
