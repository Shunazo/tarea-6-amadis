import { WeatherServiceService } from './../../api/weather-service.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonProgressBar, } from '@ionic/angular/standalone';


@Component({
  selector: 'app-weather-repo-rd',
  templateUrl: './weather-repo-rd.page.html',
  styleUrls: ['./weather-repo-rd.page.scss'],
  standalone: true,
  imports: [IonProgressBar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ]
})
export class ClimaPage implements OnInit {
  isLoading: boolean = false;
  weatherData: any;
  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit() {
    this.fetchWeatherData(18.4861, -69.9312);
  }

  fetchWeatherData(latitude: number, longitude: number) {
    this.isLoading = true;
    this.weatherService.getWeatherData(latitude, longitude).subscribe(
      (data) => {
        this.weatherData = data;
        this.isLoading = false;
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}