import { gql } from '@apollo/client';

export const GET_TEAMS = gql`
  query Teams {
    teams {
      id
      name
      foundingDate
      homeStadium
      players {
        no
        name
        position
      }
    }
  }
`;
