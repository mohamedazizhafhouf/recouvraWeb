import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-tooltip',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './error-tooltip.html',
  styleUrl: './error-tooltip.css',
})
export class ErrorTooltip {
@Input({ required: true }) form!: FormGroup;
@Input({ required: true }) path!: string;
@Input({ required: true }) label!: string;
@Input() selectedCountry?: any;

//Universal error handler
getErrorMessage(): string {
  const control = this.form.get(this.path);
  if (!control || !control.errors || !control.touched) return '';

  const errors = control.errors;

  if (errors['required']) return `${this.label} is required`;

  if (errors['minlength']) return `${this.label} must be at least ${errors['minlength'].requiredLength} characters`;
  
  if (errors['pattern']) {

    if (this.path.includes('phone')) {
      const country = this.selectedCountry;
      return `${country.name} numbers must be ${country.expectedLength} digits`;
    }

    if(this.path.includes('firstName') || this.path.includes('lastName')){
      return `${this.label} must contain latin letters only`;
    }
    
    return `${this.label} format is invalid`;
  }

  if (errors['email']) return 'Enter a valid email address';

  return 'Invalid input';
}

}
