var express = require('express');
var router = express.Router();
const axios = require('axios');
/* PAYPAL */


router.get('/A21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQ', function(req, res, next) {
  const qs = require('qs');
let data = qs.stringify({
 'grant_type': 'client_credentials' 
});
let config = {
  method: 'post',
  url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
  headers: { 
    'Authorization': 'Basic QWVrVDRtQlNkbE10X0tzQlhjVks5WmVFbUFvcjhWQzVVYmpDUVZOZXFPbXNlY3BjZHRfRFZQdlNzdFZfcG9wOE51Uk9CcUZIdTNlOGR3dEg6RUpFNUJ4WXh3V29wU1dJRGhEV0syaHFoRWk1SjNZYkdLUjhVVk1jV0JVdWltTHZsc3ZqYXdLV3Y5bXg3U25hTjN5Tk01VmlxeGI3VjZTWUU=', 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config).then((response) => {
  res.json(response.data);
})
.catch((error) => {
  res.json(error);
});

})



router.get('/', function(req, res, next) {
  axios.get('http://localhost:3000/A21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQA21AAJC7XoYrd6me784prVI-4REyO_SDN_KbCeFyjM3WKS4hFEteMKVQFXLSNXH7r7VfE96qJ7GZWkjthFsE0SbprFjqvelYQ').then(response=> {
  return response.data;
  }).then((element)=>{
    
    res.json(element)
  })




});

module.exports = router;
