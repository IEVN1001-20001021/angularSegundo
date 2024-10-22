import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemapComponent } from "./tem/temap/temap.component";
import { AddMessageComponent } from "./tem/add-message/add-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemapComponent, AddMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSegundo';
}
