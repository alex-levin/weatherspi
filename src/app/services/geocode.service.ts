import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let key: string = 'AuocNZZGFHV1k0cPvoe0isu3PUJWtKuATK6u9kUImXkzyBsC9p3yeMUA-043beei';
let url: string = 'http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=US';

export interface GeocodeInterface {
    lat: string;
    lon: string;
}
@Injectable()
export class GeocodeService {
  constructor(private http: HttpClient) { }

  getCoordinatesByZipCode(zipCode: string) {
    url = url + '&postalCode=' + zipCode + '&key=' + key;
    return this.http.get(url).subscribe(data => {
        console.log(data as any);
        // Prints Array [ 42.2846603393555, -71.3477401733398 ]
        console.log((data as any).resourceSets[0].resources[0].point.coordinates);
    });
  }

  getCoordinatesByLocation(city: string, state: string) {
    url = url + '&adminDistrict=' + state + '&locality=' + city + '&key=' + key;
    return this.http.get(url).subscribe(data => {
        console.log(data);
    });
  }
}
