import data from '../data';

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => data,
        book: (_, { title }) => {
            return data.find(x => x.title === title);
        }
    },
  };

export default resolvers;