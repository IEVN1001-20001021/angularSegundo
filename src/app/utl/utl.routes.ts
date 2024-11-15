import { Routes } from '@angular/router';

export default [
  {
    path: 'alumnos',
    loadComponent: () => import('./alumnos/alumnos.component'),
  },
  {
    path: 'agregar',
    loadComponent: () => import('./agregar/agregar.component'),
  },
  {
    path: 'eliminar/:id',
    loadComponent: () => import('./eliminar/eliminar.component'),
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./editar/editar.component'),
  },
] as Routes;
