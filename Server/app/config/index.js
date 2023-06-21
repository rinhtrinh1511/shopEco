const config = {
  database: {
    connection: 'postgres://postgres:1234@localhost:5432/ecommerce',
  },
  api: {
    host: "localhost",
    port: 8080,
  },
  jwt: {
    secretKey: "secretKey123",
  },
  sendgrid: {
    secretKey: null,
    fromEmail: null,
  },
  webClient: {
    url: "http://localhost:3000",
  },
};

module.exports = config;
