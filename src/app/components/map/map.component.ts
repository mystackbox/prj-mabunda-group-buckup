import { Component, ViewChild } from '@angular/core';
import { VehicleService } from '../../shared/services/vehicle/vehicle.service';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { PassDataService } from '../../shared/services/passData/pass-data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  @ViewChild(GoogleMap, { static: false }) map?: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info?: MapInfoWindow;

  zoom = 10;
  center: any;
  label: string = '';
  mapTitle: string = '';
  markerPosition: any;
  _loading: boolean = false;

  options: google.maps.MapOptions = {
    center: { lat: -25.749, lng: 28.0947 },
    zoomControl: false,
    streetViewControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 20,
    minZoom: 8,
    fullscreenControl: false,
    mapTypeControl: false,
  };

  markers: any = {};

  //DI
  constructor() {}

  /**
   * Initial calls
   */
  ngOnInit(): void {
    this._loading = true;
    setTimeout(() => {
      this._loading = false;
    }, 2000);
    this.markersConfig();
  }

  /**
   * Sets markers default parameters
   * @returns ojbects of marker (icon settings, markers settings)
   */
  markersConfig(): void {
    console.log('being executed inside [addMarker]...');
    const icon = {
      url: '../map-icon/pin.png', // url
      scaledSize: new google.maps.Size(28, 30), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 30), // anchor
    };

    this.markers = {
      label: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: '14px',
        text: 'Address',
      },

      options: {
        draggable: false,
        icon: icon,
        content: 'Example',
        gmpClickable: true,
      },
    };

    this.markerPosition = {
      lat: -25.749249528792593,
      lng: 28.094779829219195,
    };
  }
}
