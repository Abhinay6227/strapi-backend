'use strict';

const { createStrapi } = require('@strapi/strapi');

createStrapi().start().catch((err) => {
  console.error('❌ Strapi failed to start:', err);
});
