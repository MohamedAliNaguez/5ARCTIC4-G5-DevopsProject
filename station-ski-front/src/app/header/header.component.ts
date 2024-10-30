import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Ensure you're using SCSS or CSS based on your setup
})
export class HeaderComponent {
  username: string = 'Admin'; // Replace with dynamic user data
  dropdownOpen: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    // Implement logout logic here
    console.log('User logged out');
  }
}
