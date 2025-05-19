import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from '@services/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  constructor(public modal: ModalService, public el: ElementRef) {}

  @Input() modalID: string = '';

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal(): void {
    this.modal.toggleModal(this.modalID);
  }
}
