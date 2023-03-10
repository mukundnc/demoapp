import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import cors from 'cors';

import typeDefs from './schema';
import resolvers from './resolver';
import ContextValue from './dataSources';
import config from './config';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => new ContextValue({ req, server }),
    listen: { port: config.port },
  });
  
  console.log(`🚀  Server ready at: ${url}`);