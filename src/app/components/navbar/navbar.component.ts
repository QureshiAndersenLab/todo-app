import { Component } from '@angular/core';
import { FlexContainerComponent } from '../flex-container/flex-container.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FlexContainerComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  title: string = 'My TODO App';
}
