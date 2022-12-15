import { ApolloServer, HeaderMap } from '@apollo/server';
import PersonsAPI from './personsApi';
import { IncomingMessage } from 'http';
import PersonRolesAPI from './personRolesApi';

export default class ContextValue {
    public token: string;
    public dataSources: {
      personsAPI: PersonsAPI,
      personRolesAPI: PersonRolesAPI;
    };
    
    getTokenFromRequest(req: IncomingMessage): string{
        return req.headers.authorization;
    }

    constructor({ req, server }: { req: IncomingMessage; server: ApolloServer<ContextValue> }) {
      this.token = this.getTokenFromRequest(req);
      const { cache } = server;
      this.dataSources = {
        personsAPI: new PersonsAPI({ cache, contextValue: this }),
        personRolesAPI: new PersonRolesAPI({ cache, contextValue: this }),
      };
    }
  }