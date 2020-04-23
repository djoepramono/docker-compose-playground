const axios = require('axios');

const apiURL = process.env.API_URL

axios.get(apiURL)
  .then(response => {
    console.log(response.data);    
  })
  .catch(error => {
    console.log(error);
  });