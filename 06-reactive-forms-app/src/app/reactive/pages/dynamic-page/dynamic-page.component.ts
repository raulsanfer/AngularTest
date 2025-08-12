import { FormUtils } from './../../../utils/form-utils';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe,ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html'
})
export class DynamicPageComponent { 
  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  newFavorite = new FormControl('', [Validators.required, Validators.minLength(3)]);

  myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', [Validators.required]],
      ['Zelda', [Validators.required]],
    ], Validators.minLength(3)), 
  });


  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
  onAddToFavorites() {
    if (this.newFavorite.valid) {
      this.favoriteGames.push(this.fb.control(this.newFavorite.value, [Validators.required, Validators.minLength(3)]));
      this.newFavorite.reset();
    }
  }


  onDeleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }
}
