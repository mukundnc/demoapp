import Appointment from "../models/Appointment";
import DataSources from "../models/DataSources";
import Roles from "../models/Roles";

class AppointmentResolver {
    async getAppointments(dataSources: DataSources, id: Number, role: Roles): Promise<Appointment[]>{
        const appointments = await dataSources.appointmentsAPI.getAppointments();
        return appointments;
    }
}

export default new AppointmentResolver();