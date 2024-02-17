import { ApolloClient, InMemoryCache } from '@apollo/client'

export default new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.API_GRAPHQL_URL
})
