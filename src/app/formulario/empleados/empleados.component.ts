import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

interface Empleados {
  nombre: string;
  matricula: number;
  correo: string;
  edad: number;
  horasTrabajadas: number;
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './empleados.component.html',
  styles: ``,
})
export default class EmpleadosComponent implements OnInit {
  formGroup!: FormGroup;
  empleados: Empleados[] = [];
  totalPagar: number = 0;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
      matricula: [''],
      correo: [''],
      edad: [''],
      horasTrabajadas: [''],
    });
  }

  onSubmit(): void {
    const empleado: Empleados = this.formGroup.value;
    const empleadosGuardados = localStorage.getItem('empleados');
    let empleadosArray: Empleados[] = [];
    if (empleadosGuardados) {
      empleadosArray = JSON.parse(empleadosGuardados);
    }

    const index = empleadosArray.findIndex((e) => e.matricula === empleado.matricula);
    if (index !== -1) {
      empleadosArray[index] = empleado;
    } else {
      empleadosArray.push(empleado);
    }

    localStorage.setItem('empleados', JSON.stringify(empleadosArray));
    this.imprimir();
  }

  imprimir(): void {
    const empleadosGuardados = localStorage.getItem('empleados');
    if (empleadosGuardados) {
      this.empleados = JSON.parse(empleadosGuardados);
      this.totalPagar = this.empleados.reduce((total, empleado) => {
        const subtotal = empleado.horasTrabajadas <= 40 ? empleado.horasTrabajadas * 70 : (40 * 70) + ((empleado.horasTrabajadas - 40) * 140);
        return total + subtotal;
      }, 0);
    }
  }

  modificar(): void {
    const matricula = this.formGroup.get('matricula')?.value;
    if (matricula) {
      const empleadosGuardados = localStorage.getItem('empleados');
      if (empleadosGuardados) {
        const empleadosArray: Empleados[] = JSON.parse(empleadosGuardados);
        const empleado = empleadosArray.find((e) => e.matricula === matricula);
        if (empleado) {
          this.formGroup.patchValue(empleado);
        }
      }
    }
  }

  eliminar(): void {
    const matricula = this.formGroup.get('matricula')?.value;
    if (matricula) {
      const empleadosGuardados = localStorage.getItem('empleados');
      if (empleadosGuardados) {
        let empleadosArray: Empleados[] = JSON.parse(empleadosGuardados);
        empleadosArray = empleadosArray.filter((e) => e.matricula !== matricula);
        localStorage.setItem('empleados', JSON.stringify(empleadosArray));
        this.empleados = empleadosArray;
        this.totalPagar = this.empleados.reduce((total, empleado) => {
          const subtotal = empleado.horasTrabajadas <= 40 ? empleado.horasTrabajadas * 70 : (40 * 70) + ((empleado.horasTrabajadas - 40) * 140);
          return total + subtotal;
        }, 0);
      }
    }
  }
}
