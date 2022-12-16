const typeDefs = `#graphql
  #scalar Date

  type Person {
    id: Int
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    dateOfBirth: String
    roles: [PersonRole]
    appointmentsP: [Appointment]
    appointmentsD: [Appointment]
  }

  type PersonRole {
    id: Int
    role: Roles
    person: Person
  }

  type Appointment {
    id: Int
    bookTime: String
    patient: Person
    doctor: Person
    status: AppointmentStatus
    lastUpdatedTime: String
  }

  enum Roles {
    Patient,
    Doctor,
    Admin
  }

  enum AppointmentStatus {
    Pending,
    Accepted,
    Cancelled,
    Rejected,
    NoShow,
    Completed
  }

  input UserContent {
    email: String,
    firstName: String
    lastName: String
    dob: String
    roles: [Roles]
    phoneNumber: String
  }

  input AppointmentContent {
    patientId: Int,
    doctorId: Int,
    bookTime: String
  }

  type Query {    
    getUser(email: String): Person,
    getAppointments(id: Int, role: Roles): [Appointment],
  }

  type Mutation {
    registerUser(content: UserContent!): Person,
    bookAppointment(content: AppointmentContent): Appointment,
    updateAppointment(id: Int, status: AppointmentStatus): Appointment,
  }
`;

export default typeDefs;