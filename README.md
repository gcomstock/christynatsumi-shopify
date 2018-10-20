# Christy Natsumi Jewelry


##Download Prepros and add project folder. All settings are already set in prepros-6.config


##Install Shopify Theme Kit

make a new config.yml to give auth for theme changes. Theme IDs for dev and prod are in their respective Shopify "edit code" URLs. Ex:

https://christy-natsumi-jewelry.myshopify.com/admin/themes/183663815

get the api password from here:

https://christy-natsumi-jewelry.myshopify.com/admin/apps/private/


Ex config.yml file:


prod:
  password: asdasdasdasdsadasdasdasdasd
  theme_id: "183663815"
  store: christy-natsumi-jewelry.myshopify.com
  timeout: 120s

dev:
  password: asdasdasdasdsadasdasdasdasd
  theme_id: "12360941616"
  store: christy-natsumi-jewelry.myshopify.com
  timeout: 120s


have changes to this file be untracked so it doesn't upload to github but persists if branch is switched:

git update-index --assume-unchanged <file>




Commands:
$ theme deploy --env=dev —-nodelete
$ theme watch --env=dev
