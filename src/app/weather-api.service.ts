import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = 'SOWG3Tr6jM1huwFKZvUq97nLvSKlBV2F';

  constructor(private http: HttpClient) { }

  fetchWeatherData(city: string) {
    const url = 'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=SOWG3Tr6jM1huwFKZvUq97nLvSKlBV2F';
    return this.http.get(url);
  }
}
