# Indico Staging

## Useful Links

- [CERN OpenStack Private Cloud Guide](https://clouddocs.web.cern.ch/tutorial/openstack_command_line.html)
- [openstack at CERN](https://openstack.cern.ch/project/images)
- [Application Portal](https://application-portal.web.cern.ch)

## Using a VPN

```bash
sudo sshuttle --dns -v --disable-ipv6 --python=python --remote jschill@lxtunnel.cern.ch    128.141.0.0/16 128.142.0.0/16 137.138.0.0/16 185.249.56.0/22 188.184.0.0/15 192.65.196.0/23 192.91.242.0/24 194.12.128.0/18    --daemon --pidfile /tmp/sshuttle.pid
```

## Openstack VM

1. Install `openstackclient`

```bash
brew install openstackclient
```

2. Create *personal project* under *cloud infrastructure* at https://resources.web.cern.ch/resources/Manage/ListServices.aspx
3. Add SSH keys to openstack project at https://openstack.cern.ch/project/key_pairs
4. Configure shell profile, following this [guide](https://clouddocs.web.cern.ch/tutorial/create_your_openstack_profile.html#configure-your-shell-profile)
5. Make sure to source the [configuration file](https://openstack.cern.ch/project/api_access/openrc/) from there

```bash
source .openrc
```

6. Once in a sourced shell **create VM**

```bash
# Make sure to change SSHKEY-NAME to the name you added in step 3
openstack server create --key-name SSHKEY-NAME --image 'CC7 - x86_64 [2021-03-01]' --flavor m2.large indico-solid-test
```

7. Check if server was created successfully

```bash
openstack server list
```

8. Follow Indico [Installation guide](https://docs.getindico.io/en/stable/installation/production/centos/nginx/)

## Install Indico

* *[Installation guide](https://docs.getindico.io/en/stable/installation/production/centos/nginx/)*
* *[Adding SSH key pair to openstack using CLI](https://computingforgeeks.com/adding-keypairs-to-openstack-using-cli/)*
* nginx
* centos
* postgresql-12
* python 3.9

1. SSH to new VM, use username from openstack and IP from server instance

```bash
/usr/bin/ssh jschill@188.185.91.184
```

2. Install packages (leave out Python and uwsgi)

```bash
sudo yum install -y epel-release
sudo yum install -y yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
sudo yum install -y postgresql12 postgresql12-server postgresql12-libs postgresql12-devel postgresql12-contrib
sudo yum install -y gcc redis nginx
sudo yum install -y libjpeg-turbo-devel libxslt-devel libxml2-devel libffi-devel pcre-devel libyaml-devel
/usr/pgsql-12/bin/postgresql12-setup initdb
systemctl start postgresql-12.service redis.service
```

3. Create database

```bash
su - postgres -c 'createuser indico'
su - postgres -c 'createdb -O indico indico'
su - postgres -c 'psql indico -c "CREATE EXTENSION unaccent; CREATE EXTENSION pg_trgm;"'
```

4. Configure nginx (mind the changed hostname)

```bash
cat > /etc/nginx/conf.d/indico.conf <<'EOF'
server {
  listen 80;
  listen [::]:80;
  server_name indico-solid-test.cern.ch;
  return 301 https://$server_name$request_uri;
}

server {
  listen       *:443 ssl http2;
  listen       [::]:443 ssl http2 default ipv6only=on;
  server_name  indico-solid-test.cern.ch;

  ssl on;

  ssl_certificate           /etc/ssl/indico/indico.crt;
  ssl_certificate_key       /etc/ssl/indico/indico.key;
  ssl_session_cache         shared:SSL:10m;
  ssl_session_timeout       5m;
  ssl_protocols             TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers               ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:ECDHE-ECDSA-DES-CBC3-SHA:ECDHE-RSA-DES-CBC3-SHA:EDH-RSA-DES-CBC3-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:DES-CBC3-SHA:!DSS;
  ssl_prefer_server_ciphers on;

  access_log            /opt/indico/log/nginx/access.log combined;
  error_log             /opt/indico/log/nginx/error.log;

  if ($host != $server_name) {
    rewrite ^/(.*) https://$server_name/$1 permanent;
  }

  location /.xsf/indico/ {
    internal;
    alias /opt/indico/;
  }

  location ~ ^/(images|fonts)(.*)/(.+?)(__v[0-9a-f]+)?\.([^.]+)$ {
    alias /opt/indico/web/static/$1$2/$3.$5;
    access_log off;
  }

  location ~ ^/(css|dist|images|fonts)/(.*)$ {
    alias /opt/indico/web/static/$1/$2;
    access_log off;
  }

  location /robots.txt {
    alias /opt/indico/web/static/robots.txt;
    access_log off;
  }

  location / {
    root /var/empty/nginx;
    include /etc/nginx/uwsgi_params;
    uwsgi_pass unix:/opt/indico/web/uwsgi.sock;
    uwsgi_param UWSGI_SCHEME $scheme;
    uwsgi_read_timeout 15m;
    uwsgi_buffers 32 32k;
    uwsgi_busy_buffers_size 128k;
    uwsgi_hide_header X-Sendfile;
    client_max_body_size 1G;
  }
}
EOF
```

5. A self-signed TLS certificate

```bash
mkdir /etc/ssl/indico
chown root:root /etc/ssl/indico/
chmod 700 /etc/ssl/indico
openssl req -x509 -nodes -newkey rsa:4096 -subj /CN=indico-solid-test.cern.ch -keyout /etc/ssl/indico/indico.key -out /etc/ssl/indico/indico.crt
```

6. Configure SELinux

```bash
cat > /tmp/indico.cil <<'EOF'
; define custom type that logrotate can access
(type indico_log_t)
(typeattributeset file_type (indico_log_t))
(typeattributeset logfile (indico_log_t))
(roletype object_r indico_log_t)

; allow logrotate to reload systemd services
(allow logrotate_t init_t (service (start)))
(allow logrotate_t policykit_t (dbus (send_msg)))
(allow policykit_t logrotate_t (dbus (send_msg)))

; make sure the uwsgi socket is writable by the webserver
(typetransition unconfined_service_t usr_t sock_file "uwsgi.sock" httpd_sys_rw_content_t)
(filecon "/opt/indico/web/uwsgi\.sock" socket (system_u object_r httpd_sys_rw_content_t ((s0)(s0))))

; set proper types for our log dirs
(filecon "/opt/indico/log(/.*)?" any (system_u object_r indico_log_t ((s0)(s0))))
(filecon "/opt/indico/log/nginx(/.*)?" any (system_u object_r httpd_log_t ((s0)(s0))))
EOF
semodule -i /tmp/indico.cil
```

7. Install Indico

```bash
cat > /etc/systemd/system/indico-celery.service <<'EOF'
[Unit]
Description=Indico Celery
After=network.target

[Service]
ExecStart=/opt/indico/.venv/bin/indico celery worker -B
Restart=always
SyslogIdentifier=indico-celery
User=indico
Group=nginx
UMask=0027
Type=simple
KillMode=mixed
TimeoutStopSec=300

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
```

8. Create Indico user

```bash
useradd -rm -g nginx -d /opt/indico -s /bin/bash indico
su - indico
```

9. Install pyenv

```bash
sudo yum install -y  gcc gcc-c++ make git patch openssl-devel zlib-devel readline-devel sqlite-devel bzip2-devel

git clone git://github.com/yyuu/pyenv.git ~/.pyenv

export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
```

10. Install and activate Python

```bash
pyenv install 3.9.2
pyenv global 3.9.2 # activate Python
```

11. Create and activate environment

```bash
python -m venv ~/.venv
source ~/.venv/bin/activate
export PATH="$PATH:/usr/pgsql-12/bin"
pip install -U pip setuptools
```

12. Install self-compiled Indico wheel

```bash
pip install indico-3.0.dev0+202104011725.9fe31a85f0-py3-none-any.whl
```

If Indico has not been compiled into a wheel yet, do so by running:

```bash
./bin/maintenance/build-wheel.py indico --add-version-suffix
# creates dist/indico*.whl
# Copy the wheel onto the openstack VM
scp dist/indico*.whl username@vm-ip-address:/afs/cern.ch/user/j/username
```

13. Install uwsgi

```bash
pip install uwsgi
```

14. Create system calls

```bash
touch /etc/systemd/system/indico-uwsgi.service
```

```
[Unit]
Description=Indico uWSGI
After=network.target

[Service]
ExecStart=/opt/indico/.venv/bin/uwsgi --ini /opt/indico/uwsgi.ini
ExecReload=/bin/kill -HUP $MAINPID
Restart=always
SyslogIdentifier=indico-uwsgi
User=indico
Group=nginx
UMask=0027
Type=notify
NotifyAccess=all
KillMode=mixed
TimeoutStopSec=300

[Install]
WantedBy=multi-user.target
```

```bash
touch /opt/indico/uwsgi.ini
```

```
[uwsgi]
uid = indico
gid = nginx
umask = 027

processes = 4
enable-threads = true
chmod-socket = 770
socket = /opt/indico/web/uwsgi.sock
stats = /opt/indico/web/uwsgi-stats.sock
protocol = uwsgi

master = true
auto-procname = true
procname-prefix-spaced = indico
disable-logging = true

plugin = python
single-interpreter = true

touch-reload = /opt/indico/web/indico.wsgi
wsgi-file = /opt/indico/web/indico.wsgi
virtualenv = /opt/indico/.venv

vacuum = true
buffer-size = 20480
memory-report = true
max-requests = 2500
harakiri = 900
harakiri-verbose = true
reload-on-rss = 2048
evil-reload-on-rss = 8192
```

15. Start system calls

```bash
systemctl daemon-reload
systemctl start indico-uwsgi.service
```

16. Configure Indico

```bash
indico setup wizard

mkdir ~/log/nginx
chmod go-rwx ~/* ~/.[^.]*
chmod 710 ~/ ~/archive ~/cache ~/log ~/tmp
chmod 750 ~/web ~/.venv
chmod g+w ~/log/nginx
restorecon -R ~/
echo -e "\nSTATIC_FILE_METHOD = ('xaccelredirect', {'/opt/indico': '/.xsf/indico'})" >> ~/etc/indico.conf
```

17. Create database schema

```bash
indico db prepare
exit
```

18. Launch Indico

```bash
systemctl restart uwsgi.service nginx.service indico-celery.service
systemctl enable uwsgi.service nginx.service postgresql-12.service redis.service indico-celery.service
```

19. Open firewall

```bash
firewall-cmd --permanent --add-port 443/tcp --add-port 80/tcp
firewall-cmd --reload
```

## Install New Version of Solid Comment

1. Publish new version of solid-comment

```bash
npm run build
npm publish
```

2. Install new version in Indico

```bash
npm update solid-comment # or install newly
```

3. Compile new Indico wheel

```bash
./bin/maintenance/build-wheel.py indico --add-version-suffix
```

4. Copy to openstack VM

```bash
scp dist/indico*.whl username@vm-ip-address:/afs/cern.ch/user/j/username
```

5. Install new version on openstack VM

```bash
cp indico*.whl /opt/indico/
sudo su - indico
source ~/.venv/bin/activate
pip install indico*.whl
exit
```

6. Restart uwsgi and celery

```bash
sudo systemctl restart indico-celery.service indico-uwsgi.service
```

## Additional Information

* Let's Encrypt certificates don't work because of missing firewall openings.
* This VM is only reachable with SSH tunnel.
* [CERN-signed certificates](https://ca.cern.ch/ca/host/HostSelection.aspx?template=ee2host&instructions=openssl)
* `openstack server set --property 'landb-responsible=amonnich' indico-solid-test`
* **Generate key and CSR:** `openssl req -new -out indico-solid-test.csr -nodes -sha512 -newkey rsa:2048 -keyout indico-solid-test.key -subj '/CN=indico-solid-test.cern.ch' -reqexts SAN -config <(cat /etc/ssl/openssl.cnf <(printf "[SAN]\nsubjectAltName=DNS:indico-solid-test.cern.ch"))` **Remember to copy key into `/etc/ssl/indico/indico.key`**
* `cat host.crt host-chain.pem > /etc/ssl/indico/indico.crt`
* Activate SSO for application: [Indico Team - Internal Documentation](https://indico-ops.docs.cern.ch/welcome/#just-sso-no-ldapgroups)
* Create application for SSO/OpenID Connect [Application Portal](https://application-portal.web.cern.ch/)
