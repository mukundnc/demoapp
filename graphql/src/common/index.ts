class Utils{
    authorization: string;
    embedded: string;
    links: string;
    contentTypeUrlList: string;
    contentTypeJson: string;
    persons: string;
    personRoles: string;
    appointments: string;
    self: string;
    href: string;

    constructor(){
        this.authorization = 'Authorization';
        this.embedded = '_embedded';
        this.links = '_links';
        this.contentTypeUrlList = 'text/uri-list';
        this.contentTypeJson = 'application/json';
        this.persons = 'persons';
        this.personRoles = 'personRoles';
        this.appointments = 'appointments';
        this.self = 'self';
        this.href = 'href';
    }

    validate(response: any, obj: string): Boolean{
        if(!response)
            return false;
        if(!response[this.embedded])
            return false;
        if(!response[this.embedded][obj])
            return false;
        return true;
    }

    validateArray(response: any, obj: string): Boolean{
        if(!response)
            return false;
        if(!response[this.embedded])
            return false;
        if(!response[this.embedded][obj])
            return false;
        if(!response[this.embedded][obj].length)
            return false;
        return true;
    }

    getId(response: any, apiUrl: string): Number{
        const id = parseInt(response[this.links][this.self][this.href].replace(`${apiUrl}/`, ''), 10);
        return id;
    }
}

export default new Utils();