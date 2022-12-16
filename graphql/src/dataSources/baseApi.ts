import { RESTDataSource, WillSendRequestOptions } from '@apollo/datasource-rest';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import ContextValue from ".";
import common from '../common';

class baseAPI extends RESTDataSource {
    private contextValue: ContextValue;

    constructor(options: { contextValue: ContextValue; cache: KeyValueCache }) {
        super(options); // this should send `cache` through
        this.contextValue = options.contextValue;
    }
    
    override willSendRequest(request: WillSendRequestOptions) {
        request.headers[common.authorization] = this.contextValue.token;  
    }
}

export default baseAPI;