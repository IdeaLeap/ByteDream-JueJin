'use strict';

/**
 * type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::type.type');
