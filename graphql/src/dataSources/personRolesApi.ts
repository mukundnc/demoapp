import { RequestWithBody } from '@apollo/datasource-rest/dist/RESTDataSource';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import ContextValue from '.';
import common from '../common';
import config from '../config';
import PersonRole from '../models/PersonRole';
import baseAPI from './baseApi';

class PersonRolesAPI extends baseAPI {
    override baseURL = config.rolesApi;

    constructor(options: { contextValue: ContextValue; cache: KeyValueCache }) {
        super(options); 
    }

    async getPersonRoles() {
      const result = await this.get('');
      return result
    }
  
    async getPersonRole(id: Number) {
      const result = await this.get(`/${id}`);
      return result;
    }

    async getRolesByPersonId(id: Number) {
      const result = await this.get(`/search/findByPersonId?personId=${id}`);
      return result;
    }

    async addPersonRole(role: PersonRole) {
      console.log(role);
      const request: RequestWithBody = {
        body: role
      }  
      const result = await this.post(``, request);
      return result;
    }

    async mapPersonRole(roleId: Number, personId: Number) {
      const payload = {
        "_links": {
          "person": {
              "href": `${config.personsApi}/${personId}`,
              "rel": "person"
          }
        }
      }
      const request: RequestWithBody = {
        body: payload
      }  
      const result = await this.put(`/${roleId}/person`, request);
      return result;
    }
}

export default PersonRolesAPI;