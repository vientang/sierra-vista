import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';

/**
 * Creates a client side application
 * ApolloClient is state management, aka, database on the client
 * withApollo (HOC) to enable ApolloClient when rendering on the server
 * @param {*} param0 
 */
function createClient({ headers }) {
    return new ApolloClient({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        request: operation => {
            // pass cookies through
            operation.setContext({
                fetchOptions: {
                    credentials: 'include',
                },
                headers,
            });
        },
    });
}

export default withApollo(createClient);
