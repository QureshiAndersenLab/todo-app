import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-error',
  standalone: true,
  imports: [],
  templateUrl: './display-error.component.html',
  styleUrl: './display-error.component.css',
})
export class DisplayErrorComponent {
  @Input() message!: string;
}
