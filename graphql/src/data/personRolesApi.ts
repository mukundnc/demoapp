import { RESTDataSource, WillSendRequestOptions } from '@apollo/datasource-rest';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import ContextValue from './contextValue';

export default class PersonRolesAPI extends RESTDataSource {
    override baseURL = 'http://localhost:5000/api/v1/personRoles';
    private contextValue: ContextValue;

    constructor(options: { contextValue: ContextValue; cache: KeyValueCache }) {
        super(options); // this should send `cache` through
        this.contextValue = options.contextValue;
    }
    
    override willSendRequest(request: WillSendRequestOptions) {
        request.headers['authorization'] = this.contextValue.token;
    }

    async getPersonRoles() {
      var result = await this.get('');
      const { personRoles } = result._embedded;
      return personRoles
    }
  
    async getPersonRole(id: Number) {
      const data = await this.get(`/${encodeURIComponent(id.toString())}`);
      return data;
    }
}