import { ApolloServer, HeaderMap } from '@apollo/server';
import { IncomingMessage } from 'http';
import PersonsAPI from './personsApi';
import PersonRolesAPI from './personRolesApi';
import AppointmentsAPI from './appointmentsApi';
import DataSources from '../models/DataSources';

class ContextValue {
    public token: string;
    public cookie: any;
    public dataSources: DataSources;
    
    getTokenFromRequest(req: IncomingMessage): string{
        return req.headers.authorization;
    }

    getCookieFromRequest(req: IncomingMessage): any{
      return req.headers?.cookie;
  }

    constructor({ req, server }: { req: IncomingMessage; server: ApolloServer<ContextValue> }) {
      this.token = this.getTokenFromRequest(req);
      this.cookie = this.getCookieFromRequest(req);
      const { cache } = server;
      this.dataSources = {
        personsAPI: new PersonsAPI({ cache, contextValue: this }),
        personRolesAPI: new PersonRolesAPI({ cache, contextValue: this }),
        appointmentsAPI: new AppointmentsAPI({ cache, contextValue: this }),
      };
    }
  }

  export default ContextValue;