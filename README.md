Projet d'exemple présentant le fonctionnement des Errors Boundaries. 

----------------------

Pour installer le projet après l'avoir cloner localement : 

    npm install

Pour lancer l'application :

    npm start

Pour provoquer une erreur dans les composants Header, Tableau ou Liens, il suffit de décommenter les lignes suivants dans les composants : 

    /* let variableError = null;
      if(variableError.length > 0) {
        // quelque chose qui provoque une erreur
      } */