import { Character } from './../../interfaces/Character.interface';
import { Component, inject, signal} from "@angular/core";
import { CharacterListComponent} from "../../components/dragonball/character-list/character-list.component";
import { CharacterFormComponent } from "../../components/dragonball/character-form/character-form.component";
import { DragonBallService } from '../../services/dragonball.service';

@Component({
    templateUrl:'./dragonball-super-page.component.html',
    imports: [CharacterListComponent, CharacterFormComponent]
})
export class DragonBallSuperPageComponent{

public dragonballService = inject(DragonBallService);

}
