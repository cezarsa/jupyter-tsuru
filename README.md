# jupyter-tsuru

jupyter on tsuru backed by google drive

# Usage

```
$ tsuru app-create myjupyter python3
$ tsuru env-set GDRIVE_CLIENT_ID=<your google oauth client id> -a myjupyter
$ git clone https://github.com/cezarsa/jupyter-tsuru.git
$ cd jupyter-tsuru
$ tsuru app-deploy . -a myjupyter
```

A client id can be generated on https://console.developers.google.com > Credentials > Create credentials.
Also, make sure you have enabled Google Drive API in the Library area.
