import { Component } from '@angular/core';
import { WeatherService, WeatherInterface } from './services/weather.service';
import { GeocodeService, GeocodeInterface } from './services/geocode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherspi';

  constructor(service: GeocodeService) {
    service.getCoordinatesByZipCode('01760');
  }
}

