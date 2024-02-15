import { Component } from '@angular/core';
import { Box } from '../helper-files/content-interface';
import {BoxListComponent} from '../box-list-component/box-list-component.component'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-box-component',
  standalone: true,
  imports: [BoxListComponent,FormsModule],
  templateUrl: './box-component.component.html',
  styleUrl: './box-component.component.scss'
})
export class BoxComponentComponent {
  defaultBox: Box = {
    size: 5,
    description: 'Default Box Contents',
    shippingLabelCode: 'ABC123',
    recipient: 'Aditya Bhoite',
    weight: 750.5,
  };
}
