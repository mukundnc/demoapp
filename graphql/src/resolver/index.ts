// import dateScalar from '../schema/dateScalar';
import appointmentResolver from './appointmentResolver';
import personResolver from './personResolver';

const resolvers = {
    Query: {
      getUser: (_, { email }, { dataSources }) => personResolver.getPersonByEmail(dataSources, email),
      getAppointments: (_, { id, role }, { dataSources }) => appointmentResolver.getAppointments(dataSources, id, role)
    },
    Mutation: {
      registerUser: (_, { content }, { dataSources }) => personResolver.registerPerson(dataSources, content),
    },
    // Date: dateScalar,
  };

export default resolvers;