import { Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
  { path: 'booking', component: BookingComponent, title: 'Booking' },
  { path: 'check-in', component: CheckInComponent, title: 'Check-in' },
  { path: '', redirectTo: '/check-in', pathMatch: 'full' },
];
