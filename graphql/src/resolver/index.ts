import dateScalar from '../schema/dateScalar';

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        persons: (_, __, { dataSources }) => dataSources.personsAPI.getPersons(),
        personRoles: (_, __, { dataSources }) => dataSources.personRolesAPI.getPersonRoles(),
    },
    Date: dateScalar,
  };

export default resolvers;