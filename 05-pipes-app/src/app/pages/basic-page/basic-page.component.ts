import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe,TitleCasePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent { 
  namelower = signal("raul");
  nameUpper = signal("RAUL");
  fullName = signal("RAuL sAnchEz");
}
