'use strict';

/**
 * base controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::base.base');
