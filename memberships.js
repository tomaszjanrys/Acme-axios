 const axios = require('axios')

 const client = axios.create({
     baseURL: 'https://api.github.com/',
     responseType: 'json',
     headers: {
         'Authorization': 'token 513286d12abad19e4405df850f441871182d73e3',
         'Accept': 'application/vnd.github.inertia-preview+json',
         'Accept': 'application/vnd.github.nebula-preview+json',
         'Accept': 'application/vnd.github.baptiste-preview+json'
     }
 });

 client.put('/organizations/60410410/team/3638057/memberships/bartlomiejdanek', {
         "role": "member"
     })
     .then(function(response) {
         console.log(response);
     })
     .catch(function(error) {
         console.log(error);
     });