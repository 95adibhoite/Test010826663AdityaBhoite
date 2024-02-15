import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BoxComponentComponent} from './box-component/box-component.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BoxComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
