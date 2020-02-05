 const axios = require('axios')

 const client = axios.create({
     baseURL: 'https://api.github.com/',
     responseType: 'json',
     headers: {
         'Authorization': 'token d71d02a28ba312d47b72997b42531468995e43f6',
         'Accept': 'application/vnd.github.inertia-preview+json',
         'Accept': 'application/vnd.github.nebula-preview+json',
         'Accept': 'application/vnd.github.baptiste-preview+json',
         'Accept': 'application/vnd.github.squirrel-girl-preview'
     }
 });

 client.post('orgs/Acme-3858/team/banda-lysego/discussions', {
         "title": "Co tam ?",
         "body": "Treść posta 60410410 3637412",

     })
     .then(function(response) {
         console.log(response);
     })
     .catch(function(error) {
         console.log(error);
     });