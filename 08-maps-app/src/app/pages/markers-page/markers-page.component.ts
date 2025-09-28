import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import mapboxgl from 'mapbox-gl';
import { JsonPipe } from '@angular/common';
mapboxgl.accessToken = environment.mapboxKey


interface Marker {
  color: string;
  marker?: mapboxgl.Marker;
  lngLat: [number, number];
} 

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe],
  templateUrl: './markers-page.component.html',
})
export class MarkersPageComponent implements AfterViewInit  {

divElement = viewChild<ElementRef>('map');
map = signal<mapboxgl.Map | null>(null);
zoom = signal(9);
coordinates = signal({
  lng: -74.5,
  lat: 40
});

markers = signal<Marker[]>([]);

async ngAfterViewInit() {
  if(!this.divElement()?.nativeElement) throw new Error('No se encontro el elemento HTML');

  await new Promise((resolve) => setTimeout(resolve, 80));

  const element = this.divElement()!.nativeElement;

  const map = new mapboxgl.Map({
    container: element, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  // const marker = new mapboxgl.Marker({});
  // marker.setLngLat([-74.5, 40]).addTo(map);

   this.mapListener(map);
}

trackByFn(index: number, item: Marker): any {
  return item.lngLat; // o cualquier propiedad única de tu Marker
}

mapListener(map: mapboxgl.Map) {
  map.on('click', (event) => {
    this.mapClick(event, map);
  });
}

mapClick(event: mapboxgl.MapMouseEvent, map: mapboxgl.Map) {
  const { lng, lat } = event.lngLat;
  const mapboxMarker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(map);

  const newMarker: Marker = {
    color: '#'+Math.floor(Math.random()*16777215).toString(16),
    marker: mapboxMarker,
    lngLat: [lng, lat]
  };

  this.markers.set([...this.markers(), newMarker]);
}






}