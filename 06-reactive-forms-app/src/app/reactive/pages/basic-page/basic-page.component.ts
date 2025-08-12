import { FormUtils } from './../../../utils/form-utils';
import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './basic-page.component.html'
})
export class BasicPageComponent { 

  formUtils = FormUtils;

  formBuilder = inject(FormBuilder);

  myForm:FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)], []], ///** Validadores sincronos  */,/**Validadores asíncronos */],
    price: [0, [Validators.required, Validators.min(10)], []],
    inStorage: [0, [Validators.required, Validators.min(0)], []]
  });
 

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }

  // myForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage:new  FormControl(0),
  // })

}

