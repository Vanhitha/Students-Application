import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  user: any;

constructor(private userService: UserService) {}

ngOnInit(): void {
  this.userService.user$.subscribe((user: any) => {
    this.user = user;
  });
}
}
