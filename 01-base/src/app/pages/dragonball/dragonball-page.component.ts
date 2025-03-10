import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { Character } from "../../interfaces/Character.interface";

@Component({
    templateUrl:'./dragonball-page.component.html'
//    imports: [NgClass]
})
export class DragonBallPageComponent{

    name = signal('Gohan');
    power = signal(0);

    characters = signal<Character[]>([
        {id:1, name:'Goku',power:9000}        
    ]);

    addCharacter(){
        const newCharacter: Character ={
            id:this.characters().length + 1,
            name:this.name(),
            power:this.power()
        }
        this.characters.update((list) => [...list, newCharacter]);
    }


    powerClases = computed(()=>{
        return {'text-danger': true}
    });
}
