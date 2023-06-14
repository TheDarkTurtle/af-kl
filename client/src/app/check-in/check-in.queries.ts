import { gql } from 'apollo-angular';

const AIRPORT_FIELDS = gql`
  fragment AirportFields on Airport {
    code
    name
    city
    country
  }
`;

export const BOOKING_QUERY = gql`
  ${AIRPORT_FIELDS}
  query Booking($code: String!, $name: String!) {
    booking(code: $code, name: $name) {
      code
      passengers {
        firstName
        lastName
        title
      }
      contactDetails {
        type
        value
      }
      itinerary {
        type
        connections {
          duration
          origin {
            ...AirportFields
          }
          destination {
            ...AirportFields
          }
          segments {
            origin {
              ...AirportFields
            }
            destination {
              ...AirportFields
            }
            flight {
              number
              carrier
              status
              numberOfStops
              cabin
              equipment
              checkInStart
              checkInEnd
              scheduledDeparture
              scheduledArrival
              arrivalTerminal
            }
          }
        }
      }
    }
  }
`;
