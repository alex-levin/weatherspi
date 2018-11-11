import { Component } from '@angular/core';
import { WeatherService, WeatherInterface } from './services/weather.service';
import { GeocodeService } from './services/geocode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherspi';

  constructor(service: GeocodeService) {
    service.getCoordinatesByZipCode('01760').subscribe(data => {
      // casting data to any to avoid resourceSets property does not exist on type Object
      let coordinatesArr: Array<string> = (data as any).resourceSets[0].resources[0].point.coordinates;
      let lat: string = coordinatesArr[0];
      let lon: string = coordinatesArr[1];
      // prints 42.2846603393555, -71.3477401733398
      console.log(lat + ', ' + lon);
    });
  }
}

