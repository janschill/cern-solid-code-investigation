# Indico Staging

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

2. Install redis and postgres-12

```bash
sudo yum install -y epel-release
sudo yum install -y yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
sudo yum install -y postgresql12 postgresql12-server postgresql12-libs postgresql12-devel postgresql12-contrib
sudo yum install -y gcc redis nginx
sudo yum install -y libjpeg-turbo-devel libxslt-devel libxml2-devel libffi-devel pcre-devel libyaml-devel
/usr/pgsql-12/bin/postgresql12-setup initdb
systemctl start postgresql-12.service redis.service
```

1. python und uwsgi zeugs beim installieren der debian (oder yum) packages weglassen
2. nachdem du den indico-user angelegt hast, und zu dem user gewechselt hast, pyenv installieren und mit pyenv install 3.9.2 python 3.9 installieren, dann pyenv global 3.9.2 um es zu aktivieren
3. die virtualenv legst du mit python -m venv ~/.venv an (statt virtualenv ... wie im guide)
4. indico installierst du natürlich von einem selbstgebauten wheel statt von pypi (./bin/maintenance/build-wheel.py indico --add-version-suffix auf deinem devsystem, und dann die dist/indico*.whl rüberkopieren)
5. danach pip install uwsgi; das compiled uwsgi fü die aktuelle python-umgebung
