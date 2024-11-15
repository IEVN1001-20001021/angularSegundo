import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlumnoFilterPipe } from '../alumnosfilter.pipe';
import { CommonModule } from '@angular/common';
import { Alumnosutl } from '../interfaces/alumnosutl';
import { ProyectoapiService } from '../proyectoapi.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AlumnoFilterPipe],
  templateUrl: './alumnos.component.html',
  styles: ``,
})
export default class AlumnosComponent implements OnInit {
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';
  alumnoTitle!: string;
  dataSource: any = [];
  constructor(public alumnosUtl: ProyectoapiService) {}

  showImage(): void {
    this.muestraImg = !this.muestraImg;
  }

  alumnosIric: Alumnosutl[] = [
    {
      matricula: 0,
      nombre: '',
      apaterno: '',
      amaterno: '',
      correo: '',
    }
  ];

  onCalificaClick(message: string) {
    this.alumnoTitle = ` ${message}`;
  }
  ngOnInit(): void {
    this.alumnosUtl.getAlumnos().subscribe({
      next: (response) => {
        this.dataSource = response;
      },
      error: (error) => console.log(error),
    });
  }
}
