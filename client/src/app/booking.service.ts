import { Injectable } from '@angular/core';
import {
  BookingGQL,
  BookingQuery,
  BookingQueryVariables,
} from './__generated__/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  booking$ = new BehaviorSubject<BookingQuery['booking'] | null>(null);
  error$ = new BehaviorSubject('');
  loading$ = new BehaviorSubject(false);

  constructor(private bookingGQL: BookingGQL) {}

  retrieveBooking(args: BookingQueryVariables) {
    this.loading$.next(true);
    this.error$.next('');

    this.bookingGQL
      .watch(args, {
        errorPolicy: 'all',
        fetchPolicy: 'no-cache',
      })
      .valueChanges.subscribe(({ data, errors }) => {
        this.loading$.next(false);

        if (errors?.length) {
          this.error$.next(errors[0].message);
        }

        if (data.booking) {
          this.booking$.next(data.booking);
        }
      });
  }
}
