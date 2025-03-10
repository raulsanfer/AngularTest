import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl:'./counter-page.component.html',
    styles:`button {
        padding:5px;
        margin:10px;
        width:75px;
    }`,
    //changeDetection: ChangeDetectionStrategy.OnPush
})

export class CounterPageComponent{
    counter = 10;
    countersignal = signal(10);
    
    increaseBy(value:number)
    {
        this.counter += value;
        //this.countersignal.set(this.cont);
        this.countersignal.update((current)=> current + value);
    }
 
    resetCounter()
    {
        this.counter = 10;
        this.countersignal.set(0);
    }

}