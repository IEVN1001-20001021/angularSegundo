import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [],
  templateUrl: './list-message.component.html',
  styles: ``
})
export class ListMessageComponent {
  constructor(public messageService: MessageService) {  }
}
