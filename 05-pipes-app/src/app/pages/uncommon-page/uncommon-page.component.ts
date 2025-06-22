import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { JsonpClientBackend } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent,JsonPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent { 
//test jsonpipe

  jsonData = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'traveling', 'gaming'],
    isActive: true,
    address: {
      street: '123 Main St',
      zipCode: '10001'
    }
  };
  
  //var showJson = signal();

    getHobbiesStringOnly() {
    return this.jsonData.hobbies.join(', ');
  } 
  
  getHobbiesJson() {
    return this.jsonData.hobbies;
  } 
  getAddressJson() {
    return this.jsonData.address;
  }
}
