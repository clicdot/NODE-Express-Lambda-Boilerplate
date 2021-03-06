const swaggerJsdoc = require('swagger-jsdoc');
const appRoot = require('app-root-path');

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test Express API with autogenerated swagger doc'
    },
    host: 'localhost:3200',
    basePath: ['/api/v1'],
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: [appRoot + '/src/api/v1/**/*.js']
};

// const options2 = {
//   swaggerDefinition: {
//     // Like the one described here: https://swagger.io/specification/#infoObject
//     info: {
//       title: 'Test API',
//       version: '1.0.0',
//       description: 'Test Express API with autogenerated swagger doc',
//     },
//     host: 'localhost:3200',
//     basePath: ['/api/v2'],
//     schemes: ['http'],
//     consumes: ['application/json'],
//     produces: ['application/json']
//   },
//   // List of files to be processes. You can also set globs './routes/*.js'
//   apis: [appRoot + '/src/api/v1/**/*.js']
// };

const specs1 = swaggerJsdoc(options);
// const specs2 = swaggerJsdoc(options2);

module.exports = {
  v1: specs1
};
