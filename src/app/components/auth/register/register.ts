import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ErrorTooltip } from '../../error-tooltip/error-tooltip';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ErrorTooltip, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  showPassword = signal(false);

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z'-]+(?: [A-Za-z'-]+){0,2}$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z'-]+(?: [A-Za-z'-]+){0,2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['agent', Validators.required]
    });
  }

  togglePassword() {
  this.showPassword.update(v => !v);
}

isInvalid(controlName: string) {
  const control = this.registerForm.get(controlName);
  return control ? control.invalid && control.touched : false;
}

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Data:', this.registerForm.value);
      // API Call
    }
    else{
      this.registerForm.markAllAsTouched();
    }
  }

}
