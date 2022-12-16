import AppointmentsAPI from "../dataSources/appointmentsApi";
import PersonRolesAPI from "../dataSources/personRolesApi";
import PersonsAPI from "../dataSources/personsApi";

interface DataSources {
    personsAPI: PersonsAPI,
    personRolesAPI: PersonRolesAPI;
    appointmentsAPI: AppointmentsAPI;
}

export default DataSources;