import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookingGQL } from '../__generated__/types';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent, ReactiveFormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnDestroy {
  private querySubscription: Subscription | undefined;

  loginForm = new FormBuilder().nonNullable.group({
    code: '',
    name: '',
  });

  error = '';
  isLoading = false;

  constructor(private bookingGQL: BookingGQL) {}

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  onSubmit() {
    this.isLoading = true;
    this.error = '';

    this.querySubscription = this.bookingGQL
      .watch(this.loginForm.getRawValue(), {
        errorPolicy: 'all',
        fetchPolicy: 'no-cache',
      })
      .valueChanges.subscribe(({ data, errors }) => {
        this.isLoading = false;

        if (errors?.length) {
          this.error = errors[0].message;
        }

        console.log(data.booking);
      });
  }
}
