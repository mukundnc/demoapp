import { RequestWithBody } from '@apollo/datasource-rest/dist/RESTDataSource';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import ContextValue from '.';
import config from '../config';
import Person from '../models/Person';
import baseAPI from './baseApi';

class PersonsAPI extends baseAPI {
    override baseURL = config.personsApi;

    constructor(options: { contextValue: ContextValue; cache: KeyValueCache }) {
        super(options);
    }
  
    async getPersons() {
        const result = await this.get('');
        return result;
    }
  
    async getPerson(id: Number) {
        const result = await this.get(`/${id}`);
        return result;
    }

    async getPersonByEmail(email: string) {
        const result = await this.get(`/search/findByEmail?email=${encodeURIComponent(email)}`);
        return result;
    }

    async addPerson(person: Person): Promise<Person> {
        const request: RequestWithBody = {
            body: person
        }  
        const result = await this.post(``, request);
        return result;
    }
}
  
export default PersonsAPI;