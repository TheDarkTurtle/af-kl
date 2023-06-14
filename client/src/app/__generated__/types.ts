import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Airport = {
  __typename?: 'Airport';
  city: Scalars['String']['output'];
  code: Scalars['String']['output'];
  country: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Booking = {
  __typename?: 'Booking';
  code: Scalars['String']['output'];
  contactDetails?: Maybe<Array<ContactDetail>>;
  itinerary: Itinerary;
  passengers?: Maybe<Array<Passenger>>;
};

export type Connection = {
  __typename?: 'Connection';
  destination: Airport;
  duration: Scalars['String']['output'];
  origin: Airport;
  segments: Array<Segment>;
};

export type ContactDetail = {
  __typename?: 'ContactDetail';
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Flight = {
  __typename?: 'Flight';
  arrivalTerminal: Scalars['String']['output'];
  cabin: Scalars['String']['output'];
  carrier: Scalars['String']['output'];
  checkInEnd: Scalars['String']['output'];
  checkInStart: Scalars['String']['output'];
  equipment: Scalars['String']['output'];
  number: Scalars['String']['output'];
  numberOfStops: Scalars['Int']['output'];
  scheduledArrival: Scalars['String']['output'];
  scheduledDeparture: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Itinerary = {
  __typename?: 'Itinerary';
  connections: Array<Connection>;
  type: Scalars['String']['output'];
};

export type Passenger = {
  __typename?: 'Passenger';
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  booking: Booking;
};


export type QueryBookingArgs = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Segment = {
  __typename?: 'Segment';
  destination: Airport;
  flight: Flight;
  origin: Airport;
};

export type AirportFieldsFragment = { __typename?: 'Airport', code: string, name: string, city: string, country: string };

export type BookingQueryVariables = Exact<{
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type BookingQuery = { __typename?: 'Query', booking: { __typename?: 'Booking', code: string, passengers?: Array<{ __typename?: 'Passenger', firstName: string, lastName: string, title: string }> | null, contactDetails?: Array<{ __typename?: 'ContactDetail', type: string, value: string }> | null, itinerary: { __typename?: 'Itinerary', type: string, connections: Array<{ __typename?: 'Connection', duration: string, origin: { __typename?: 'Airport', code: string, name: string, city: string, country: string }, destination: { __typename?: 'Airport', code: string, name: string, city: string, country: string }, segments: Array<{ __typename?: 'Segment', origin: { __typename?: 'Airport', code: string, name: string, city: string, country: string }, destination: { __typename?: 'Airport', code: string, name: string, city: string, country: string }, flight: { __typename?: 'Flight', number: string, carrier: string, status: string, numberOfStops: number, cabin: string, equipment: string, checkInStart: string, checkInEnd: string, scheduledDeparture: string, scheduledArrival: string, arrivalTerminal: string } }> }> } } };

export const AirportFieldsFragmentDoc = gql`
    fragment AirportFields on Airport {
  code
  name
  city
  country
}
    `;
export const BookingDocument = gql`
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
    ${AirportFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BookingGQL extends Apollo.Query<BookingQuery, BookingQueryVariables> {
    override document = BookingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }