import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonLabel, IonCardHeader, IonCardContent, IonItem, IonCardTitle, IonImg, IonList, IonCard, } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Http } from '@capacitor/http';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonLabel, IonCardHeader, IonCardContent, IonItem, IonCardTitle, IonImg, IonList, IonCard, HttpClientModule]
})
export class PokemonPage implements OnInit {
  targetPokemon?: string;
  pokemon: any = null;
  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPokemonInfo(name: string){
    if (!name) return;
    this.pokemon = null;

    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

    this.http.get<any>(url).pipe(
      catchError(error => {
        console.error('Error al obtener datos del Pokémon:', error);
        return throwError(() => new Error('No se pudo obtener el Pokémon.'));
      })
    ).subscribe((response: any) => {
      console.log(response);
      this.pokemon = {
        abilities: response.abilities,
        image: response.sprites.front_default,
        baseExp: response.base_experience
      }
      console.log(this.pokemon);
    }, error => {
      console.log(error);
    });
  }
}
