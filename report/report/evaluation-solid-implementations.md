# Evaluation of Existing Solid Implementations

The ecosystem of Solid is already diverse in existing implementations. Attempts to transfer the Solid specifications into software have been carried out with different programming languages and to different completion levels.
These servers or data pods have different goals in mind and even though a server needs to adhere to the specifications it does not make them the same.
In the following, three different servers which are closely developed and maintained from the Solid community shall be looked at.
In the second part of this section, libraries for development in the ecosystem and actual developed Solid applications will be evaluated.

## Solid Servers

A Solid server is a web server enabling storage through data pods and may optionally offer IDP implementation as well [[Source](https://solid.github.io/authentication-panel/solid-oidc/#concepts)]. In Solid a server only needs to enable the authentication through Solid OIDC, which requires an IDP, if this IDP is controlled by the user through the usage of an existing Solid server that is hosted on their own infrastructure or they are using an identity-as-a-service vendor is up to them.

### Data Pod

TODO: More here

### Identity Providers

To decentralize authentication an

TODO: More here

### Node Solid Server

The original Solid server was developed at the Massachusetts Institute of Technology (MIT) by PhD students. This server is still to this day the only server that passes most test cases of the [Solid Test Suite](https://github.com/solid/test-suite), which is a set of checks developed to test an implementation against the Solid specifications. The Test Suite for Solid is also still in development and constantly extended by more tests for the different categories of a Solid server.\
This server is completely open-source, written in JavaScript with the help of the web framework Node.js and is commonly referred to as Node Solid Server (NSS).\
NSS implements a pod server and identity provider (IDP), meaning users can register a WebID, create a data pod and authenticate with it.
https://inrupt.net/ and https://solidcommunity.net/ [[Source]](https://solidproject.org//users/get-a-pod) are currently the two domains hosting the NSS and allowing users to register and use these services.

Because NSS was started as a research project, the code base was subject to a lot of experiments. These experiments were sometimes successful and improved the server experience by implementing useful functionality, but sometimes it would also introduce vulnerabilities or not yield the expected outcomes.
Often these implementations were not completely well-designed or made self-contained resulting in code that was hard to remove and therefore just left in. This increased its complexity to a level, where it is difficult to find enthusiastic developer to maintain the implementation.

TODO: More here

### Community Solid Server

The Community Solid Server (CSS) is the from the Solid community-driven development of new open-source software to provide a way for everyone to host a data pod.
It aims at giving developers the opportunity to create new Solid apps and also test them against a working implementation of the Solid specifications, while making sure no legacy code from older experiments influence the testing, such as in NSS.

Another key feature of CSS is its modular architecture. Because Solid is just in the beginning and there is still a lot of different ideas and a roadmap full of features for the future, CSS tries to enable by high cohesion and loose coupling in its modules a highly flexible platform for easy integration of experiments and new ideas. That can be implemented without altering existing code by plugging the experiment in as a self-contained module, which can just as easily removed again. This is to prevent the same mistakes NSS went through.

This is where the decision was made to rewrite an open-source Solid server. Inrupt is sponsoring this development with two imec researchers and one developer. On December 3rd, 2020 the first beta version of CSS was released. This marks a significant milestone in the journey for open-source Solid servers. Developers working in the Solid ecosystem are encouraged by the core developers of CSS to switch over to CSS when developing new applications. This prepares the new applications to work with in the future available open-source servers, but also gives the opportunity to spot bugs or features that have not been accounted and therefore help with the progress of CSS.

One of the greatest benefits of the development of CSS now is the Solid specifications are in a much more mature state they were when the development of NSS started. In-fact no such specifications existed and the experimental nature of Solid back then harmed the quality of the software.

Not only can it be developed against a mature specification, but also has a test-suite constantly checking if the development of CSS adheres to the specifications. This increases the quality of the code substantially because it does not depend on manual checks if it is still on track with the specifications. The Solid Test-Suite is a sophisticated collection of test cases to make sure an implementation complies with the specifications. The test-suite is not yet complete and still lacks in the category of access control policies. It is not crucially consequential, as it is the alternative to the Solid preferred web access control (WAC), which is on the other hand well covered.

The CSS language of choice is TypeScript (TS). TS is a statically typed programming language bringing strict types to the dynamic language of JavaScript (JS). The TS compiler transpiles TS source code into JS source code.

An estimate by a developer was given, that by the second quarter in 2021 CSS could be production-ready.

### Enterprise Solid Server

Inrupt the American-base company Tim Berners-Lee cofounded develops the Enterprise Solid Server (ESS). It is a commercial and closed-source alternative based on Trellis. Trellis is a platform to build scalable Linked Data applications in Java.
In November 2020 Inrupt released the first major version 1.0. Besides developing a Solid server behind closed doors, they are also active in the open-source community, having developed applications like a PodBrowser, allowing the browsing of one's data in a pod or a set of libraries helping developers get started with the development of Solid applications.

Not much more of the implementation of the ESS can be evaluated.
Inrupt does offer a practical journey for new customers, where access is given to the server with introductions to the open-source developer tools or a well-defined and in great detail outlined roadmap containing the design of a proof of concept, proof of value, pilot stage and ready for production with a service level agreement (SLA). Considering the untrustworthiness of the NSS and that any open-source solution of a Solid server will not come with any guarantees of bug fixes within a timely manner.

### Hosting a Solid Server Behind a Domain

NSS is the most complete server in terms of passing the Solid Test Suite. It currently used by Inrupt and the Solid Community to offer free data pods for development, experiments and to get familiar with Solid.
NSS was also used to set up an own instance on the janschill.de domain.

This write-down mostly follows [this guide](https://solidproject.org/for-developers/pod-server) from the official Solid website, the documentation in the [repository](https://github.com/solid/node-solid-server) of the NSS.

#### Web Server

Before installing the NSS, a physical web server, preferably running a Linux distribution is needed. A domain should be configured to point to this web server. This can be done at the DNS hosting and domain name registration service that holds the domain.
The domain that will be used in this example is `janschill.de`.

#### Digital Wildcard Certificate

NSS uses instead of a subdirectory approach a subdomain one to create the space for an isolated user pod. This means a new user registers and gets a pod location at the address https://username.janschill.de/ and not https://janschill.de/username/.
This is a design decision and there has been some [discussion](https://github.com/solid/node-solid-server/issues/1349) about moving or allowing the setting of the latter. There are benefits and drawbacks to these approaches that shall not be discussed in this context.
One drawback of this needs to be addressed – as it is essential for this setup. It is the need for [wildcard certificates](https://en.wikipedia.org/wiki/Wildcard_certificate). This is only a drawback, if a developer has not heard about this concept or has never set up digital certificates in general, as the process is quite straightforward.
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

This command shows that a certificate for the `janschill.de` domain is created, but also for the wildcard `*.janschill.de` domain. It means any string in front of the `janschill.de` domain, separated by a period, is allowed and will have a valid certificate.

* `certonly` obtains or renews a certificate, but does not install it (it does not edit any of the server's configuration – this will be done manually in the next step).
* `manual` will make the process of obtaining the certificate interactive.
* `preferred-challenges=dns` this is a challenge that needs to be successfully completed in order to get certificates. Let's Encrypt will not allow HTTP-01 challenges for wildcard certificates. Therefore, DNS is set for the DNS-01 challenge ([Challenge types](https://letsencrypt.org/docs/challenge-types/)).
* `email` which will be used to send important notifications.
* `server` the address `certbot` will connect to.
* `agree-tos` agree to the server's Subscriber Agreement.

DNS-01 challenge asks to prove the control of the DNS for the specified domain. This is done by placing a TXT record with a defined value under the domain name. Let's Encrypt will then verify the key and value (TXT record) by querying the DNS system.

Make sure the certificate directory has the correct permissions set.

>For historical reasons, the containing directories are created with permissions of 0700 meaning that certificates are accessible only to servers that run as the root user. If you will never downgrade to an older version of Certbot, then you can safely fix this using chmod 0755 /etc/letsencrypt/{live,archive} ([Where are my certificates](https://certbot.eff.org/docs/using.html#where-are-my-certificates)).

```bash
chmod -R 755 /etc/letsencrypt/live
```

Why are digital certificates needed in the first place? The Solid specifications say that: “A data pod SHOULD use TLS connections through the https URI scheme in order to secure the communication between clients and servers.” (Section 2.1.2, W3C Solid Community Group, 2020).
Therefore, the NSS makes it mandatory to provide the location of a valid certificate when started.

#### Reverse Proxy

A reverse proxy allows a server to run multiple services on the same port. A reverse proxy receives the initial request on the host and port and then forwards it to the configured local service on the machine.
Solid has WebID-TLS implemented as one of its authentication mechanisms. A reverse proxy – when not configured correctly – does not permit the usage of this, as the client when performing the handshake with the server also [sends its certificate](https://blog.cloudflare.com/introducing-tls-client-auth/#handshakeswithtlsclientauth), which means with the usage of a reverse proxy that performs the handshake, the certificate is not sent to the Solid server, denying the possibility of authenticating properly.
A solution is the correct configuration of the reverse proxy
[This document](https://github.com/solid/node-solid-server/wiki/Running-Solid-behind-a-reverse-proxy) introduces this issue and a few solutions to it.
Therefore, the same Nginx configuration with necessary steps to set up can be found [here](https://solidproject.org/for-developers/pod-server/nginx):

1. Open the default configuration after installing Nginx

```bash
# Installing Nginx
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

An additional interesting part of the configuration is that it sets the `Strict-Transport-Security` header. This header instructs the user's browser to use HTTP Strict Transport Security (HSTS) – meaning that it should use HTTPS for every request. This is beneficial as requests that are addressed to http://janschill.de, or just janschill.de will usually connect on HTTP to the server and then get redirected. This leaves an open window for a man-in-the-middle attack. HSTS solves this by instructing the browser upon first visit to always use HTTPS when connecting to janschill.de. HSTS is not perfect, as it still needs one initial request to even be able to cache the `Strict-Transport-Security` header ([Source](https://www.nginx.com/blog/http-strict-transport-security-hsts-and-nginx/)).


3. Restart the Nginx server

```bash
systemctl restart nginx
```

#### Node Solid Server

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

It is important that the configuration directories exist and have correct user permissions.

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

#### Difficulties

TODO: Go through notes and find more lessons learned

##### Setting Up With Docker

In the beginning, the thought of using Docker seemed tempting. Installing all dependencies in isolated environments gives the benefit of having all configurations as code. A Dockerfile holds all commands that are needed to set up an Nginx reverse proxy for example.
Because this setup needs multiple running services (Nginx reverse proxy, certification issuing, the Solid server) that all need to communicate to each other, the Docker configuration can get easily out of control and not offer a one-click solution anymore. Docker Compose tackles this problem by offering a configuration file to easily define how these different services/container should be connected.
To not reinvent the wheel and spend too much time on configuring for example an Nginx reverse proxy, well-established Docker images can be used.
Existing solutions exist and can be used to set up an NSS. Unfortunately, problems occurred when the Docker images were tried, for example the wildcard certificates were not distributed correctly. Due to time constraints and the additional overhead of dealing with these extra issues, Docker was abandoned.

## Solid Clients

TODO: Write Solid Clients

## Conclusion

The NSS is a decent foundation to get started in the realm of Solid. Setting up the server and using it is straightforward. It has been running with occasional usage on the domain for two months without problems.
No major bugs were discovered in the process so far, but it must be said the server never got pressured into a heavy load.

The CSS has not been used for any personal experiments so far. It promises a lot for the future of Solid in open-source. The architecture and quality of code seem to be well-thought-out. Defining a clear goal in the beginning and making considerations in the architecture of the implementations, having access to people that developed on the NSS to acquire learned lessons, working with a *most complete* specification and test suite to allow constant testing against the specification make this an opportune candidate for future work.

The ESS is an interesting product, as it is the first professionally and closed-source server currently available for production usage.
Inrupt offers their customers

The Solid ecosystem is vibrant and in full motion. Server implementations are being worked on, Solid applications are starting to appear here and there and everything seems to move into a direction where everything will come together.
Even though it might seem no perfect solution exists, there is still potential as the idea of Solid allows interoperability as one of the key concepts. This means if a Solid application in the form of a proof of concept is developed while using the CSS as a data pod, everything from the data pod on CSS could be easily migrated to another server and the applications would still work.

This is why the specifications are so important and only the future will tell how well-defined and robust they are in the current stage, but a foundation can definitely be laid.

TODO: More here
