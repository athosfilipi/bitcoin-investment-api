import swaggerJSDoc from 'swagger-jsdoc';

const apiPaths = ['../../routes/*.ts', '../../controllers/*.ts'];

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Investimento em Bitcoins',
      version: '1.0.0',
      description: 'Documentação da API de Investimento em Bitcoins',
    },
  },
  apis: apiPaths,
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
