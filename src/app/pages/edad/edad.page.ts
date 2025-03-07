import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonLabel } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonInput, IonLabel, IonicModule, HttpClientModule]
})
export class EdadPage {
  nombre: string = '';
  edad?: number;
  categoria: string = '';
  imagenUrl: string = '';

  constructor(private http: HttpClient) {}

  getEdad(): void {
    if (!this.nombre.trim()) {
      console.error('El nombre no puede estar vacío');
      return;
    }
  
    const url = `https://api.agify.io/?name=${this.nombre}`;
    this.http.get(url).subscribe((data: any) => {
      if (data.age !== null && data.age !== undefined) {
        this.edad = data.age;
        this.determinarCategoria();
        console.log('Edad estimada:', this.edad);
      } else {
        this.edad = 0;
        this.categoria = 'Desconocido';
        this.imagenUrl = 'assets/desconocido.jpg'; 
      }
    });
  }

  determinarCategoria(): void {
    if (this.edad !== undefined) {
      if (this.edad < 18) {
        this.categoria = 'Joven';
        this.imagenUrl = 'assets/joven.webp';
      } else if (this.edad >= 18 && this.edad < 60) {
        this.categoria = 'Adulto';
        this.imagenUrl = 'assets/adulto.jpg';
      } else {
        this.categoria = 'Anciano';
        this.imagenUrl = 'assets/anciano.webp';
      }
    }
  }
}

