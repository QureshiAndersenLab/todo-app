import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlexAlign, FlexDirection, FlexJustify } from '@models/style.model';

@Component({
  selector: 'flex-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flex-container.component.html',
  styleUrl: './flex-container.component.css',
})
export class FlexContainerComponent {
  @Input() direction: FlexDirection = 'row';
  @Input() justify: FlexJustify = 'start';
  @Input() align: FlexAlign = 'stretch';
  @Input() customStyles: { [key: string]: string } = {};

  get directionClass() {
    return this.direction === 'column' ? 'flex-column' : 'flex-row';
  }

  get justifyClass() {
    return (
      {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      }[this.justify] || ''
    );
  }

  get alignClass() {
    return (
      {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
      }[this.align] || ''
    );
  }
}
