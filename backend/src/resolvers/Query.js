/**
 * prisma-binding provides database queries
 * It replaces this syntax if no custom resolver logic is required
 * async users(parent, args, context, info) {
 *       const users = await context.db.query.users();
 *       return users;
 *   }
 */
const { forwardTo } = require('prisma-binding');

const Query = {
    users: forwardTo('db'),
};

module.exports = Query;
