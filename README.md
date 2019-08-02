# Binouze

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Récupérer la base de données

commande : __mysql --user=mon_user --password=mon_password binouze < binouze.sql__

## Recréer la connexion à mysql

Dans le dossier Backend, créer un fichier __"conf.js"__ avec le contenu :

```sql
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // adresse du serveur
    user: 'mon user', // le nom d'utilisateur
    password: 'mon mot de passe', // le mot de passe
    database: 'binouze', // le nom de la base de données
});
module.exports = connection;
```


## Lancer le projet

commande dans le dossier Backend : 
- __npm install__ puis __npm start__

commande à la racine du projet :
- __npm install__ puis __ng serve -o__
