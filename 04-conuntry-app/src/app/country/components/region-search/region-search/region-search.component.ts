import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'region-search',
  imports: [],
  templateUrl: './region-search.component.html'
})
export class RegionSearchComponent { 

  regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',  
  ];
  
  selectedRegion = signal<string>('');  // Signal reactivo
  value = output<string>();
  
  //

  emitValue(value: string): void {
    console.log('emitiendo valor', value);
    this.selectedRegion.set(value);
    this.value.emit(value);
  }
}


export type Region =
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctic';
  
  
