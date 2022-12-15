import { RESTDataSource, WillSendRequestOptions } from '@apollo/datasource-rest';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import ContextValue from './contextValue';

export default class PersonsAPI extends RESTDataSource {
    override baseURL = 'http://localhost:5000/api/v1/persons';
    private contextValue: ContextValue;

    constructor(options: { contextValue: ContextValue; cache: KeyValueCache }) {
        super(options); // this should send `cache` through
        this.contextValue = options.contextValue;
    }
    
    override willSendRequest(request: WillSendRequestOptions) {
        request.headers['authorization'] = this.contextValue.token;
    }
  
    async getPersons() {
        var result = await this.get('');
        const { persons } = result._embedded;
        return persons
    }
  
    async getPerson(id: Number) {
        const data = await this.get(`/${encodeURIComponent(id.toString())}`);
        return data;
    }
}
  