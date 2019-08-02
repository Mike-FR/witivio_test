# Binouze

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Récupérer la base de données

commande : mysql --user=mon_user --password=mon_password binouze < binouze.sql

## Recréer la connexion à mysql

Dans le dossier Backend, créer un fichier "conf.js" avec le contenu :

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // adresse du serveur
    user: 'mon user', // le nom d'utilisateur
    password: 'mon mot de passe', // le mot de passe
    database: 'binouze', // le nom de la base de données
});
module.exports = connection;


## Lancer le projet

commande dans le dossier Backend : 
- npm install puis npm start

commande à la racine du projet :
- npm install puis ng serve -o
