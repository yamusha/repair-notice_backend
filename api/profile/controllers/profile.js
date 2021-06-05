'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {

  async createMe(ctx) {
    let entity;

    // get Authanticated user details
    const user = ctx.state.user
    if(!user) {
      return ctx.request(null, [{messages: [{ id: 'No Auth'}]}])
    }

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      data['user'] = user;
      entity = await strapi.services.profile.create(data, { files });
    } else {
      const data = ctx.request.body
      data['user'] = user;
      entity = await strapi.services.profile.create(data);
    }
    return sanitizeEntity(entity, { model: strapi.models.profile });
  },

  async findMe(ctx) {
    let entities;

    // get Authanticated user details
    const user = ctx.state.user
    if(!user) {
      return ctx.badRequest(null, [{messages: [{ id: 'No Auth'}]}])
    }

    entities = await strapi.query('profile').find({ user: user.id });

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.profile }));
  },
};
