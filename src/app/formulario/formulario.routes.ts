import { Routes } from "@angular/router";

export default [
    {
        path: 'ejemplo1',
        loadComponent: () => import('./ejemplo1/ejemplo1.component'),
    },
    {
        path: 'resistencias',
        loadComponent: () => import('./resistencia/resistencia.component'),
    },
    {
        path: 'empleados',
        loadComponent: () => import('./empleados/empleados.component'),
    }
]as Routes