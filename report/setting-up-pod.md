# Setting up a Solid pod

The goal by the end of this tutorial is a working multiuser Solid pod behind an NGiNX reverse proxy. The current available implementation of a Solid pod is the open source [Node Solid Server (NSS)](https://github.com/solid/node-solid-server).

This write-down mostly follows [this tutorial](https://solidproject.org/for-developers/pod-server) from the official Solid website, the documentation in the [repository](https://github.com/solid/node-solid-server) of the NSS and other sources from the web, which shall be referenced as used.

## Web server

Before installing the NSS, a physical web server, preferably running a Linux distribution is needed. A domain should be configured to point to this web server. This can be done at the DNS hosting and domain name registration service that holds the domain.
The domain that will be used in this tutorial is janschill.de and is configured at Hetzner Online.

## Digital wildcard certificate

NSS uses instead of a subdirectory approach a subdomain one to create the space for an isolated user pod. This means a new user registers and gets as his/her pod location at the address https://username.janschill.de and not https://janschill.de/username.
This is a design decision and there has been some [discussion](https://github.com/solid/node-solid-server/issues/1349) about moving or allowing the setting of the latter. There are benefits and drawbacks to these approaches that shall not be discussed in this context.
One drawback needs to be addressed – as it is essential for this setup. It is the need for [wildcard certificates](https://en.wikipedia.org/wiki/Wildcard_certificate). This is only a drawback, if a developer has not heard about this concept or has never set up digital certificates in general, as the process is quite straightforward.
In short a wildcard certificate allows a certificate to be used with multiple subdomains and is created with `certbot`, a program offered by Let's Encrypt, as follows:

```bash
# Install certbot
apt install certbot
# Issue certificate
certbot certonly \
--manual \
--preferred-challenges=dns \
--email schill@hey.com \
--server https://acme-v02.api.letsencrypt.org/directory \
--agree-tos \
-d janschill.de -d *.janschill.de
```

<!-- TODO: Explain all flags -->

Make sure the certificate directory has the correct permissions set.

```bash
chmod -R 755 /etc/letsencrypt/live
```

Why are digital certificates needed in the first place? The Solid specifications say that: “A data pod SHOULD use TLS connections through the https URI scheme in order to secure the communication between clients and servers.” (Section 2.1.2, W3C Solid Community Group, 2020).
Therefore, the NSS makes it mandatory to provide the location of a valid certificate when started.

## Reverse proxy

A reverse proxy allows a server to run multiple services on the same port. A reverse proxy receives the initial request on the host and port and then forwards it to the configured local service on the machine.
Solid has WebID-TLS implemented as one of its authentication mechanisms. A reverse proxy – when not configured correctly – does not permit the usage of this, as the client when performing the handshake with the server also [sends its certificate](https://blog.cloudflare.com/introducing-tls-client-auth/#handshakeswithtlsclientauth), which means with the usage of a reverse proxy that performs the handshake, the certificate is not sent to the Solid server, denying the possibility of authenticating properly.
A solution is the correct configuration of the reverse proxy
[This document](https://github.com/solid/node-solid-server/wiki/Running-Solid-behind-a-reverse-proxy) introduces this issue and a few solutions to it.
Therefore, the same NGiNX configuration with necessary steps to set up can be found [here](https://solidproject.org/for-developers/pod-server/nginx):

1. Open the default configuration after installing NGiNX

```bash
# Installing NGiNX
sudo apt update
sudo apt install nginx
# Editing the default configuration
vi /etc/nginx/sites-available/default
```

2. Configuration for the reverse proxy

```bash
server {
  listen 0.0.0.0:80;
  listen [::]:80;
  server_name janschill.de;
  server_tokens off;
  return 301 https://$http_host$request_uri;
  access_log  /var/log/nginx/solid_access.log;
  error_log   /var/log/nginx/solid_error.log;
}

server {
  listen *:443 ssl;
  listen [::]:443 ssl;
  server_name janschill.de;
  server_tokens off;

  access_log  /var/log/nginx/solid_ssl_access.log;
  error_log   /var/log/nginx/solid_ssl_error.log;

ssl_certificate /etc/letsencrypt/live/janschill.de/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/janschill.de/privkey.pem;

root /var/www/janschill.de;

  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

  location / {
    proxy_pass https://localhost:8443;

    gzip off;
    proxy_redirect off;

    proxy_read_timeout      300;
    proxy_connect_timeout   300;
    proxy_redirect          off;

    proxy_http_version 1.1;

    proxy_set_header    Host                $http_host;
    proxy_set_header    X-Real-IP           $remote_addr;
    proxy_set_header    X-Forwarded-Ssl     on;
    proxy_set_header    X-Forwarded-For     $proxy_add_x_forwarded_for;
    proxy_set_header    X-Forwarded-Proto   $scheme;
  }

}
```

As per default the logs for the server will the written in `/var/log/nginx/solid_*.log` files.

3. Restart the NGiNX server

```bash
systemctl restart nginx
```

## Node Solid Server

1. Install `npm` and `solid-server`

```bash
sudo apt update
sudo apt install nodejs npm
npm install -g solid-server
```

2. Initialize `solid-server`

```bash
solid init
# Path to the folder you want to serve. Default is (./data)
/var/www/janschill.de/data
# SSL port to run on. Default is (8443)
8443
# Solid server uri (with protocol, hostname and port)
https://janschill.de
# Enable WebID authentication
Yes
# Serve Solid on URL path
/
# Path to the config directory (for example: /etc/solid-server) (./config)
/var/www/janschill.de/config
# Path to the config file (for example: ./config.json) (./config.json)
/var/www/janschill.de/config.json
# Path to the server metadata db directory (for users/apps etc) (./.db)
/var/www/janschill.de/.db
# Path to the SSL private key in PEM format
/etc/letsencrypt/live/janschill.de/privkey.pem
# Path to the SSL certificate key in PEM format
/etc/letsencrypt/live/janschill.de/fullchain.pem
# Enable multi-user mode
Yes
# Do you want to set up an email service (y/N)
N
# A name for your server (not required)
janschill.de
# A description of your server (not required)

# A logo (not required)

# Do you want to enforce Terms & Conditions for your service (y/N)
N
# Do you want to disable password strength checking (y/N)
N
# The support email you provide for your users (not required)

```

It is important that the configure directories exist and have correct user permissions.

```bash
# Create directories
mkdir -p /var/www/janschill.de/config
mkdir /var/www/janschill.de/data
mkdir /var/www/janschill.de/.db
# Give permission
chown -R 1000:1000 /var/www/janschill.de/
```

Within the directory start up the server.

```bash
# Change directory
cd /var/www/janschill.de
# Start server
solid start
```

## References

W3C Solid Community Group, 2020. The Solid Ecosystem. [online] Available at: <https://solid.github.io/specification/> [Accessed 05 October 2020].

solid-server in Node. [online] Available at: <https://github.com/solid/node-solid-server> [Accessed 05 October 2020].

Example config for NSS on a root server. [online] Available at: <https://solidproject.org/for-developers/pod-server> [Accessed 05 October 2020].

solid-server in Node. [online] Available at: <https://github.com/solid/node-solid-server/issues/1349> [Accessed 05 October 2020].

Wildcard certificate. [online] Available at: <https://en.wikipedia.org/wiki/Wildcard_certificate> [Accessed 05 October 2020].

Dani Grant. Introducing TLS with Client Authentication. [online] Available at: <https://blog.cloudflare.com/introducing-tls-client-auth/#handshakeswithtlsclientauth> [Accessed 05 October 2020].

solid-server in Node. [online] Available at: <https://github.com/solid/node-solid-server/wiki/Running-Solid-behind-a-reverse-proxy> [Accessed 05 October 2020].

Use Nginx as a reverse proxy. [online] Available at: <https://solidproject.org/for-developers/pod-server/nginx> [Accessed 05 October 2020].
