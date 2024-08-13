import { Component } from '@angular/core';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css']
})
export class RevistaComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onWindowClick(event: any) {
    if (event.target.className === 'modal') {
      this.closeModal();
    }
  }
}
