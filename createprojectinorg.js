 const axios = require('axios')

 const client = axios.create({
     baseURL: 'https://api.github.com/',
     responseType: 'json',
     headers: {
         'Authorization': 'token 9d4f0432d156daa9baa5a2802d6729c1076e4d88',
         'Accept': 'application/vnd.github.inertia-preview+json',

     }
 });

 client.post('orgs/Acme-3858/projects', {
         "name": "repo ",
         "body": "Treść posta 60410410 3637412"

     })
     .then(function(response) {
         console.log(response);
     })
     .catch(function(error) {
         console.log(error);
     });