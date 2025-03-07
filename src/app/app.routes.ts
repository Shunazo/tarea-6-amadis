import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'genero',
    loadComponent: () => import('./pages/genero/genero.page').then( m => m.GeneroPage)
  },
  {
    path: 'edad',
    loadComponent: () => import('./pages/edad/edad.page').then( m => m.EdadPage)
  },
  {
    path: 'universidad',
    loadComponent: () => import('./pages/universidad/universidad.page').then( m => m.UniversidadPage)
  },
  {
    path: 'clima',
    loadComponent: () => import('./pages/clima/clima.page').then( m => m.ClimaPage)
  },
  {
    path: 'pokemon',
    loadComponent: () => import('./pages/pokemon/pokemon.page').then( m => m.PokemonPage)
  },
  {
    path: 'wordpress',
    loadComponent: () => import('./pages/wordpress/wordpress.page').then( m => m.WordpressPage)
  },
  {
    path: 'acercade',
    loadComponent: () => import('./pages/acercade/acercade.page').then( m => m.AcercadePage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
];
