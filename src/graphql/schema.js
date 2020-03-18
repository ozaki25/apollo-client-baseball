import { gql } from '@apollo/client';

export const GET_TEAMS = gql`
  query Teams {
    teams {
      id
      name
      foundingDate
      homeStadium
      players {
        id
        no
        name
        position
      }
    }
  }
`;

export const ADD_TEAM = gql`
  mutation AddTeam(
    $name: String!
    $foundingDate: String
    $homeStadium: String
  ) {
    addTeam(
      name: $name
      foundingDate: $foundingDate
      homeStadium: $homeStadium
    ) {
      id
      name
    }
  }
`;
