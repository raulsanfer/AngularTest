import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, Input, signal } from "@angular/core";


@Component({
    selector: 'app-hero-page',
    templateUrl:'./hero-page.component.html',
    imports: [UpperCasePipe],
    //standalone: true,
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent{
    name = signal('Ironman');
    age = signal(45);
    @Input() sharedName = "pepe";

    heroDescription = computed(()=>{
        const description = `${this.name()} - ${this.age()}`;
        return description;
    })

    capitalizedName = computed(()=>{
        const description = `${this.name().toUpperCase()}`;
        return description;
    })

    getHeroDescription(){
        return `${this.name()} - ${this.age()}`;
    }
    changeHero(){
        this.name.update((c)=> c = "Spiderman");
    }
    cambiarEdad(){
        this.age.update(e => e = 60);
    }
    resetForm(){
        this.name.set("Ironman");
        this.age.set(45);
    }
}


@Component({
    templateUrl: './test-page.component.html',
    //standalone: true,
    imports:[HeroPageComponent]
})
export class TestComponent{
    nameTest = "Hola Test";
    
}