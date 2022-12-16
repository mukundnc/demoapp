import Appointment from "./Appointment";
import PersonRole from "./PersonRole";

interface Person {
    id: Number;
    firstName: String;
    lastName: String;
    email: String;
    phoneNumber: String;
    dateOfBirth: Date;
    roles: PersonRole[];
    appointmentsP: Appointment[];
    appointmentsD: Appointment[];
}

export default Person;