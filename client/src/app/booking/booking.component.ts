import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { BookingQuery } from '../__generated__/types';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  booking$: Observable<BookingQuery['booking'] | null>;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.booking$ = this.bookingService.booking$;
  }
}
