 const axios = require('axios')

 const client = axios.create({
     baseURL: 'https://api.github.com/',
     responseType: 'json',
     headers: {
         'Authorization': 'token 9d4f0432d156daa9baa5a2802d6729c1076e4d88',
         'Accept': 'application/vnd.github.inertia-preview+json',

     }
 });

 client.get('orgs/Acme-3858/teams', {


     })
     .then(function(response) {
         console.log(response);
     })
     .catch(function(error) {
         console.log(error);
     });