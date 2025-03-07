import { Injectable } from '@angular/core';
import { Http } from '@capacitor/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private apiKey: string = '425e85599b83eb37cb5a9e3e75bfc741';

  constructor() {}

  getWeatherData(latitude: number, longitude: number): Observable<any> {
    const params = new URLSearchParams({
      lat: latitude.toString(),
      lon: longitude.toString(),
      apikey: this.apiKey,
      lang: 'es',
      units: 'metric'
    }).toString();

    const urlWithParams = `https://api.openweathermap.org/data/2.5/weather?${params}`;

    const request = Http.request({
      method: 'GET',
      url: urlWithParams
    });

    return from(request).pipe(
      catchError(error => {
        console.error('Error al obtener datos del clima:', error);
        return throwError(() => new Error('No se pudo obtener el clima.'));
      }),
      map(response => {
        const weatherData = response.data; 
        const time = weatherData.dt;
        const description = weatherData.weather[0].description;
        const temperature = weatherData.main.temp; 
        const humidity = weatherData.main.humidity; 
        const windSpeed = weatherData.wind.speed; 

        return {
          time: time,
          description: description,
          temperature: temperature,
          humidity: humidity,
          windSpeed: windSpeed
        };
      })
    );
  }
}
