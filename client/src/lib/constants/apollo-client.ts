/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import router from '@/features/routes'

import { excludedRoutes } from './excluded-routes'
import { GRAPHQL_URL } from './urls'


const logoutLink = onError((error) => {
  if (
    error.graphQLErrors?.length &&
    (error.graphQLErrors[0].extensions.originalError as any).statusCode === 401
  ) {
    if (!excludedRoutes.includes(window.location.pathname)) {
      router.navigate('/login')
      apolloClient.resetStore()
    }
  }
})

const httpLink = new HttpLink({
  uri: GRAPHQL_URL
})

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: logoutLink.concat(httpLink),
  connectToDevTools: !import.meta.env.PROD
})

export default apolloClient
