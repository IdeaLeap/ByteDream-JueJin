'use strict';

/**
 * nav service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nav.nav');
