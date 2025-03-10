import {Component, input,signal } from '@angular/core';
import type { Character } from '../../../interfaces/Character.interface';

@Component({  
  selector: 'dragonball-character-list',  
  templateUrl: './character-list.component.html'  
})
export class CharacterListComponent { 
  characters = input.required<Character[]>();  
  listName = input.required<string>();
}
