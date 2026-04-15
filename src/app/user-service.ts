// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

 private userSubject = new BehaviorSubject(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  getUserFromStorage() {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : {};
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user); // 🔥 notify all components
  }
}
