'use strict';

const { createStrapi } = require('@strapi/strapi');

createStrapi().start().catch((err) => {
  console.error('❌ Strapi failed to start:', JSON.stringify(err, null, 2));
});
console.log('ALL ENV VARS AT STARTUP:', process.env);