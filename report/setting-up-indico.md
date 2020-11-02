# Setting up Indico for development

## Enabling debug mode with Visual Studio Code.

[Documentation](https://code.visualstudio.com/docs/python/debugging)

I found the *Attach using Process Id` the easiest.

1. Run the Indico development server
2. Open VS Code make sure the Python project is the root directory
3. Show Run and Debug
4. Select: Python: Attach using Process Id
5. Find the running Indico development server

Automatically generated configuration file.

```javascript
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Attach using Process Id",
      "type": "python",
      "request": "attach",
      "processId": "${command:pickProcess}"
    }
  ]
}
```

## Issues

Follow instructions from the [installation guide (development)](https://docs.getindico.io/en/stable/installation/development/).

When encountering C compilation errors while installing Python packages, see these resources:

* https://github.com/pyenv/pyenv/issues/1643#issuecomment-687643468
* https://github.com/pyenv/pyenv/issues/1643#issuecomment-695350501
* https://github.com/python-pillow/Pillow/issues/4242

```bash
brew install zlib
export LDFLAGS="-L/usr/local/opt/zlib/lib"
export CPPFLAGS="-I/usr/local/opt/zlib/include"
export LDFLAGS="-L/usr/local/opt/openssl/lib"
pip2.7 install Pillow==6.2.2
```

Indico command not found:

```bash
pip uninstall -y indico
pip install indico
```

Xcode development tools

https://developer.apple.com/download/more/

## Investigations

```
Conference
Registration form
Open registration for conference
Indico account not needed for registration

POST /event/1/registrations/1/
GET /event/1/registrations/1/?token=1389da6e-4d03-4213-b85f-0d819b56ac23
```
