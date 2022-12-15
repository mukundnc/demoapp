const typeDefs = `#graphql
  scalar Date

  type Person {
    id: Int
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    dateOfBirth: Date
    roles: [PersonRole]
  }

  type PersonRole {
    id: Int
    role: Roles
    person: Person
  }

  enum Roles{
    Patient,
    Doctor,
    Admin
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    persons: [Person],
    personRoles: [PersonRole]
  }
`;

export default typeDefs;