
import { Component } from '@angular/core';
import { WeatherApiService } from './weather-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city!: string ;
  weatherData: any;
temperature : any;
startTime : any;
endTime : any;

  constructor(private weatherApiService: WeatherApiService) {
   }

  fetchWeatherData() {
    this.weatherApiService.fetchWeatherData(this.city)
      .subscribe((data1:any) => {
        this.weatherData = data1;
        this.temperature=data1.data.timelines[0].intervals[0].values.temperature;
     


        console.log(data1.data);
        
      }, error => {
        console.error('Error fetching weather data:', error);
      });
  }

}
