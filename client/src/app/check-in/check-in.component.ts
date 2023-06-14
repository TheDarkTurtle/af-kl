import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent, ReactiveFormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  loginForm = new FormBuilder().nonNullable.group({
    code: '',
    name: '',
  });

  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.error$ = this.bookingService.error$;
    this.isLoading$ = this.bookingService.loading$;
  }

  onSubmit() {
    this.bookingService.retrieveBooking(this.loginForm.getRawValue());
  }
}
