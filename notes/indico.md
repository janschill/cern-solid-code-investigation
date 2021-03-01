# Indico

## Setting up Indico

* [Official development documentation](https://docs.getindico.io/en/stable/installation/development/)
* [Some older notes when I set up Indico](report/report/setting-up-indico.md)

## How to run Indico

Indico needs two shell sessions. One for the assets to build while developing and one to run the application.

```bash
./bin/maintenance/build-assets.py indico --dev --watch
```

```bash
indico run -h 127.0.0.1 -q --enable-evalex
```

Make sure that the Python environment in which all dependencies are installed is running. I am personally using [pyenv](https://github.com/pyenv/pyenv). With pyenv a specific Python version is activated by defining a `.python-version` file in the project root and activating it automatically when entering the directory.

```bash
# ~/.bashrc
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

