import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ErrorTooltip } from '../../error-tooltip/error-tooltip';


@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, ReactiveFormsModule, ErrorTooltip],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
// Reusing the showPassword signal for the eye icon
  showPassword = signal(false);

  // Define the login form with basic validation
  loginForm = new FormGroup({
    email: new FormControl('', { validators: [Validators.email, Validators.required], updateOn: 'blur'}),
    password: new FormControl('', [Validators.required])
  });

  // Toggle password visibility
  togglePassword() {
    this.showPassword.update(v => !v);
  }

  // Handle form submission
  onLogin() {
    if (this.loginForm.valid) {
      // Calling the authService
    } else {
      // Mark all fields as touched to show errors
      this.loginForm.markAllAsTouched();
    }
  }

  // Helper to check for errors (used for border color)
  isInvalid(path: string): boolean {
    const control = this.loginForm.get(path);
    return !!(control && control.invalid && control.touched);
  }
}
