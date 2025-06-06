import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.component.html'
})
export class CountrySearchComponent { 

  value = output<string>();
  placeholder = input('Buscar por capital');
  initialValue = input<string>(''); //valor inicial del input
  inputValue = linkedSignal<string>(()=>this.initialValue());

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue(); //cada vez que cambie el valor del input se ejecuta el efecto

    const timeout = setTimeout(() => {
      this.value.emit(value)
    ,2000});

    onCleanup(() => clearTimeout(timeout)); //limpiamos el timeout

    //console.log('emitiendo valor', value);
    //this.value.set(value);
  });

}
