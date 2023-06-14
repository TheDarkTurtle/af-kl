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

  isLoading = false;

  constructor(private bookingGQL: BookingGQL) {}

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  onSubmit() {
    this.isLoading = true;

    this.querySubscription = this.bookingGQL
      .watch(this.loginForm.getRawValue())
      .valueChanges.subscribe(({ data }) => {
        this.isLoading = false;
        console.log(data.booking);
      });
  }
}
