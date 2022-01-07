import {
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://graphql.datocms.com/',
    headers : {
        authorization: "Bearer 53d9c9c2a4f29a24b89046de3cddd7"
    }
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache
})

export default apolloClient