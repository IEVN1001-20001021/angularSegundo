import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  alumnos:string[] = [];
  add(alumno: string){
    this.alumnos.push(alumno);
  }
}
