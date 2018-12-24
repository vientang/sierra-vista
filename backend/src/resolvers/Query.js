const Query = {
    user(parent, args, context, info) {
        global.users = global.users || [];
        // this is where the database calls go
        // regardless of what database is used
        return global.users;
    }
};

module.exports = Query;
