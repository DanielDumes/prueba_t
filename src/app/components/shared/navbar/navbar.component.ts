import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showDropdown1 = false;
  showDropdown2 = false;

  
  toggleDropdown1() {
    this.showDropdown1 = !this.showDropdown1;
  }

  toggleDropdown2() {
    this.showDropdown2 = !this.showDropdown2;
  }
}
