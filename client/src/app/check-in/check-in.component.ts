import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent {
  loginForm = new FormBuilder().nonNullable.group({
    code: '',
    name: '',
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
