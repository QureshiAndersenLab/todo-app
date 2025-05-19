import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() customStyles: { [key: string]: string } = {};

  @Output() handleClick = new EventEmitter<void>();

  buttonClicked(): void {
    this.handleClick?.emit();
  }
}
