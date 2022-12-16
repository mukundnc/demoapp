class Config{
    personsApi: string;
    rolesApi: string;
    appointmentsApi: string;
    port: number;

    constructor() {
        this.personsApi = process.env.PERSONS_API;
        this.rolesApi = process.env.ROLES_API;
        this.appointmentsApi = process.env.APPOINTMENTS_API;      
        this.port = parseInt(process.env.PORT, 10);  
    }
}

export default new Config();