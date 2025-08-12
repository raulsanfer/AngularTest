import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upper : boolean =true ): string {
    if (!value) return value;
    return upper ? value.toUpperCase() : value.toLowerCase();
/*    return value.split('').map(char => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');*/
  }
}