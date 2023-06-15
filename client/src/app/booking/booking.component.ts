import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BookingQuery } from '../__generated__/types';
import { BookingService } from '../booking.service';
import { AirportPipe } from '../airport.pipe';
import { ContactPipe } from '../contact.pipe';
import { PaxPipe } from '../pax.pipe';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, AirportPipe, ContactPipe, PaxPipe],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  booking$: Observable<BookingQuery['booking'] | null>;
  showDetails = false;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.booking$ = this.bookingService.booking$;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
