import { Character } from './../interfaces/Character.interface';
import { effect, Injectable, signal } from '@angular/core';


const loadFromLocalStorage = (): Character[] =>{
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}


@Injectable({providedIn: 'root'})
export class DragonBallService {
        
    characters = signal<Character[]>(
        loadFromLocalStorage()
        //{id : 1,name:'Goku',power:1000}
    );
    
    //solo debe hacer una tarea
    saveToLocalStorage = effect(()=>{
        localStorage.setItem('characters',  JSON.stringify(this.characters()));
        console.log(`Character count: ${this.characters.length}`);
    })

    addCharacter(newCharacter: Character) {
        console.log('recibido nuevo character');
        this.characters.update((list) => [...list, newCharacter]);
      }
      
}