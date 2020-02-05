 const axios = require('axios')

 const client = axios.create({
     baseURL: 'https://api.github.com/',
     responseType: 'json',
     headers: {
         'Authorization': 'token 5a13b062629012a75f945300c9b5c8b3a5a76a7c',
         'Accept': 'application/vnd.github.inertia-preview+json',
         'Accept': 'application/vnd.github.nebula-preview+json',
         'Accept': 'application/vnd.github.baptiste-preview+json'
     }
 });

 client.delete('orgs/Acme-3858/teams/kolumna', {
         "name": "Banda łysego",
         "descryption": "Zadanie domowe",
         "privacy": "closed"

     })
     .then(function(response) {
         console.log(response);
     })
     .catch(function(error) {
         console.log(error);
     });