import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ng-mfe-login-app-entry',
  template: `<div class="remote-entry">
    <h2>login-app's Remote Entry Component</h2>
  </div>
  <form [formGroup]="formGroup">
    <mat-form-field>
      <mat-label>Username</mat-label>
      <input matInput formControlName="username"/>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Password</mat-label>
      <input type="password" matInput formControlName="password2"/>
    </mat-form-field>
  </form>
  `,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  formGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: [''],
      password2: [''],
    })
  }
}
