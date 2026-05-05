import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../user-service'
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  user: any;

  constructor(private userService: UserService,private renderer: Renderer2) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user: any) => {
      this.user = user;
    });
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  isMenuOpen = false;

  /* 🔥 ADD THIS */
  @Output() menuToggle = new EventEmitter<boolean>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    /* 🔥 SEND STATE TO HOME */
    this.menuToggle.emit(this.isMenuOpen);
  }
     isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();

    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  applyTheme() {
  const theme = this.isDarkMode ? 'dark' : 'light';
  document.documentElement.setAttribute('data-bs-theme', theme);
}
}