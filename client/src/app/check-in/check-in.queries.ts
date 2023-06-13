import { gql } from 'apollo-angular';

export const BOOKING_QUERY = gql`
  query Booking($code: String!, $name: String!) {
    booking(code: $code, name: $name) {
      code
    }
  }
`;
