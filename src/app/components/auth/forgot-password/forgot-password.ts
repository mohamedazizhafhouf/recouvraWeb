import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ErrorTooltip } from '../../error-tooltip/error-tooltip';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, ErrorTooltip],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  emailSent = signal(false);

  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    if (this.forgotForm.valid) {
      console.log('Sending reset link to:', this.forgotForm.value.email);
      // API call
      this.emailSent.set(true);
    } else {
      this.forgotForm.markAllAsTouched();
    }
  }

  isInvalid(path: string): boolean {
    const control = this.forgotForm.get(path);
    return !!(control && control.invalid && control.touched);
  }

}
