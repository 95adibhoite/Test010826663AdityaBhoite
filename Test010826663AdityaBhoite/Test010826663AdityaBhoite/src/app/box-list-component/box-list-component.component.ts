// box-list.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Box } from '../helper-files/content-interface';
import { UppercasePipe } from '../uppercase.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list-component.component.html',
  styleUrls: ['./box-list-component.component.scss'],
  standalone:true,
  imports:[UppercasePipe,FormsModule,CommonModule]
})
export class BoxListComponent {
  @Input() defaultBox: Box = {
    size: 5,
    description: 'Default Box Contents',
    shippingLabelCode: 'ABC123',
    recipient: 'Your Name',
    weight: 750.5,
  };

  boxes: Box[] = [this.defaultBox];
  newBox: Box = {
    size: 1,
    description: '',
    shippingLabelCode: '',
    recipient: '',
    weight: 0,
  };
  addNewBox(): void {
    this.boxes.push({ ...this.newBox });
    this.resetNewBox();
  }

  private resetNewBox(): void {
    this.newBox = {
      size: 1,
      description: '',
      shippingLabelCode: '',
      recipient: '',
      weight: 0,
    };
  }
}