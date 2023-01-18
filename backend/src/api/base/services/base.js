'use strict';

/**
 * base service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::base.base');
