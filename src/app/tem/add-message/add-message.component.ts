import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-message.component.html',
  styles: ``
})
export class AddMessageComponent implements OnInit {
  formGroup!: FormGroup;
  
  ngOnInit(): void {
    this.formGroup = this.initForm();
  }
  initForm(): FormGroup {
    return this.fb.group({
      nombre: [''],
    });
  }
  constructor(public messageService: MessageService, private readonly fb: FormBuilder) {  }
  alumno: string = "";
  addAlumno(){
    let {nombre} = this.formGroup.value;
    this.messageService.add(nombre)
    this.formGroup.get('nombre')?.setValue('');
  }
}
