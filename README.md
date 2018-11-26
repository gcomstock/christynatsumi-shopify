# Christy Natsumi Jewelry


## Download Prepros and add project folder. All settings are already set in `prepros-6.config`


## Install Shopify Theme Kit

Make a new config.yml to give auth for theme changes. Theme IDs for dev and prod are in their respective Shopify "edit code" URLs. Ex:

https://christy-natsumi-jewelry.myshopify.com/admin/themes/183663815

Get the api password from here:

https://christy-natsumi-jewelry.myshopify.com/admin/apps/private/


_Example config.yml file:_


```
prod:
  password: asdasdasdasdasdasdasdasdasdasdas
  theme_id: "183663815"
  store: christy-natsumi-jewelry.myshopify.com
  timeout: 120s
  ignore_files:
    - styles/*

prod-quick:
  password: asdasdasdasdasdasdasdasdasdasdas
  theme_id: "183663815"
  store: christy-natsumi-jewelry.myshopify.com
  timeout: 120s
  ignore_files:
    - lib/*
    - assets/*
    - styles/*


dev:
  password: asdasdasdasdasdasdasdasdasdasdas
  theme_id: "12360941616"
  store: christy-natsumi-jewelry.myshopify.com
  timeout: 120s
  ignore_files:
    - styles/*

dev-quick:
  password: asdasdasdasdasdasdasdasdasdasdas
  theme_id: "12360941616"
  store: christy-natsumi-jewelry.myshopify.com
  timeout: 120s
  ignore_files:
    - lib/*
    - assets/*
    - styles/*
```

have changes to config.yml be untracked so it doesn't upload to github but persists if branch is switched:

`$ git update-index --assume-unchanged <file>`




## Terminal Commands:

```
$ theme deploy --env=dev-quick
$ theme deploy --env=dev —-nodelete
$ theme watch --env=dev
```
