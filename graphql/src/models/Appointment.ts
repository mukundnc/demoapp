import AppointmentStatus from './AppointmentStatus';
import Person from './Person';

interface Appointment {
    id: Number;
    bookTime: Date;
    patient: Person;
    doctor: Person;
    status: AppointmentStatus;
    lastUpdatedTime: Date;
}

export default Appointment;