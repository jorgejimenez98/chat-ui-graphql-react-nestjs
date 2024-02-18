import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_API_GRAPHQL_URL,
  connectToDevTools: process.env.NODE_ENV !== 'production'
})

export default apolloClient
