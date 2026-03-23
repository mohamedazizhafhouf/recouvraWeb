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
@Input() selectedCountry?: any;

//Universal error handler
getErrorMessage(): string {
  const control = this.form.get(this.path);
  if (!control || !control.errors || !control.touched) return '';

  const errors = control.errors;

  if (errors['required']) return "Required";

  if (errors['minlength']) return `At least ${errors['minlength'].requiredLength} characters`;
  
  if (errors['pattern']) {

    if (this.path.includes('phone')) {
      const country = this.selectedCountry;
      return `${country.name} numbers must be ${country.expectedLength} digits`;
    }

    if(this.path.includes('firstName') || this.path.includes('lastName')){
      return "Latin letters only";
    }
    
    return "format is invalid";
  }

  if (errors['email']) return 'Enter a valid email address';

  return 'Invalid input';
}

}
