import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const endpoint = 'https://www.finanzasdigital.com/graphql';

const cache = new InMemoryCache();
const link = new HttpLink({
 uri: endpoint
 //uri: 'http://localhost:4002/graphql'
})

const client = new ApolloClient({
  cache,
  link
})

export default client; 