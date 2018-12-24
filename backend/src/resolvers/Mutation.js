const Mutations = {
    /**
     * Create a user
     * @param {*} parent 
     * @param {*} args: arguments passed in from calling createUser in schema.graphql
     * @param {*} context: makes all types in prisma.graphql available
     * @param {*} info 
     */
    async createUser(parent, args, context, info) {
        // TODO: check if they are logged in
        
        // createUser returns a promise
        const user = await context.db.mutation.createUser({
            data: {
                ...args
            }
        }, info);

        return user;
    }
};

module.exports = Mutations;
