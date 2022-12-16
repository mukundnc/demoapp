import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import ContextValue from '.';
import config from '../config';
import baseAPI from './baseApi';

class AppointmentsAPI extends baseAPI {
    override baseURL = config.appointmentsApi;

    constructor(options: { contextValue: ContextValue; cache: KeyValueCache }) {
        super(options);
    }
  
    async getAppointments() {
        const result = await this.get('');
        return result
    }
  
    async getAppointment(id: Number) {
        const result = await this.get(`/${id}`);
        return result;
    }

    async getAppointmentByPatientId(id: Number) {
        const result = await this.get(`/search/findByPatientId?patientId=${id}`);
        return result;
    }

    async getAppointmentByDoctorId(id: Number) {
        const result = await this.get(`/search/findByDoctorId?doctorId=${id}`);
        return result;
    }
}
  
export default AppointmentsAPI;