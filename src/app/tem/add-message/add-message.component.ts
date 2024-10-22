import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [],
  templateUrl: './add-message.component.html',
  styles: ``
})
export class AddMessageComponent {
  formGroup!: FormGroup;
  
  ngOnInit(): void {
    this.formGroup = this.initForm();
  }
  initForm(): FormGroup {
    return this.fb.group({
    });
  }
  constructor(public messageService: MessageService, private readonly fb: FormBuilder) {  }
  alumno: string = "";
  addAlumno(){
    this.messageService.add(this.alumno);
    this.alumno = "";
  }
}
