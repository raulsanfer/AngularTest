import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormUtils } from '../../../utils/form-utils';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  onSubmit() {
     if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  } 

  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(FormUtils.namePattern)]],
    username: ['', { validators: [Validators.required, Validators.minLength(6), Validators.pattern(this.formUtils.notOnlySpacesPattern)]}],
    email: ['', { validators: [Validators.required, Validators.pattern(FormUtils.emailPattern)]}],
    password: ['', { validators: [Validators.required, Validators.minLength(6)]}],
    confirmPassword: ['', { validators: [Validators.required]}],
  },
{
  validators: this.formUtils.isFieldOneEqualFieldTwo_('password', 'confirmPassword')
});

}
