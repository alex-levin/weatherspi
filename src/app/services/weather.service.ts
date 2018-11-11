import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface WeatherInterface {
  name: string;
  startTime: string;
  endTime: string;
  temperature: number;
  temperatureUnit: string;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

}
