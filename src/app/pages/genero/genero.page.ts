import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonLabel,  } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, IonInput, IonButton, IonLabel, HttpClientModule]
})
export class GeneroPage  {
  nombre: string = "";
  genero: string = "";
  imagenUrl: string = "";

  constructor(private http: HttpClient) { }

  getGenero(nombre: string): any{
    const url = `https://api.genderize.io/?name=${nombre}`;
    this.http.get(url).subscribe((data: any) => {
      this.genero = data.gender;
      this.determinarCategoria();
      console.log('Genero estimado:', this.genero);
    })
  }

  determinarCategoria(): void {
    if (this.genero !== undefined) {
      if (this.genero === 'male') {
        this.imagenUrl = '/assets/muchacho.webp';
      } else {
        this.imagenUrl = '/assets/muchacha.webp';
      }
    }
  }
} 
