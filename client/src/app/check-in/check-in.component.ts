import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookingGQL } from '../__generated__/types';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnDestroy {
  private querySubscription: Subscription | undefined;

  loginForm = new FormBuilder().nonNullable.group({
    code: '',
    name: '',
  });

  constructor(private bookingGQL: BookingGQL) {}

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  onSubmit() {
    this.querySubscription = this.bookingGQL
      .watch(this.loginForm.getRawValue())
      .valueChanges.subscribe(({ data }) => {
        console.log(data.booking);
      });
  }
}
