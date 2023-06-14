import { CanActivateFn, Router, Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { BookingComponent } from './booking/booking.component';
import { inject } from '@angular/core';
import { BookingService } from './booking.service';

const canActivateBooking: CanActivateFn = () => {
  const currentBooking = inject(BookingService).booking$.getValue();

  if (!currentBooking) {
    return inject(Router).parseUrl('/check-in');
  }

  return true;
};

export const routes: Routes = [
  {
    path: 'booking',
    title: 'Booking',
    component: BookingComponent,
    canActivate: [canActivateBooking],
  },
  { path: 'check-in', component: CheckInComponent, title: 'Check-in' },
  { path: '', redirectTo: '/check-in', pathMatch: 'full' },
];
