import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  loginForm = new FormBuilder().nonNullable.group(
    {
      code: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(6),
          Validators.pattern(/^[2-9a-zA-Z]*$/),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
    },
    { updateOn: 'blur' }
  );

  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.error$ = this.bookingService.error$;
    this.isLoading$ = this.bookingService.loading$;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.bookingService.retrieveBooking(this.loginForm.getRawValue());
  }

  get code() {
    return this.loginForm.controls.code;
  }

  get name() {
    return this.loginForm.controls.name;
  }
}
