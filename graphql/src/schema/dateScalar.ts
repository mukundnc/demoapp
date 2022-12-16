// import { GraphQLScalarType, Kind } from 'graphql';

// const dateScalar = new GraphQLScalarType({
//   name: 'Date',
//   description: 'Date custom scalar type',
//   serialize(value: string) {
//     return new Date(value); // Convert outgoing Date to integer for JSON
//   },
//   parseValue(value: Date) {
//     return `${value.getFullYear()}-${value.getMonth()+1}-${value.getDate()}`; // Convert incoming integer to Date
//   },
//   parseLiteral(ast): Date {
//     if (ast.kind === Kind.STRING) {
//       // Convert hard-coded AST string to integer and then to Date
//       return new Date(ast.value);
//     }
//     // Invalid hard-coded value (not an integer)
//     return null;
//   },
// });

// export default dateScalar;