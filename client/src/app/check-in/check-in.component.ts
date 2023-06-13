import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from '../graphql.module';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { BOOKING_QUERY } from './check-in.queries';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, GraphQLModule, ReactiveFormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnDestroy {
  private querySubscription: Subscription | undefined;

  loginForm = new FormBuilder().nonNullable.group({
    code: '',
    name: '',
  });

  constructor(private apollo: Apollo) {}

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }

  onSubmit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: BOOKING_QUERY,
        variables: this.loginForm.getRawValue(),
      })
      .valueChanges.subscribe(({ data }) => {
        console.log(data.booking);
      });
  }
}
