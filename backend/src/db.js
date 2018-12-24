/**
 * This file connects to the remote prisma database and gives us
 * the ability to query it with JS. Essentially, it creates 
 * bindings to the prisma database to perform queries and mutations.
 * 
 * Use require instead of import. Node supports require now. There 
 * have been talks to support import but at this time, it's not supported.
 * Optionally, using babel can add support for imports but it's not 
 * production ready.
 * 
 * process.env is a global in Node that points to the .env file
 */
const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false // prints console.logs for queries and mutations
});

module.exports = db;