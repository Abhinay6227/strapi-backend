'use strict';

const strapi = require('@strapi/strapi');

strapi()
  .start()
  .catch((err) => {
    console.error('❌ Strapi failed to start:', err);
    process.exit(1); // Exit the process with an error code
  });