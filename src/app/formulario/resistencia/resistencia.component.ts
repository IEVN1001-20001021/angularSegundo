import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Colores {
  color1: string;
  color2: string;
  color3: string;
  tolerancia: string;
  valor?: number;
  valorMinimo?: number;
  valorMaximo?: number;
}

@Component({
  selector: 'app-resistencia',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resistencia.component.html',
  styles: ``,
})
export default class ResistenciaComponent implements OnInit {
  formGroup!: FormGroup;
  resistencias: Colores[] = [];
  valores: { [key: string]: number } = {
    Negro: 0,
    Cafe: 1,
    Rojo: 2,
    Naranja: 3,
    Amarillo: 4,
    Verde: 5,
    Azul: 6,
    Violeta: 7,
    Gris: 8,
    Blanco: 9,
  };
  multiplicadores: { [key: string]: number } = {
    Negro: 1,
    Cafe: 10,
    Rojo: 100,
    Naranja: 1000,
    Amarillo: 10000,
    Verde: 100000,
    Azul: 1000000,
    Violeta: 10000000,
    Gris: 100000000,
    Blanco: 1000000000,
  };
  tolerancias: { [key: string]: number } = {
    Oro: 0.05,
    Plata: 0.1,
  };

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      color1: [''],
      color2: [''],
      color3: [''],
      tolerancia: [''],
    });
  }

  onSubmit(): void {
    const { color1, color2, color3, tolerancia } = this.formGroup.value;

    const nuevaResistencia: Colores = {
      color1,
      color2,
      color3,
      tolerancia,
    };

    this.resistencias = [nuevaResistencia];
    const resistenciasGuardadas = localStorage.getItem('resistencias');
    let resistencias: Colores[] = [];
    if (resistenciasGuardadas) {
      resistencias = JSON.parse(resistenciasGuardadas);
    }
    resistencias.push(nuevaResistencia);
    localStorage.setItem('resistencias', JSON.stringify(resistencias));
  }

  imprimir(): void {
    const resistenciasGuardadas = localStorage.getItem('resistencias');
    if (resistenciasGuardadas) {
      this.resistencias = JSON.parse(resistenciasGuardadas);
    }
  }
  getColorStyle(color: string): { [key: string]: string } {
    const colorMap: { [key: string]: string } = {
      Negro: '#000000',
      Cafe: '#8B4513',
      Rojo: '#FF0000',
      Naranja: '#FFA500',
      Amarillo: '#FFFF00',
      Verde: '#008000',
      Azul: '#0000FF',
      Violeta: '#EE82EE',
      Gris: '#808080',
      Blanco: '#FFFFFF',
      Oro: '#FFD700',
      Plata: '#C0C0C0',
    };

    return {
      'background-color': colorMap[color] || 'transparent',
    };
  }
}
