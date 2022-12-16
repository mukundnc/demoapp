import common from "../common";
import config from "../config";
import Appointment from "../models/Appointment";
import DataSources from "../models/DataSources";
import Person from "../models/Person";
import PersonContent from "../models/PersonContent";
import PersonRole from "../models/PersonRole";
import Roles from "../models/Roles";

class PersonResolver {
    async getPersonByEmail(dataSources: DataSources, email: string): Promise<Person> {
        let person: Person;

        let perResp = await dataSources.personsAPI.getPersonByEmail(email);        
        person = common.validateArray(perResp, common.persons) ? this.getPerson(perResp) : null;
        if(!person)
            return person;
        let rolesResp = await dataSources.personRolesAPI.getRolesByPersonId(person.id);
        person.roles = common.validateArray(rolesResp, common.personRoles) ? this.getRoles(rolesResp) : null;
        let pAppResp = await dataSources.appointmentsAPI.getAppointmentByPatientId(person.id);
        person.appointmentsP = common.validateArray(pAppResp, common.appointments) ? this.getAppointments(pAppResp) : null;
        let dAppResp = await dataSources.appointmentsAPI.getAppointmentByDoctorId(person.id);
        person.appointmentsD = common.validateArray(dAppResp, common.appointments) ? this.getAppointments(dAppResp) : null;

        return person;
    }

    async registerPerson(dataSources: DataSources, user: PersonContent): Promise<Person> {
        let person: Person = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            dateOfBirth: user.dob,
            phoneNumber: user.phoneNumber,
            id: undefined,
            roles: undefined,
            appointmentsP: undefined,
            appointmentsD: undefined
        };        
        let perResp = await dataSources.personsAPI.addPerson(person);
        person.id = common.getId(perResp, config.personsApi);
        console.log(11, user.roles);
        for(let index in user.roles){
            console.log(index, Roles[user.roles[index]]);
            let roleP: PersonRole = {
                role: Roles[user.roles[index]],
                id: undefined,
                person: undefined
            }
            let respRole = await dataSources.personRolesAPI.addPersonRole(roleP);
            roleP.id = common.getId(respRole, config.rolesApi);
            console.log(1, respRole);
            let mapRole = await dataSources.personRolesAPI.mapPersonRole(roleP.id, person.id);
            console.log(2, mapRole);
        }
        return person;
    }

    private getPerson(response: any): Person{
        const { firstName, lastName, email, dateOfBirth, phoneNumber } = response[common.embedded][common.persons][0];
        let person: Person = {
            id: common.getId(response[common.embedded][common.persons][0], config.personsApi),
            firstName,
            lastName,
            email,
            dateOfBirth,
            phoneNumber,
            roles: [],
            appointmentsP: [],
            appointmentsD: []
        };
        
        return person;
    }

    private getRoles(response: any): PersonRole[] {
        const { personRoles } = response[common.embedded];
        let roles: PersonRole[] = [];
        for(let index in personRoles){
            let personRole = personRoles[index];
            let role: PersonRole = {
                id: common.getId(personRole, config.rolesApi),
                role: personRole.role,
                person: undefined
            }
            roles.push(role);
        }
        return roles;
    }

    private getAppointments(response: any): Appointment[] {
        const { appointments } = response[common.embedded];
        let appts: Appointment[] = [];
        for(let index in appointments){
            let appointment = appointments[index];
            let appt: Appointment = {
                id: common.getId(appointment, config.appointmentsApi),
                bookTime: appointment.bookTime,
                status: appointment.status,
                lastUpdatedTime: appointment.lastUpdatedTime,
                patient: undefined,
                doctor: undefined
            }
            appts.push(appt);
        }
        return appts;
    }

}

export default new PersonResolver();