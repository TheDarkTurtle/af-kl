import { GraphQLResolveInfo } from 'graphql';
import { BookingDTO, PassengerDTO, ContactDetailDTO, ConnectionDTO, SegmentDTO } from '../rest/booking-types.js';
import { Context } from '../index.js';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Airport: ResolverTypeWrapper<Airport>;
  Booking: ResolverTypeWrapper<BookingDTO>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Connection: ResolverTypeWrapper<ConnectionDTO>;
  ContactDetail: ResolverTypeWrapper<ContactDetailDTO>;
  Flight: ResolverTypeWrapper<Flight>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Itinerary: ResolverTypeWrapper<Omit<Itinerary, 'connections'> & { connections: Array<ResolversTypes['Connection']> }>;
  Passenger: ResolverTypeWrapper<PassengerDTO>;
  Query: ResolverTypeWrapper<{}>;
  Segment: ResolverTypeWrapper<SegmentDTO>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Airport: Airport;
  Booking: BookingDTO;
  Boolean: Scalars['Boolean']['output'];
  Connection: ConnectionDTO;
  ContactDetail: ContactDetailDTO;
  Flight: Flight;
  Int: Scalars['Int']['output'];
  Itinerary: Omit<Itinerary, 'connections'> & { connections: Array<ResolversParentTypes['Connection']> };
  Passenger: PassengerDTO;
  Query: {};
  Segment: SegmentDTO;
  String: Scalars['String']['output'];
}>;

export type AirportResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Airport'] = ResolversParentTypes['Airport']> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactDetails?: Resolver<Maybe<Array<ResolversTypes['ContactDetail']>>, ParentType, ContextType>;
  itinerary?: Resolver<ResolversTypes['Itinerary'], ParentType, ContextType>;
  passengers?: Resolver<Maybe<Array<ResolversTypes['Passenger']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']> = ResolversObject<{
  destination?: Resolver<ResolversTypes['Airport'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Airport'], ParentType, ContextType>;
  segments?: Resolver<Array<ResolversTypes['Segment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContactDetailResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ContactDetail'] = ResolversParentTypes['ContactDetail']> = ResolversObject<{
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FlightResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Flight'] = ResolversParentTypes['Flight']> = ResolversObject<{
  arrivalTerminal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cabin?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carrier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checkInEnd?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checkInStart?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  equipment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numberOfStops?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scheduledArrival?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scheduledDeparture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItineraryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Itinerary'] = ResolversParentTypes['Itinerary']> = ResolversObject<{
  connections?: Resolver<Array<ResolversTypes['Connection']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PassengerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Passenger'] = ResolversParentTypes['Passenger']> = ResolversObject<{
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  booking?: Resolver<ResolversTypes['Booking'], ParentType, ContextType, RequireFields<QueryBookingArgs, 'code' | 'name'>>;
}>;

export type SegmentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Segment'] = ResolversParentTypes['Segment']> = ResolversObject<{
  destination?: Resolver<ResolversTypes['Airport'], ParentType, ContextType>;
  flight?: Resolver<ResolversTypes['Flight'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Airport'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Airport?: AirportResolvers<ContextType>;
  Booking?: BookingResolvers<ContextType>;
  Connection?: ConnectionResolvers<ContextType>;
  ContactDetail?: ContactDetailResolvers<ContextType>;
  Flight?: FlightResolvers<ContextType>;
  Itinerary?: ItineraryResolvers<ContextType>;
  Passenger?: PassengerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Segment?: SegmentResolvers<ContextType>;
}>;

