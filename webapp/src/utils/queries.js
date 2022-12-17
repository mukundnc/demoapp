import { gql } from '@apollo/client';

const GET_USER = gql`
    query Query($email: String) {
        getUser(email: $email) {
            dateOfBirth
            email
            firstName
            id
            lastName
            phoneNumber
            roles {
                id
                role
            }
        }
    }
`;

export { GET_USER, }