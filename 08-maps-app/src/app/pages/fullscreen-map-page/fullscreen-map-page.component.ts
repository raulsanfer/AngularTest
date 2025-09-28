import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from '../../../environments/environment.development';
import { DecimalPipe, JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './fullscreen-map-page.component.html',
  styles:`
  div{
    height: calc( 100vh - 64px );
    width: 100vw;
  }
  #controls
  {
    background-color:white;
    padding:10px;
    border-radius: 5px;
    position:fixed;
    bottom:20px;
    right:20px;
    z-index:999;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
    border:1px solid #e2e8f0;
    width:250px;
  }
  `
})
export class FullscreenMapPageComponent implements AfterViewInit {

divElement = viewChild<ElementRef>('map');
map = signal<mapboxgl.Map | null>(null);
zoom = signal(9);

coordinates = signal({
  lng: -74.5,
  lat: 40
});

zoomEffect = effect(() => {
  console.log('zoom', this.zoom());
  this.map()?.getZoom() !== this.zoom() && this.map()?.zoomTo(this.zoom());
} );

async ngAfterViewInit() {

    if(!this.divElement()?.nativeElement) throw new Error('No se encontro el elemento HTML');

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;
    
    const { lng, lat } = this.coordinates();

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });

    //this.map.set(map);
    this.mapListener(map);
}

mapListener(map: mapboxgl.Map) {
  map?.on('zoom', () => {
    this.zoom.set(map.getZoom() || 0);
  });
  
  map.on('moveend', () => {
    const { lng, lat } = map.getCenter();
    this.coordinates.set({
      lng: Number(lng.toFixed(4)),
      lat: Number(lat.toFixed(4))
    });
  });

}
}
