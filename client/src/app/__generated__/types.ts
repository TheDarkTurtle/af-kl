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

export type Booking = {
  __typename?: 'Booking';
  code?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  booking?: Maybe<Booking>;
};


export type QueryBookingArgs = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type BookingQueryVariables = Exact<{
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type BookingQuery = { __typename?: 'Query', booking?: { __typename?: 'Booking', code?: string | null } | null };

export const BookingDocument = gql`
    query Booking($code: String!, $name: String!) {
  booking(code: $code, name: $name) {
    code
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookingGQL extends Apollo.Query<BookingQuery, BookingQueryVariables> {
    override document = BookingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }