
const jwt = require('express-jwt')
const jwkRsa = require('jwks-rsa');
const request = require('request');
const config = require('../config');

// Authentication middleware
// This middleware will check access token in authorization headers
// of a request
// It will verify access token against Auth0 JSON web key set
exports.checkJwt = jwt({
  secret: jwkRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: 'https://dev-9ij55ws7.jp.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://dev-9ij55ws7.jp.auth0.com/api/v2/',
  issuer: 'https://dev-9ij55ws7.jp.auth0.com/',
  algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[config.AUTH0_NAMESPACE + '/roles'].includes(role)) {
    next();
  } else {
    return res.status(401).send('You are not authorized to access the resource!');
  }
}

// const getAcceessToken = () => {
//   const options = {
//     methods: 'POST',
//     url: config.AUTH0_TOKEN_URL,
//     headers: { 'content-type': 'application/json' },
//     form: {
//       grant_type: 'client_credentials',
//       client_id: config.AUTH0_CLIENT_ID,
//       client_secret: config.AUTH0_CLIENT_SECRET,
//       audience: config.AUTH0_AUDIENCE
//     }
//   }

//   request(options, (error, res, body) => {
//     if (error) { console.error(error) }

//     return JSON.parse(body);
//   })
// }