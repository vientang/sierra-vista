const Mutations = {
    createUser(parent, args, context, info) {
        global.users = global.users || [];
        const newUser = { first: args.first };
        global.users.push(newUser);
        console.log('args', newUser);
        return newUser;
    }
};

module.exports = Mutations;
